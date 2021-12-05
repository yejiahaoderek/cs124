import TaskLoader from "./components/TaskLoader";
import TaskList from "./components/TaskList";
import firebase from "firebase/compat";
import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollection} from "react-firebase-hooks/firestore";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDj8RgS2ttSTayF0nByWTcOJCNchTkxb3Q",
    authDomain: "my-taskmanager-reactapp.firebaseapp.com",
    projectId: "my-taskmanager-reactapp",
    storageBucket: "my-taskmanager-reactapp.appspot.com",
    messagingSenderId: "147010276461",
    appId: "1:147010276461:web:0b3e52192f1579258a0364",
    measurementId: "G-XB9REXV77G"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const collectionName = "yejiahaoderek-taskList-withAuth";
const googleProvider = new firebase.auth.GoogleAuthProvider();


function App(props) {
    const [user, loading, error] = useAuthState(auth);

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    if (loading) {
        return <p>Checking...</p>
    } else if (user) {
        return <div>
        <SignedInApp {...props} user={user}/>
        <button type="button" onClick={() => auth.signOut()}>Logout</button>
        {!user.emailVerified && <button type="button" onClick={verifyEmail}>Verify email</button>}
        </div>
    } else {
        return <>
            <SignIn key="Sign In"/>
            <SignUp key="Sign Up"/>
        </>
    }

}

const FAKE_EMAIL = 'foo@bar.com';
const FAKE_PASSWORD = 'xyzzyxx';


function SignIn() {
    const [
        signInWithEmailAndPassword,
        userCredential, loading, error
    ] = useSignInWithEmailAndPassword(auth);



    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Logging in…</p>
    }
    return <div>
        {error && <p>"Error logging in: " {error.message}</p>}
        <button onClick={() =>
            signInWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>Login with test user Email/PW
        </button>
        <button onClick={() =>
            auth.signInWithPopup(googleProvider)}>Login with Google
        </button>
    </div>
}


function SignUp() {
    const [
        createUserWithEmailAndPassword,
        userCredential, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Signing up…</p>
    }
    return <div>
        {error && <p>"Error signing up: " {error.message}</p>}
        <button onClick={() =>
            createUserWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>
            Create test user
        </button>

    </div>
}

function SignedInApp(props) {
    let lists = [];
    let query = db.collection(collectionName).where('owner', "==", props.user.uid);
    const [value, loading, error] = useCollection(query);
    const [currList, setCurrList] = useState([]);
    if (value) {
        lists = value.docs.map(doc => doc.data())
    }

    const handleAddList = (text) =>{
        if (text !== ""){
            const listID = generateUniqueID()
            const docRef = db.collection(collectionName).doc(listID)
            docRef.set({
                id: listID,
                text: text,
                owner: props.user.uid
            }).catch((error) => {
                console.error("Error deleting document: ", error);
            });
        }
    }

    function handleListFieldChanged(listID, field, value) {
        const docRef = db.collection(collectionName).doc(listID);
        docRef.update({
            [field]: value
        })
    }

    const handleCurrList = (newList) => {
        setCurrList(newList)
    }

    return currList.length === 0 ?
        <TaskList
            lists={lists}
            isLoading={loading}
            onAddList={handleAddList}
            onCurrList={handleCurrList}
            onListChange={handleListFieldChanged}
            collectionName={collectionName}
            db={db}
        /> :
        <TaskLoader
            currListID={currList[0]}
            currList={currList[1]}
            collectionName={collectionName}
            db={db}
            onCurrList={handleCurrList}
            user={props.user}
            query={query}
        />
}

export default App;
