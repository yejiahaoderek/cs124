import ItemList from "./ItemList";
function IncompleteSection(props) {
    return (
        <div className={"incompleteSection"}>
            <div className="headerButton">
                <h1>To-Do</h1>
                {props.editID !== false &&
                    <div>
                        <button
                            className="confirmButton"
                            onClick={()=>props.onConfirm(props.editID, "text", props.newText)}
                        >
                            Done
                        </button>

                        <button
                        onClick={props.onQuitEdit}
                        >
                        Cancel
                        </button>
                    </div>
                }
                </div>

        <div className="taskItems">
            {props.tasks.filter((item) => item.isCompleted === false).length !== 0 ?
                <ItemList tasks={props.tasks.filter((item) => item.isCompleted === false)}
                          editID={props.editID}
                          newText={props.newText}
                          onRename={props.onRename}
                          deleteConfirm={props.deleteConfirm}
                          onDelete={props.onDelete}
                          onChange={props.onChange}
                          onClick={props.onClick}
                /> :
                <div className="listItem">
                    <div className="task">
                        You don't have any To-Do now
                    </div>
                </div>
            }

        </div>
    </div>
    )
}
export default IncompleteSection