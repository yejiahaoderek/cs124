import ItemList from "./ItemList";

function IncompleteSection(props) {
    return (
        <div>
            <div className="headerButton">
                <h1>To-Do</h1>
                {props.editID !== false &&
                <button
                    className="addButton"
                >
                    Done
                </button>
                }
                </div>
        <div className="taskItems">
            {props.tasks.filter((item) => item.isCompleted === false).length !== 0 ?
                <ItemList tasks={props.tasks.filter((item) => item.isCompleted === false)}
                          editID={props.editID}
                          onDelete={props.onDelete}
                          onChange={props.onChange}
                          onClick={props.onClick}

                /> :
                <div className="listItem">
                    <div className="item">
                        You don't have any To-Do now
                    </div>
                </div>
            }

        </div>
    </div>
    )
}
export default IncompleteSection