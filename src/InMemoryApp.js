import App from "./App";
import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function InMemoryApp(props) {
    const [tasks, setTasks] = useState(props.initialData)

    function handleAddTask() {
        setTasks([...tasks, {
                id: generateUniqueID(),
                text: "fake data",
                isSelected: false,
                isCompleted: false,
            }]
        );
    }

    function handleTaskFieldChanged(id, field, value) {
        setTasks(tasks.map(
            task => task.id !== id ? task : {...task, [field]: value}))
    }

    function handleItemDeleted(itemID) {
        // setTasks(tasks.map(task => task.id !== itemID));
        setTasks(tasks.filter((item) => item.id !== itemID));
    }


    return <App data={tasks}
                handleAddTask={handleAddTask}
                handleTaskFieldChanged={handleTaskFieldChanged}
                handleItemDeleted={handleItemDeleted}
    />
}

export default InMemoryApp