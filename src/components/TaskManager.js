import IncompleteSection from "./IncompleteSection";
import CompletedSection from "./CompletedSection";
import {useState} from "react";

function TaskManager(props) {
    const [editID, setEditID] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [text, setText] = useState("")

    function handleRenameConfirm(editID, field, newText) {
        props.onTaskFieldChanged(editID, [field], newText)
        setEditID(false)
    }

    function handleDeleteConfirm(deleteConfirm){
        setDeleteConfirm(deleteConfirm)
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
                deleteConfirm={deleteConfirm}
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
                deleteConfirm={deleteConfirm}
                showCompletedItems={props.showCompletedItems}
                onDeleteConfirm={handleDeleteConfirm}
                onDelete={props.handleItemDeleted}
                onDeleteAll={props.onDeleteAll}
                onChange={props.onTaskFieldChanged}
                onClick={handleItemClick}
            />


            <div className="addList">
                <input
                    type="text"
                    className="taskInputBox"
                    name="task"
                    onChange={(e)=> setText(e.target.value)}
                    placeholder={
                        editID !== false ? `Please finish edit first`
                        :
                        deleteConfirm !== false ?  `Please confirm your deleteAll action`
                        :
                        `Enter your new task here`
                    }
                />
                <button type="button"
                        className="addButton"
                        onClick={()=> {
                            if (editID !== false) return
                            props.onAddTask(text)
                        }}>+
                </button>
            </div>

        </div>
    </div>
}

export default TaskManager