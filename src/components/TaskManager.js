import IncompleteSection from "./IncompleteSection";
import CompletedSection from "./CompletedSection";
import {useState} from "react";

function TaskManager(props) {
    const [editID, setEditID] = useState(false)
    const [text, setText] = useState("")

    function handleRenameConfirm(editID, field, newText) {
        props.onTaskFieldChanged(editID, [field], newText)
        setEditID(false)
    }

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
                onConfirm={handleRenameConfirm}
            />

            <button id="hideButton"
                onClick={props.onToggleCompletedItems}>
                {props.showCompletedItems? `Hide` : `Show`} Completed
            </button>


            <CompletedSection
                tasks={props.tasks}
                editID={editID}
                showCompletedItems={props.showCompletedItems}
                onDelete={props.handleItemDeleted}
                onDeleteAll={props.onDeleteAll}
                onChange={props.onTaskFieldChanged}
                onClick={handleItemClick}
            />


            <div className="addList">
                {editID === false ?
                    <input
                        type="text"
                        className="taskInputBox"
                        name="task"
                        placeholder="Enter new task here"
                        onChange = {onAddChange}
                    />
                    :
                    <input
                        type="text"
                        className="taskInputBox"
                        name="task"
                        value="Finish edit first"
                        onChange = {onAddChange}
                    />}
                <button type="button"
                        className="addButton"
                        onClick={()=> {
                            if (editID !== false) return
                            props.onAddTask(text)
                        }}
                >
                    +
                </button>
            </div>

        </div>
    </div>
}

export default TaskManager