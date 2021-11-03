import ItemList from "./ItemList";
import './IncompleteSection.css'

function IncompleteSection(props) {
    return (
        <div className={"incompleteSection"}>
            <div className="headerButton">
                <h1>To-Do</h1>

                {!props.editID &&
                    <div>
                        <label htmlFor="cars">Sort by:</label>
                        <select name="category" id="category">
                            <option value="priority">priority</option>
                            <option value="name">name</option>
                            <option value="date">date created</option>
                        </select>
                    </div>
                }

                {props.editID &&
                    <div>
                        <button
                            className="confirmButton"
                            onClick={()=>{
                                props.onConfirm(props.editID, props.newText, props.newPriority)
                            }}
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
                        You don't have any To-Do now
                    </div>
                </div>
            }

        </div>
    </div>
    )
}
export default IncompleteSection