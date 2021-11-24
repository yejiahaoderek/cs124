import TaskManager from "./components/TaskManager";
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
const collectionName = "yejiahaoderek-tasks";


function App(props) {
    const [sortChoice , setSortChoice] = useState("priority");
    const [showCompletedItems, setShowCompletedItems] = useState(true)
    let tasks = [];
    let query = db.collection(collectionName)

    query = sortChoice === "priority" ?
        query.orderBy(sortChoice, "desc") : query = query.orderBy(sortChoice)
    const [value, loading, error] = useCollection(query);

    if (value) {
        tasks = value.docs.map(doc => doc.data())
    }

    const handleToggleCompletedItems= () => {
        setShowCompletedItems(!showCompletedItems)
    }

    function handleSort(newSortChoice) {
        setSortChoice(newSortChoice)
    }

    const handleAddTask = (text) =>{
        if (text !== ""){
            const itemID = generateUniqueID();
            const docRef = db.collection(collectionName).doc(itemID);
            docRef.set({
                id: itemID,
                text: text,
                isCompleted: false,
                priority: 0,
                created: firebase.database.ServerValue.TIMESTAMP,
            })
            // setTasks([...tasks, {
            //     id: taskID,
            //     text: text,
            //     isCompleted: false
            // }])
        }
    }

    function handleTaskFieldChanged(itemID, field, value) {
        const docRef = db.collection(collectionName).doc(itemID);
        docRef.update({
            [field]: value
        })
        // setTasks(tasks.map(
        //     task => task.id !== itemID ? task : {...task, [field]: value}))
    }

    function handleItemDeleted(itemID) {
        const docRef = db.collection(collectionName).doc(itemID);
        docRef.delete(itemID)
        // setTasks(tasks.filter((item) => item.id !== itemID));
    }

    function handleDeleteAll(){
        tasks.forEach(item => {
            if (item.isCompleted) {
                const docRef = db.collection(collectionName).doc(item.id);
                docRef.delete(item.id)
            }
        })
        // setTasks(tasks.filter((item) => !item.isCompleted));
    }

    return (
     <TaskManager tasks={tasks}
                  isLoading={loading}
                  showCompletedItems={showCompletedItems}
                  onAddTask={handleAddTask}
                  onSort = {handleSort}
                  onTaskFieldChanged={handleTaskFieldChanged}
                  onDeleteAll={handleDeleteAll}
                  handleItemDeleted={handleItemDeleted}
                  onToggleCompletedItems={handleToggleCompletedItems}
     />
  );
}

export default App;
