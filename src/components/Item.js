import './Item.css'
import {useState} from "react";

function Item(props) {
    const [selectedID, setSelectedID] = useState(props.priority)
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
                       if (props.editID) return
                       if (props.deleteConfirm) return;
                       props.onChange(props.id, "isCompleted", !props.isCompleted);
                    }
                   }
            />

            {props.editID !== props.id && props.priority !== 0 && <div className={"priorityStatus"}>
                {props.priority === 1 ? "!" : props.priority === 2 ? "!!" : "!!!"}
            </div>}

            {/*Todo text*/}
            {props.editID === props.id ?
                <input type="text"
                       className="rename"
                       onChange={(e)=> props.onRename(e.target.value)}
                />
                :
                (props.isCompleted) ?
                    <div className={"task"}>{props.text}</div>
                :
                <input type="text"
                       className="task"
                       value={props.text}
                       onChange={(e)=>props.onRename(e.target.value)}
                />
            }

            {props.editID === props.id &&
                <div className={"priorityGroup"}>
                    <div className={selectedID === 1 ? "prioritySelected" : "priorityDisplay" }
                         onClick={()=> {
                             selectedID === 1 ? setSelectedID(0) : setSelectedID(1)
                             props.priority === 1 ? props.onPriority(0) : props.onPriority(1)
                         }}
                    >
                        !
                    </div>

                    <div className={selectedID === 2 ? "prioritySelected" : "priorityDisplay"}
                         onClick={()=> {
                             selectedID === 2 ? setSelectedID(0) : setSelectedID(2)
                             props.priority === 2 ? props.onPriority(0) : props.onPriority(2)
                         }}
                    >
                        !!
                    </div>

                    <div className={selectedID === 3 ? "prioritySelected" : "priorityDisplay"}
                         onClick={()=> {
                             selectedID === 3 ? setSelectedID(0) : setSelectedID(3)
                             props.priority === 3 ? props.onPriority(0) : props.onPriority(3)
                         }}
                    >
                        !!!
                    </div>
                </div>
            }

            {/* Delete button */}
            { !props.editID &&
            <div className="buttonGroup" onClick={(e) => e.stopPropagation()}>
                <button
                    className="deleteButton"
                    role="button"
                    aria-label="delete to do item"
                    onClick={() => {
                        if (props.editID) return
                        if (props.deleteConfirm) return
                        props.onDelete(props.id)
                    }}
                >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVQ4jc2TYQqAIAxGPZ0HCDpJZoLdy+O9/ihITJ0F0f65fbx9bsyY3wVgAafUOsC2CgBhAAhZJzcEtiw4Ow4A4siqCFIDWqBpQAUqf0+aWfVABZCeAo5XTqqZxNtb3NoQIOT7oBZADaoE+6BR2ZqXiuvE7Xhg0Wi/jQtDPPm8/HEN3gAAAABJRU5ErkJggg=="/>
                </button>
                </div> }
        </div>
    );
}

export default Item