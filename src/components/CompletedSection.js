import ItemList from "./ItemList";
import './CompletedSection.css'

function CompletedSection(props) {
    const hasCompletedItem = props.tasks.filter((item) => item.isCompleted).length > 0

    return <div className={"completedSection"}
                role="heading"
                aria-level="1"
                aria-label="Completed section">
        <button className={"hiddenButton"}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABNklEQVRIie3Wv0rDUBTH8d85cfEBKoK6d2inBDcRrFRMwDcIZsoz2S3aR5A2UCzibOLSDt1bENoXcDD3uChIM5g/txeVfsdDkk+4uRcCbPvv0frAvrj2wNIj4ECTsQAQJvFd/H3IuTdhudGIAsAhgN76MAd/Xqi7oyKwkWrBBCwVkyOCE2MwAUth6bwMblOL5c0UvFLE58mgP7W7QVMJ3ZuAV0LcSYfRxO4GTbLUI4D9TcNa0LKwNrQUrJgu02E0cTy/xZZ6qoOWgnVXGGYlse0G7WTQn6qMTwG8GoEBNEjU2HaDdjqKZpLxWR287FJrw6t8Yy141c3VYFEPjue30lE0Y5IrUzAE2CNF42PXd94z2S17/05V+AsXoWfm3I/Mj/2qc7zYgDMvAoea8TkRhxqft+2P9AFk331uPX6zqQAAAABJRU5ErkJggg==" alt="padding button"/>
        </button>
            <div className="headerButton" role="heading">
                <h1>Completed </h1>
                {(hasCompletedItem) && (
                    !props.deleteConfirm ?
                        <button className={!props.editID ? "warning" : "disabledWarning"}
                                onClick={() => {
                                    if (props.editID) return
                                    props.onDeleteConfirm(!props.deleteConfirm)
                                }}>
                            Delete All
                        </button>
                        :
                        <div className="buttonGroup">
                            <button className="warningConfirm"
                                    onClick={() => {
                                        props.onDeleteAll();
                                        props.onDeleteConfirm(false)
                                    }}>
                                Delete
                            </button>
                            <button
                                className={"cancel"}
                                onClick={()=>props.onDeleteConfirm(false)}>Cancel</button>
                        </div>)
                }
            </div>

            <div className="completedTaskItems">
                {props.tasks.filter((item) => item.isCompleted).length !== 0 ?
                    <ItemList
                        className="completeItem"
                        tasks={props.tasks.filter((item) => item.isCompleted)}
                        editID={props.editID}
                        newText={props.newText}
                        onRename={props.onRename}
                        deleteConfirm={props.deleteConfirm}
                        onDelete={props.onDelete}
                        onChange={props.onChange}
                        onClick={props.onClick}
                    />
                    :
                    <div className="completeItem">
                        <div className="task">
                            Completed tasks will appear here
                        </div>
                    </div>
                }

            </div>
    </div>;
}

export default CompletedSection