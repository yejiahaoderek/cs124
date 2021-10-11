import App from "./App";
import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function InMemoryApp(props) {
    const [tasks, setTasks] = useState(props.initialData)
    const [showCompletedItems, setShowCompletedItems] = useState(true)

    const handleToggleCompletedItems= () => {
        setShowCompletedItems(!showCompletedItems)
    }

    const handleAddTask = (text) =>{
        if (text !== ""){
            setTasks([...tasks, {
                    id: generateUniqueID(),
                    text: text,
                    isCompleted: false,
                    isSelected: false,
                }])
        };
    }

    function handleTaskFieldChanged(itemID, field, value) {
        setTasks(tasks.map(
            task => task.id !== itemID ? task : {...task, [field]: value}))
    }

    function handleItemDeleted(itemID) {
        setTasks(tasks.filter((item) => item.id !== itemID));
    }


    return <App data={tasks}
                showCompletedItems={showCompletedItems}
                handleAddTask={handleAddTask}
                handleTaskFieldChanged={handleTaskFieldChanged}
                handleItemDeleted={handleItemDeleted}
                handleToggleCompletedItems={handleToggleCompletedItems}
    />
}

export default InMemoryApp