import ItemList from "./ItemList";
import './IncompleteSection.css'

function IncompleteSection(props) {
    return (
        <div className={"incompleteSection"}>
            <div className="headerButton">
                <h1>To-Do</h1>

                {!props.editID &&
                    <div>
                        <select
                                className={"sortSelect"}
                                name="category"
                                id="category"
                                onChange={(e)=>{
                                    props.onSort(e.target.value)
                                }}
                        >
                            <option value="priority">
                                By Priority
                            </option>
                            <option value="text">
                                By Name
                            </option>
                            <option value="created">
                                By Date
                            </option>
                        </select>
                    </div>
                }

                {props.editID &&
                    <div className={"buttonGroup"}>
                        <button
                            className="confirmButton"
                            onClick={()=>{
                                props.onConfirm(props.editID, props.newText, props.newPriority)
                            }}
                        >
                            Done
                        </button>

                        <button
                            className={"cancel"}
                            onClick={() => {
                                props.onQuitEdit();
                            }}
                        >
                        Cancel
                        </button>
                    </div>
                }
                </div>

        <div className="taskItems">
            {props.tasks.filter((item) => !item.isCompleted).length !== 0 ?
                <ItemList tasks={props.tasks.filter((item) => !item.isCompleted)}
                          editID={props.editID}
                          newText={props.newText}
                          newPriority={props.newPriority}
                          onRename={props.onRename}
                          onPriority={props.onPriority}
                          deleteConfirm={props.deleteConfirm}
                          onDelete={props.onDelete}
                          onChange={props.onChange}
                          onClick={props.onClick}
                /> :
                <div className="listItem">
                    <div className="task">
                        {props.isLoading ?
                            `Loading...` :  `You don't have any To-Do now`}
                    </div>
                </div>
            }

        </div>
    </div>
    )
}
export default IncompleteSection