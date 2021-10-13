import ItemList from "./ItemList";
import {useState} from "react";

function IncompleteSection(props) {
    const [newText, setNewText] = useState("")

    function handleRenameText(e){
        setNewText(e.target.value)
    }

    return (
        <div>
            <div className="headerButton">
                <h1>To-Do</h1>
                {props.editID !== false &&
                    <button
                        className="addButton"
                        onClick={()=>props.onConfirm(props.editID, "text", newText)}
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
                          onRename={handleRenameText}
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