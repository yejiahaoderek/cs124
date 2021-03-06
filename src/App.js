import TaskLoader from "./components/TaskLoader";
import TaskList from "./components/TaskList";
import firebase from "firebase/compat";
import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollection} from "react-firebase-hooks/firestore";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
    sendPasswordResetEmail
} from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button'
import Alert from "./components/Alert";


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
const collectionName = "jiahao-lists";
const googleProvider = new firebase.auth.GoogleAuthProvider();


function App(props) {
    const [user, loading, error] = useAuthState(auth)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isReset, setIsReset] = useState(false)
    const [isErrorShown, setIsErrorShown] = useState(false)

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
        alert("Verification email sent. Verify your email using the link & re-login to unlock SHARING!")
    }

    function clearInput() {
        setEmail("")
        setPassword("")
    }

    if (loading) {
        return <p>Checking...</p>
    } else if (user) {
        return <>
        <SignedInApp {...props} user={user} verifyEmail={verifyEmail}/>
        </>
    } else {
        return <div id="homeOutlier">
                <div className="center">
                    <div className="logo">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAABmJLR0QA/wD/AP+gvaeTAAAFJElEQVR4nO2cW0wcVRjHz5nZZYFtYZflDrYFKdeSBqupbdVqI6ipSCKJbip9wRdNffDJO9rEh8akiUYrxDb2oTWR1Nik+KAhaaWShqgJKFRLhYCUcOuyXJbr7uzO8aGJqQi785+dpLPL93uc+fbknx8zc86e/Rg+Me1lhDakex0gliBZACQLgGQBkCwAkgVAsgBIFgDJAiBZACQLgGQBWKL6tKqKGS/zzTNnGnemGRTJvOiUJXzzwW9ag1faxczMnSNSbp7lcJ2lto5ZE4yLZy64ji0adXDAf/wd4Z3+/ympaKft+AnuchmRzXTAzywxNeV/7411TTHG1MGB1fffYn5/1MHMCHwbBk6fEvNzYQrE0KDy7QXrkaPax5yY9Jz4+AyaJHpqn3q8+tB+7fWYLOH1hrquRSwLtl20ul9iktbLdtXv7/vjJpTEEB6q2gXVY7eh2tvNhIhYJubn1JG/oZFjAkzWv3NfZGbicGsffMAnJWuttNvRKOYHkyUVFmmqs1r5th164pgbUFZxiZSbF7FM3ruPJ2u+BmMHeFEa7LoW+LAp3GPeZkv67DS/bxswphKc8t6DZ5xj61a7Hfij6lnBK1+fV86dXf+c1Wp7s0k+8Cg6ZkygRxZjLNTZETjTIjy3/zNWYVHCa6/LZRUGZTMdOmUxxpiiqL2/hfpviOVFnuqQKnfLJWXaF6KxSBSyNh/xfCEYDskCIFkAJAuAZAGQLACSBUCyAEgWAMkCIFkAJAuAZAGQLAD9XTQ3bi1c+X16YGxpxR9KscsV21OerMrMT080MJzZ0LOftaqop9qGOq+v/aAs8ecP5Bx5Il/i3KB45gL/wSKkNp3r//PWwkYFNQ9kHqstiDqYGYFvwwud42FMMcbau2/v2el4uNSpfUyfb/GHy51okuipLC8uK7lfez0my6+ol7omIpa1doxBsryzcy1ftkJJDKGxoR6Shc2GvcPzqwE1Ytnw1JJnPg5btDBZkzNaFUzObnpZ2uEsDidETFaOS+syKttpw8OYHUxW5Y6UpAQ5YllhTnJ6ahz2LGOzoc0q1e3Pbu0YC1/mPpgPDetyOl592Q19xBAqy4uhej2L0g/O37w+4tuo4JkHs145HIfNWUz3153m74av9q3t7rbIvP6RXPfBPPq6s5b+0cUfe6f/GltYXlFTt1gqtqdUV2Xkap4BYhFqDAGg/SwAkgVAsgBIFgDJAiBZACQLgGQBkCwAkgVAsgBIFgDJAiBZAPobQ7ga4OM/c08fCyyIRBfL3qNm7mY8nu3rlCUNfy//cpIvTd19UKQVh/Y1qVlVRgQzI3o2/+SeFrnn83VPCdkaeuwjtaAm6mBmBL6ypJHLck/zRmd5SLH89LbiLBKOQu1jxsq//YKyhGr59SRjYd+DEfLL3Z8GD32ifdTR8cnGY+9iSYygsaH+qPs57fXY85h7+phvNHLZ6FUWCNeWFKOAryqY6ddSxkMKnxvSlcfUgDN9cFljIQ8swllMD/p6lQyNhcKeCWcxPZisUM5epqWXKMklHEBHXawAzobJGWpBtTTcHr4qWN4ALeUTbbbKihIsiRFkZ6ZD9fCilC9OWNteZKsbvhtKuMqUZ79i8qbvz2KMiS05wae/EPas9c+m71JqmuPSFNPd68D9PqnvrDx4iS177hwRqQVq6QtqqVvIVkMTmogoG0MEX/awlVmRnM6S4vN1m3dDXTQA8bz9ZDgkC4BkAZAsAJIFQLIASBYAyQIgWQAkC4BkAZAsgH8AprKX7XH3GyUAAAAASUVORK5CYII="/>
                        <div>Task Manager</div>
                    </div>
                    {!isReset && <>
                    <div className="inputFields">
                        <input
                            class="homeInput"
                            onChange={(e)=>setEmail(e.target.value)}
                            id="email"
                            type="text"
                            placeholder="Email"
                        />
                        <input
                            className="homeInput"
                            type="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="typeInfo">
                        <SignUp key="Sign Up" id="signUp" email={email} password={password} clearInput={clearInput} isErrorShown={isErrorShown} setIsErrorShown={setIsErrorShown}/>
                        <SignIn key="Sign In" id="signIn" email={email} password={password} clearInput={clearInput} isErrorShown={isErrorShown} setIsErrorShown={setIsErrorShown}/>
                        <div id="reset"><button className="homeButton"
                            onClick={()=> {
                                setIsReset(true)
                            }}>Reset Password</button></div>
                    </div>
                    <div className="3PSignIn">
                        <GoogleButton
                            id="googleButton"
                            type="light"
                            onClick={() => auth.signInWithPopup(googleProvider)}
                        />
                    </div> </>}
                    {isReset && <>
                    <div className="inputFields">
                        <input
                            className="homeInput"
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div id="signIn">
                        <button className="homeButton"
                            onClick={()=>{
                                auth.sendPasswordResetEmail(email).then(function() {
                                    alert("Password reset email sent.")
                                    setIsReset(false)
                                })
                                    .catch(function(error) {
                                        alert(error);
                                    });
                                clearInput()
                            }}
                        >Send reset email</button>
                    </div></>}

                </div>
        </div>
    }

}


function SignIn(props) {
    const [
        signInWithEmailAndPassword,
        userCredential, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return <div id="signIn">
            <button className="loadingHomeButton">Login</button>
        </div>
    }

    if (!props.isErrorShown && error)
        alert(error.message)
    props.setIsErrorShown(true)

    return <div id="signIn">
        <button className="homeLogInButton" onClick={() =>
        {
            props.setIsErrorShown(false)
            signInWithEmailAndPassword(props.email, props.password)
            props.clearInput()
        }}>Login
        </button>
    </div>
}


function SignUp(props) {
    const [
        createUserWithEmailAndPassword,
        userCredential, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);

    if (loading) {
        return <div id="signUp">
            <button className="loadingHomeButton">Sign up</button>
        </div>
    }

    if (!props.isErrorShown && error)
        alert(error.message)
    props.setIsErrorShown(true)


    return <div id="signUp">
        <button className="homeButton" onClick={() => {
            props.setIsErrorShown(false)
            createUserWithEmailAndPassword(props.email, props.password)
            props.clearInput()
        }}>
            Sign up
        </button>
    </div>
}

function SignedInApp(props) {
    let lists = []
    let sharedLists = []
    let query = db.collection(collectionName).where('owner', "==", props.user.uid);

    let shareQuery = db.collection(collectionName).where('isSharedWith', "array-contains", props.user.email);
    const [value, loading, error] = useCollection(query);
    const [sharedValue, sharedLoading, sharedError] = useCollection(shareQuery);
    const [currList, setCurrList] = useState([]);

    console.log(sharedError)

    if (value || sharedValue) {
        lists = value.docs.map(doc => doc.data())
        if (sharedValue) {
            sharedLists = sharedValue.docs.map(doc => doc.data())
            if (sharedValue.size > 0) lists = [...lists, ...sharedLists]
        }
    }



    const handleAddList = (text) =>{
        if (text !== ""){
            const listID = generateUniqueID()
            const docRef = db.collection(collectionName).doc(listID)
            docRef.set({
                id: listID,
                text: text,
                owner: props.user.uid,
                ownerEmail : props.user.email,
                isSharedWith: []
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
            verifyEmail={props.verifyEmail}
            user={props.user}
            auth={auth}
        /> :
        <TaskLoader
            currListID={currList[0]}
            currList={currList[1]}
            collectionName={collectionName}
            db={db}
            lists={lists}
            onCurrList={handleCurrList}
            user={props.user}
            query={query}
        />
}

export default App;
