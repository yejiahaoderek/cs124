import ItemList from "./ItemList";
import './IncompleteSection.css'

function IncompleteSection(props) {
    return (
        <div className={"incompleteSection"}
             role="heading"
             aria-level="1"
             aria-label="To dos section"
        >
            <button className={"goToButton"}
                    onClick={() => props.onCurrList([])}
                    aria-label="Back to list homepage"
            >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABNklEQVRIie3Wv0rDUBTH8d85cfEBKoK6d2inBDcRrFRMwDcIZsoz2S3aR5A2UCzibOLSDt1bENoXcDD3uChIM5g/txeVfsdDkk+4uRcCbPvv0frAvrj2wNIj4ECTsQAQJvFd/H3IuTdhudGIAsAhgN76MAd/Xqi7oyKwkWrBBCwVkyOCE2MwAUth6bwMblOL5c0UvFLE58mgP7W7QVMJ3ZuAV0LcSYfRxO4GTbLUI4D9TcNa0LKwNrQUrJgu02E0cTy/xZZ6qoOWgnVXGGYlse0G7WTQn6qMTwG8GoEBNEjU2HaDdjqKZpLxWR287FJrw6t8Yy141c3VYFEPjue30lE0Y5IrUzAE2CNF42PXd94z2S17/05V+AsXoWfm3I/Mj/2qc7zYgDMvAoea8TkRhxqft+2P9AFk331uPX6zqQAAAABJRU5ErkJggg==" alt="Left arrow: go back to homepage"/>
            </button>
            <div className="headerButton" role="heading" aria-level="1">
                <h1>{props.currList} | To-Do</h1>

                {!props.editID &&
                    <div className={"buttonGroup"}>
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
                <div className="completeItem">
                    <div className="task">
                        {props.isLoading ?
                            `Loading` :  `You don't have any To-Do now`}
                    </div>
                </div>
            }

        </div>
    </div>
    )
}
export default IncompleteSection