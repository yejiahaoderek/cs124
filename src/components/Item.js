import {useState} from "react";

function Item(props) {
    const [prevText, setPrevText] = useState(props.text)
    return (
        <div className={!props.isCompleted ?
            props.editID === props.id ? `selectedListItem` : `listItem`
            :
            `completeItem`}
             onClick={() => props.onClick(props.id)}>
            <input type="checkbox" name="buyBook"
                   checked={props.isCompleted}
                   onClick={(e) => e.stopPropagation()}
                   onChange={() => {
                       if (props.editID !== false) return
                       props.onChange(props.id, "isCompleted", !props.isCompleted);
                   }
                   }
            />
            {props.editID === props.id ?
                <input type="text"
                       className="rename"
                       placeholder={props.text}
                       value={prevText}
                       onChange={props.onRename}
                />
                :
                <div className="item"> {props.text} </div>
            }
            <div className="buttonGroup" onClick={(e) => e.stopPropagation()}>
                <button
                    className="deleteButton"
                    onClick={() => {
                        if (props.editID !== false) return
                        props.onDelete(props.id)
                    }}
                > X
                </button>
            </div>
        </div>
    );
}

export default Item