import './List.css';
import './Item.css';
import {useState} from "react";
import Item from "./Item";

function List(props) {
    const [email, setEmail] = useState("")
    const [shareMode, setShareMode] = useState(false)

    function clearInput() {
        setEmail("")
    }

    return <div className={"buttonGroup"}>
        <div className={props.selectedID.includes(props.id) ? "selectedListItem" : "listItem"}
             aria-label="press control + shift + space to select if in select mode; or type to rename"
             tabIndex={props.tabIdx}
             onClick={()=> {
                 if (!props.selectMode) return
                 props.onSelect(props.id)
             }}
        >
        {props.selectMode && (props.selectedID.includes(props.id) ?
            <input type={"checkbox"} tabIndex={props.tabIdx} role="checkbox" aria-checked="true" checked aria-label={props.text}></input>
            :
            <input type={"checkbox"} tabIndex={props.tabIdx} role="checkbox" aria-checked="false" aria-label={props.text}></input>)}


        <button onClick={()=>setShareMode(true)}>Share ICON</button>
            {shareMode &&
            <div className={"backdrop"}>
                <div className="modal">
                    <div className="buttonGroup">
                        <input type="text"
                               placeholder="Enter email here"
                               onChange={(e)=>setEmail(e.target.value)}/>
                        <button
                            className="confirmButton"
                            onClick={()=>{
                            const docRef = props.db.collection(props.collectionName).doc(props.id)
                            docRef.update({
                                "isSharedWith": [...props.isSharedWith, email]
                            })
                            clearInput()
                        }}>Share</button>
                    </div>
                    <div>
                        <div className="taskItems">
                            {props.isSharedWith.map(content =>
                                <div>
                                <li>{content}</li>
                                <button
                                    className="deleteButton"
                                    role="button"
                                    aria-label="delete to do item"
                                    onClick={() => {
                                        const docRef = props.db.collection(props.collectionName).doc(props.id)
                                        let newShareList = props.isSharedWith.filter((email) => email !== content)
                                        docRef.update({"isSharedWith": newShareList})
                                    }}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVQ4jc2TYQqAIAxGPZ0HCDpJZoLdy+O9/ihITJ0F0f65fbx9bsyY3wVgAafUOsC2CgBhAAhZJzcEtiw4Ow4A4siqCFIDWqBpQAUqf0+aWfVABZCeAo5XTqqZxNtb3NoQIOT7oBZADaoE+6BR2ZqXiuvE7Xhg0Wi/jQtDPPm8/HEN3gAAAABJRU5ErkJggg=="/>
                                </button>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="alertButtonGroup">
                        <button className={"warningConfirm"} onClick={()=>setShareMode(false)} type={"button"}>
                            Close
                        </button>
                    </div>
                </div>
            </div>}


        <input type="text"
               className={"listInput"}
               tabIndex={props.tabIdx}
               value={props.text}
               onChange={(e)=>{
                   if (props.selectMode) return
                   props.onListChange(props.id, "text", e.target.value)
               }}
        />

        <div className={"buttonGroup"}>
            <button className={!props.selectMode ? "goToButton" : "hiddenButton"}
                    tabIndex={props.tabIdx}
                    onClick={()=>props.onCurrList([props.id, props.text])}
                    aria-label="open this list"
            >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABMUlEQVRIie3WsUrDUBTG8e+cuvgAFUHdO7RTopMgWKmYgG8QzJRnsluwjyBNoFhE3CSZ2qF7C4J9AZee4+IgzdLcmwaV/sfD5f7ucC9cYNd/j9YHzvWdD9Y+AUcVGQsAUZY+pD+HXDgJ632FKAAcA+ivDwvw98KqO9kEriUDmM6Z9JSAj1phYXy+JYNMWbs2eGmYRVPHCzvZcDCVFV8AeK8FBtAklbHjhZ18FM90xZcmuOnlssZtbrUVbvucmqzy5PpBOx/FMya9rQs2zhZeCvFVNhxMnV7YEqXHOuClEnfzJJ44vbBFDXkGcLht2Ao1ha1RI1iYbvIknrh+0OaGvJigRjCtdP/MC1wSGitwYIICwF5pmPAqWvi4lO5XvePFFpz5JnBUMT4n4qjC/Xb9kb4A6Qd5UOavDm0AAAAASUVORK5CYII=" alt="right arrow: go to this list"/>
            </button>
        </div>
    </div>
    </div>

}

export default List