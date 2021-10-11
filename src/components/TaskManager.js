import IncompleteSection from "./IncompleteSection";
import CompletedSection from "./CompletedSection";
import {useState} from "react";

function TaskManager(props) {
    const [editID, setEditID] = useState(false)
    const [text, setText] = useState("")

    function onAddChange(e) {
        setText(e.target.value);
    }

    function handleItemClick(itemID) {
        if (!props.tasks.filter((item) => item.id === itemID)[0].isCompleted)
            setEditID(itemID)
    }

    return <div>
        <title>Task Tracker</title>
        <div id="outlier">
            <IncompleteSection
                tasks={props.tasks}
                onDelete={props.handleItemDeleted}
                onChange={props.onTaskFieldChanged}
                editID={editID}
                onClick={handleItemClick}
            />

            <button id="hideButton"
                onClick={props.onToggleCompletedItems}>
                {props.showCompletedItems? `Hide` : `Show`} Completed
            </button>


            <CompletedSection
                tasks={props.tasks}
                showCompletedItems={props.showCompletedItems}
                onDelete={props.handleItemDeleted}
                onChange={props.onTaskFieldChanged}
                onClick={handleItemClick}
            />


            <div className="addList">
                <input
                    type="text"
                    className="taskInputBox"
                    name="task"
                    placeholder="Enter new task here"
                    onChange = {onAddChange}
                />
                <button type="button"
                        className="addButton"
                        onClick={()=>props.onAddTask(text)}
                >
                    +
                </button>
            </div>

        </div>
    </div>
}

export default TaskManager