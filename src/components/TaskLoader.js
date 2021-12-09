import TaskManager from "./TaskManager";
import {useState} from "react";
import {useCollection} from "react-firebase-hooks/firestore";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";

function TaskLoader(props) {
    const [sortChoice , setSortChoice] = useState("priority");
    const [showCompletedItems, setShowCompletedItems] = useState(true)
    let tasks = [];
    let sharedTasks = []

    let query = props.db.collection(props.collectionName).doc(props.currListID).collection("Tasks")
    let taskQuery = query.orderBy(sortChoice, sortChoice === "priority" ? "desc": "asc")

    const [value, loading, error] = useCollection(taskQuery);
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
            const docRef = props.db.collection(props.collectionName).doc(props.currListID).collection("Tasks").doc(itemID);
            docRef.set({
                id: itemID,
                text: text,
                isCompleted: false,
                priority: 0,
                owner: props.user.uid,
                created: firebase.database.ServerValue.TIMESTAMP,
            })
        }
    }

    function handleTaskFieldChanged(itemID, field, value) {
        const docRef = props.db.collection(props.collectionName).doc(props.currListID).collection("Tasks").doc(itemID);
        docRef.update({
            [field]: value
        })
    }

    function handleItemDeleted(itemID) {
        const docRef = props.db.collection(props.collectionName).doc(props.currListID).collection("Tasks").doc(itemID);
        docRef.delete(itemID)
    }

    function handleDeleteAll(){
        tasks.forEach(item => {
            if (item.isCompleted) {
                const docRef = props.db.collection(props.collectionName).doc(props.currListID).collection("Tasks").doc(item.id);
                docRef.delete(item.id)
            }
        })
    }

    return (<TaskManager
             tasks={tasks}
             isLoading={loading}
             showCompletedItems={showCompletedItems}
             onAddTask={handleAddTask}
             onSort = {handleSort}
             onTaskFieldChanged={handleTaskFieldChanged}
             onDeleteAll={handleDeleteAll}
             handleItemDeleted={handleItemDeleted}
             onToggleCompletedItems={handleToggleCompletedItems}
             onCurrList={props.onCurrList}
             currList={props.currList}
             currListID={props.currListID}
             user={props.user}
    />)
}

export default TaskLoader