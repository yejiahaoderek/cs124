import ItemList from "./ItemList";
import './CompletedSection.css'

function CompletedSection(props) {
    const hasCompletedItem = props.tasks.filter((item) => item.isCompleted).length > 0

    return <div className={"completedSection"}>
        <div>
            <div className="headerButton">
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
                            <button className="warning"
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
        </div>
    </div>;
}

export default CompletedSection