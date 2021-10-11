import App from "./App";
import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function InMemoryApp(props) {
    const [tasks, setTasks] = useState(props.initialData)
    const [text, setText] = useState("")

    const handleAddTask = (e) =>{
        e.preventDefault();
        setTasks([...tasks, {
                id: generateUniqueID(),
                text: text,
                isCompleted: false,
                isSelected: false,
            }]
        );
    }

    function onAddChange(e) {
        setText(e.target.value);
    }

    function handleTaskFieldChanged(id, field, value) {
        setTasks(tasks.map(
            task => task.id !== id ? task : {...task, [field]: value}))
    }

    function handleItemDeleted(itemID) {
        setTasks(tasks.filter((item) => item.id !== itemID));
    }


    return <App data={tasks}
                handleAddTask={handleAddTask}
                handleTaskFieldChanged={handleTaskFieldChanged}
                handleItemDeleted={handleItemDeleted}
                onAddChange={onAddChange}
    />
}

export default InMemoryApp