function Item(props) {
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
                // <div className="item"> {props.text} </div>
            }

            {/* Delete button */}
            <div className="buttonGroup" onClick={(e) => e.stopPropagation()}>
                <button
                    className="deleteButton"
                    onClick={() => {
                        if (props.editID !== false) return
                        if (props.deleteConfirm) return;
                        props.onDelete(props.id)
                    }}
                > X
                </button>
            </div>
        </div>
    );
}

export default Item