import TaskLoader from "./components/TaskLoader";
import TaskList from "./components/TaskList";
import firebase from "firebase/compat";
import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollection} from "react-firebase-hooks/firestore";

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
const collectionName = "yejiahaoderek-taskList";


function App(props) {
    let lists = [];
    let query = db.collection(collectionName)
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
                text: text
            })
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

    return (
        currList.length == 0 ?
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
            />
        );
}

export default App;
