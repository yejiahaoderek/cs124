import IncompleteSection from "./IncompleteSection";
import CompletedSection from "./CompletedSection";
import {useState} from "react";
import './TaskManager.css';
// import { useMediaQuery } from 'react-responsive'


function TaskManager(props) {
    const [editID, setEditID] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [enteredText, setEnteredText] = useState('');
    const [newPriority, setNewPriority] = useState(0);
    const [newText, setNewText] = useState("")

    function handleRename(newText) {
        setNewText(newText)
    }

    function handlePriority(newPriority){
        setNewPriority(newPriority)
    }

    function handleRenameConfirm(editID, newText, newPriority) {
        props.onTaskFieldChanged(editID, "text", newText)
        props.onTaskFieldChanged(editID, "priority", newPriority)
        setEditID(false)
    }

    function handleQuitEdit() {
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
        <div id="outlier">
            <div className={"sectionWrapper"}>

            <div className={"incompleteWrapper"}>
                <IncompleteSection
                    tasks={props.tasks}
                    user={props.user}
                    isLoading={props.isLoading}
                    onDelete={props.handleItemDeleted}
                    onChange={props.onTaskFieldChanged}
                    onSort={props.onSort}
                    onRename={handleRename}
                    onPriority={handlePriority}
                    newText={newText}
                    newPriority={newPriority}
                    editID={editID}
                    deleteConfirm={deleteConfirm}
                    onClick={handleItemClick}
                    onConfirm={handleRenameConfirm}
                    onQuitEdit={handleQuitEdit}
                    currList={props.currList}
                    onCurrList={props.onCurrList}
                />

                <div className={"placeholder"}></div>

                <button
                    id="hideButton"
                    className={!editID && !deleteConfirm ? "hideButton" : "disabledHideButton"}
                    onClick={()=> {
                        if (editID) return
                        if (deleteConfirm) return
                        props.onToggleCompletedItems()}
                    }>
                    {props.showCompletedItems? `Hide` : `Show`} Completed
                </button>
            </div>

            {props.showCompletedItems && <div className={"completeWrapper"}>
                <CompletedSection
                    tasks={props.tasks}
                    editID={editID}
                    onRename={handleRename}
                    newText={newText}
                    deleteConfirm={deleteConfirm}
                    showCompletedItems={props.showCompletedItems}
                    onDeleteConfirm={handleDeleteConfirm}
                    onDelete={props.handleItemDeleted}
                    onDeleteAll={props.onDeleteAll}
                    onChange={props.onTaskFieldChanged}
                    onClick={handleItemClick}
                /></div>
            }
            </div>
            {!editID && !deleteConfirm &&
            <div className="addList">
                <input
                    type="text"
                    className="taskInputBox"
                    name="task"
                    value={enteredText}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            props.onAddTask(enteredText)
                            setEnteredText("")
                        }
                    }}
                    onChange={(e) => setEnteredText(e.target.value)}
                    placeholder={`Enter your new task here`}
                />

                <button type="button"
                        className={"addButton"}
                        aria-label="add this new task to current list"
                        onClick={()=> {
                            if (editID) return
                            if (deleteConfirm) return
                            props.onAddTask(enteredText)
                            setEnteredText("")
                        }}>+
                </button>
            </div>}

        </div>
    </div>
}

export default TaskManager