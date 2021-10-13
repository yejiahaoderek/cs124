import ItemList from "./ItemList";
import {useState} from "react";

function CompletedSection(props) {
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const hasCompletedItem = props.tasks.filter((item) => item.isCompleted === true).length > 0

    return <div>
        {props.showCompletedItems &&
        <div>
            <div className="headerButton">
                <h1>Completed </h1>
                {(hasCompletedItem) && (
                    !deleteConfirm ?
                        <button className="warning"
                                onClick={() => setDeleteConfirm(!deleteConfirm)}>
                            Delete All
                        </button>
                        :
                        <div className="buttonGroup">
                            <button className="warning"
                                    onClick={() => {
                                        props.onDeleteAll();
                                        setDeleteConfirm(false)
                                    }}>
                                Delete
                            </button>
                            <button>Cancel</button>
                        </div>)
                }
            </div>

            <div className="completedTaskItems">
                {props.tasks.filter((item) => item.isCompleted === true).length !== 0 ?
                    <ItemList
                        className="completeItem"
                        tasks={props.tasks.filter((item) => item.isCompleted === true)}
                        onDelete={props.onDelete}
                        onChange={props.onChange}
                        onClick={props.onClick}
                    />
                    :
                    <div className="completeItem">
                        <div className="item">
                            You don't have any completed tasks
                        </div>
                    </div>
                }


            </div>
        </div>
        }
    </div>;
}

export default CompletedSection