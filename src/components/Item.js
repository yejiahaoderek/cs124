import './Item.css'
import {useState} from "react";

function Item(props) {
    const [selectedID, setSelectedID] = useState(props.priority)

    function handlePriority(target) {
        selectedID === target ? setSelectedID(0) : setSelectedID(target)
        props.priority === target ? props.onPriority(0) : props.onPriority(target)
    }

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
            <input
                   type={"checkbox"}
                   role="checkbox"
                   aria-checked={props.isCompleted}
                   checked={props.isCompleted}
                   aria-label={props.text}
                   onClick={(e) => e.stopPropagation()}
                   onChange={() => {
                       if (props.editID) return
                       if (props.deleteConfirm) return;
                       props.onChange(props.id, "isCompleted", !props.isCompleted);
                    }
                   }
            />

            {props.editID !== props.id && props.priority !== 0 &&
            <div className={"priorityStatus"} aria-label={props.priority}>
                {props.priority === 1 ? "!" : props.priority === 2 ? "!!" : "!!!"}
            </div>
            }


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
                         tabIndex="0"
                         onKeyPress={(e)=> {
                             if (e.key === 'Enter')  handlePriority(1)}}
                         onClick={()=> {handlePriority(1)}}
                    >
                        !
                    </div>

                    <div className={selectedID === 2 ? "prioritySelected" : "priorityDisplay"}
                         tabIndex="0"
                         onKeyPress={(e)=> {
                             if (e.key === 'Enter')  handlePriority(2)}}
                         onClick={()=> {handlePriority(2)}}
                    >
                        !!
                    </div>

                    <div className={selectedID === 3 ? "prioritySelected" : "priorityDisplay"}
                         tabIndex="0"
                         onKeyPress={(e)=> {
                             if (e.key === 'Enter')  handlePriority(3)}}
                         onClick={()=> {handlePriority(3)}}
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