import './Item.css'

function Item(props) {
    console.log(props.priority)
    return (
        <div className={
            !props.isCompleted ?
                props.editID === props.id ? `selectedListItem` : `listItem`
                :
                `completeItem`}
                onClick={() => {
                    if (props.deleteConfirm) return;
                    props.onClick(props.id)
                    props.onRename(props.text)
                }}>

            {/*checkbox*/}
            <input type="checkbox" name="isCompleted"
                   checked={props.isCompleted}
                   onClick={(e) => e.stopPropagation()}
                   onChange={() => {
                       if (props.editID !== false) return
                       if (props.deleteConfirm) return;
                       props.onChange(props.id, "isCompleted", !props.isCompleted);
                    }
                   }
            />

            {!props.editID && props.priority !== 0 && <text className={"priorityStatus"}>
                {props.priority === 1 ? "!" : props.priority === 2 ? "!!" : "!!!"}
            </text>}

            {/*Todo text*/}
            {props.editID === props.id ?
                <input type="text"
                       className="rename"
                       onChange={(e)=> props.onRename(e.target.value)}
                />
                :
                (props.isCompleted === true) ?
                    <div className={"task"}>{props.text}</div>
                :
                <input type="text"
                       className="task"
                       value={props.text}
                       onChange={(e)=>props.onRename(e.target.value)}
                />
            }

            {props.editID &&
                <div className={"prorityGroup"}>
                    <div className={props.priority === 1 ? "prioritySelected" : "priorityDisplay"}                        className={"priorityDisplay"}
                        onClick={""}
                    >
                        !
                    </div>
                    <div className={props.priority === 2 ? "prioritySelected" : "priorityDisplay"}>
                        !!
                    </div>
                    <div className={props.priority === 3 ? "prioritySelected" : "priorityDisplay"}>
                        !!!
                    </div>
                </div>
            }

            {/* Delete button */}
            { props.editID == false && <div className="buttonGroup" onClick={(e) => e.stopPropagation()}>
                <button
                    className="deleteButton"
                    onClick={() => {
                        if (props.editID !== false) return
                        if (props.deleteConfirm) return;
                        props.onDelete(props.id)
                    }}
                > X
                </button>
            </div> }
        </div>
    );
}

export default Item