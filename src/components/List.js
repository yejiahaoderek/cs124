import './List.css';
import './Item.css';
import {useState} from "react";
import Item from "./Item";

function List(props) {
    const [email, setEmail] = useState("")
    const [shareMode, setShareMode] = useState(false)
    let isSharing = props.isSharedWith.length > 0 && props.owner === props.user.uid
    let isShared = props.isSharedWith.includes(props.user.email)

    function clearInput() {
        setEmail("")
    }

    function isValidEmail(email) {
        if (email === props.user.email)
            alert("Oops, you can't share a list with yourself!")
        else if (email == "" || !String(email).toLowerCase().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))
            alert("Please enter a valid email address")
        else if (props.isSharedWith.includes(email))
            alert("The email you entered is already on the share list")
        else return true
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

        <button class="share" onClick={()=>setShareMode(true)}>
            {isShared && <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjAiIGhlaWdodD0iMjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzM0OThkYiI+PHBhdGggZD0iTTg2LDIxLjVjLTExLjUyNjg1LDAgLTIwLjg3MDExLDkuMjM4MjggLTIxLjMzMjAzLDIwLjY2MDE2Yy0xOS4zNzk0LDguMjMwNDcgLTMyLjQxNzk3LDI3LjM5OTkgLTMyLjQxNzk3LDQ5LjIxNDg0YzAsMC45MjM4MyAtMC4wNDE5OSwxLjkzMTY0IDAsMy4wMjM0NGMtNi4zNjE4MiwzLjczNzMxIC0xMC43NSwxMC42MDMwMyAtMTAuNzUsMTguNDc2NTZjMCwxMS44MjA4IDkuNjc5MiwyMS41IDIxLjUsMjEuNWMzLjA4NjQzLDAgNi4wNjc4NywtMC42NTA4OCA4LjczNDM4LC0xLjg0NzY2YzkuMzIyMjcsNy44MzE1NCAyMS40NTgwMSwxMi41OTc2NiAzNC4yNjU2MywxMi41OTc2NmMxMi44MDc2MiwwIDI0Ljk0MzM2LC00Ljc2NjExIDM0LjI2NTYzLC0xMi41OTc2NmMyLjY2NjUxLDEuMTk2NzggNS42NDc5NSwxLjg0NzY2IDguNzM0MzgsMS44NDc2NmMxMS44MjA4LDAgMjEuNSwtOS42NzkyIDIxLjUsLTIxLjVjMCwtNy45NTc1MiAtNC40MzAxOCwtMTQuOTI4MjIgLTEwLjkxNzk3LC0xOC42NDQ1M2MwLjA4Mzk4LC0wLjg2MDg0IDAuMTY3OTcsLTEuNzQyNjggMC4xNjc5NywtMi44NTU0N2MwLC0yMS44MTQ5NCAtMTMuMDM4NTcsLTQwLjk4NDM3IC0zMi40MTc5NywtNDkuMjE0ODRjLTAuNDYxOTEsLTExLjQyMTg3IC05LjgwNTE4LC0yMC42NjAxNiAtMjEuMzMyMDMsLTIwLjY2MDE2ek04NiwzMi4yNWM2LjAwNDg5LDAgMTAuNzUsNC43NDUxMiAxMC43NSwxMC43NWMwLDYuMDA0ODkgLTQuNzQ1MTEsMTAuNzUgLTEwLjc1LDEwLjc1Yy02LjAwNDg4LDAgLTEwLjc1LC00Ljc0NTExIC0xMC43NSwtMTAuNzVjMCwtNi4wMDQ4OCA0Ljc0NTEyLC0xMC43NSAxMC43NSwtMTAuNzV6TTY3LjAxOTUzLDUyLjkxMDE2YzMuNjExMzMsNi44NDQ3MyAxMC43NSwxMS41ODk4NCAxOC45ODA0NywxMS41ODk4NGM4LjIzMDQ3LDAgMTUuMzY5MTQsLTQuNzQ1MTEgMTguOTgwNDcsLTExLjU4OTg0YzE0LjQwMzMyLDYuOTkxNyAyNC4wMTk1MywyMS42ODg5NiAyNC4wMTk1MywzOC40NjQ4NGMtMTEuODIwOCwwIC0yMS41LDkuNjc5MiAtMjEuNSwyMS41YzAsNC44MDgxIDEuNjU4NjksOS4xNzUyOSA0LjM2NzE5LDEyLjc2NTYzYy03LjE4MDY2LDUuNDM3OTkgLTE2LjQxODk0LDguNzM0MzggLTI1Ljg2NzE5LDguNzM0MzhjLTkuNDQ4MjQsMCAtMTguNjg2NTIsLTMuMjk2MzkgLTI1Ljg2NzE5LC04LjczNDM3YzIuNzA4NDksLTMuNTkwMzMgNC4zNjcxOSwtNy45NTc1MiA0LjM2NzE5LC0xMi43NjU2MmMwLC0xMS44MjA4IC05LjY3OTIsLTIxLjUgLTIxLjUsLTIxLjVjMCwtMTYuNzc1ODggOS42MTYyMSwtMzEuNDczMTUgMjQuMDE5NTMsLTM4LjQ2NDg0ek00MywxMDIuMTI1YzYuMDA0ODksMCAxMC43NSw0Ljc0NTEyIDEwLjc1LDEwLjc1YzAsNi4wMDQ4OSAtNC43NDUxMSwxMC43NSAtMTAuNzUsMTAuNzVjLTYuMDA0ODgsMCAtMTAuNzUsLTQuNzQ1MTEgLTEwLjc1LC0xMC43NWMwLC02LjAwNDg4IDQuNzQ1MTIsLTEwLjc1IDEwLjc1LC0xMC43NXpNMTI5LDEwMi4xMjVjNi4wMDQ4OSwwIDEwLjc1LDQuNzQ1MTIgMTAuNzUsMTAuNzVjMCw2LjAwNDg5IC00Ljc0NTExLDEwLjc1IC0xMC43NSwxMC43NWMtNi4wMDQ4OCwwIC0xMC43NSwtNC43NDUxMSAtMTAuNzUsLTEwLjc1YzAsLTYuMDA0ODggNC43NDUxMiwtMTAuNzUgMTAuNzUsLTEwLjc1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>}
            {isSharing && <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjAiIGhlaWdodD0iMjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzFhYmM5YyI+PHBhdGggZD0iTTEzMS44NjY2NywxNy4yYy0xMi42NjU3MywwIC0yMi45MzMzMywxMC4yNjc2IC0yMi45MzMzMywyMi45MzMzM2MwLjAxMDIyLDEuNjEyMDIgMC4xOTAzOCwzLjIxODQ3IDAuNTM3NSw0Ljc5MjcxbC01Mi4wNzAzMSwyNi4wMzUxNmMtNC4zNDUwMiwtNS4wMDIzOCAtMTAuNjQxMjcsLTcuODgxMDEgLTE3LjI2NzE5LC03Ljg5NDUzYy0xMi42NjU3MywwIC0yMi45MzMzMywxMC4yNjc2IC0yMi45MzMzMywyMi45MzMzM2MwLDEyLjY2NTczIDEwLjI2NzYsMjIuOTMzMzMgMjIuOTMzMzMsMjIuOTMzMzNjNi42MjgwNSwtMC4wMDc0NiAxMi45Mjg3MywtMi44ODIxNyAxNy4yNzgzOSwtNy44ODMzM2w1Mi4wMzY3MiwyNi4wMjM5NmMtMC4zMzk1OSwxLjU3NTA0IC0wLjUxMjI0LDMuMTgxNDggLTAuNTE1MTEsNC43OTI3MWMwLDEyLjY2NTczIDEwLjI2NzYsMjIuOTMzMzMgMjIuOTMzMzMsMjIuOTMzMzNjMTIuNjY1NzMsMCAyMi45MzMzMywtMTAuMjY3NiAyMi45MzMzMywtMjIuOTMzMzNjMCwtMTIuNjY1NzMgLTEwLjI2NzYsLTIyLjkzMzMzIC0yMi45MzMzMywtMjIuOTMzMzNjLTYuNjI4MDUsMC4wMDc0NiAtMTIuOTI4NzMsMi44ODIxNyAtMTcuMjc4MzksNy44ODMzM2wtNTIuMDM2NzIsLTI2LjAyMzk2YzAuMzM5NTksLTEuNTc1MDQgMC41MTIyNCwtMy4xODE0OCAwLjUxNTExLC00Ljc5MjcxYy0wLjAxMTAxLC0xLjYwODI3IC0wLjE5MTE3LC0zLjIxMDkzIC0wLjUzNzUsLTQuNzgxNTFsNTIuMDcwMzEsLTI2LjAzNTE2YzQuMzQ3MDksNC45OTgyMiAxMC42NDMwNSw3Ljg3MjY0IDE3LjI2NzE5LDcuODgzMzNjMTIuNjY1NzMsMCAyMi45MzMzMywtMTAuMjY3NiAyMi45MzMzMywtMjIuOTMzMzNjMCwtMTIuNjY1NzMgLTEwLjI2NzYsLTIyLjkzMzMzIC0yMi45MzMzMywtMjIuOTMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>}
            {!isShared && !isSharing && <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjAiIGhlaWdodD0iMjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzM0NDk1ZSI+PHBhdGggZD0iTTEzMS44NjY2NywxNy4yYy0xMi42NjU3MywwIC0yMi45MzMzMywxMC4yNjc2IC0yMi45MzMzMywyMi45MzMzM2MwLjAxMDIyLDEuNjEyMDIgMC4xOTAzOCwzLjIxODQ3IDAuNTM3NSw0Ljc5MjcxbC01Mi4wNzAzMSwyNi4wMzUxNmMtNC4zNDUwMiwtNS4wMDIzOCAtMTAuNjQxMjcsLTcuODgxMDEgLTE3LjI2NzE5LC03Ljg5NDUzYy0xMi42NjU3MywwIC0yMi45MzMzMywxMC4yNjc2IC0yMi45MzMzMywyMi45MzMzM2MwLDEyLjY2NTczIDEwLjI2NzYsMjIuOTMzMzMgMjIuOTMzMzMsMjIuOTMzMzNjNi42MjgwNSwtMC4wMDc0NiAxMi45Mjg3MywtMi44ODIxNyAxNy4yNzgzOSwtNy44ODMzM2w1Mi4wMzY3MiwyNi4wMjM5NmMtMC4zMzk1OSwxLjU3NTA0IC0wLjUxMjI0LDMuMTgxNDggLTAuNTE1MTEsNC43OTI3MWMwLDEyLjY2NTczIDEwLjI2NzYsMjIuOTMzMzMgMjIuOTMzMzMsMjIuOTMzMzNjMTIuNjY1NzMsMCAyMi45MzMzMywtMTAuMjY3NiAyMi45MzMzMywtMjIuOTMzMzNjMCwtMTIuNjY1NzMgLTEwLjI2NzYsLTIyLjkzMzMzIC0yMi45MzMzMywtMjIuOTMzMzNjLTYuNjI4MDUsMC4wMDc0NiAtMTIuOTI4NzMsMi44ODIxNyAtMTcuMjc4MzksNy44ODMzM2wtNTIuMDM2NzIsLTI2LjAyMzk2YzAuMzM5NTksLTEuNTc1MDQgMC41MTIyNCwtMy4xODE0OCAwLjUxNTExLC00Ljc5MjcxYy0wLjAxMTAxLC0xLjYwODI3IC0wLjE5MTE3LC0zLjIxMDkzIC0wLjUzNzUsLTQuNzgxNTFsNTIuMDcwMzEsLTI2LjAzNTE2YzQuMzQ3MDksNC45OTgyMiAxMC42NDMwNSw3Ljg3MjY0IDE3LjI2NzE5LDcuODgzMzNjMTIuNjY1NzMsMCAyMi45MzMzMywtMTAuMjY3NiAyMi45MzMzMywtMjIuOTMzMzNjMCwtMTIuNjY1NzMgLTEwLjI2NzYsLTIyLjkzMzMzIC0yMi45MzMzMywtMjIuOTMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>}
        </button>

        {/*SHARE WINDOW*/}
        {shareMode &&
            <div className={"shareBackdrop"}>
                <div className="shareModal">
                    <div className="taskItems">
                        <h3>Sharing with</h3>
                        {props.isSharedWith.length === 0 &&
                            <div className="completeItem">Add email address below to share</div>}
                        {props.isSharedWith.map(content =>
                            <div className="listItem">
                                <div className="emailAddress">{content}</div>
                                <div className="buttonGroup">
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
                            </div>
                        )}
                    </div>
                    <div className="shareButtonGroup">
                        <input type="text"
                               className="emailInput"
                               placeholder="Enter email address here"
                               value={email}
                               onChange={(e)=>setEmail(e.target.value)}/>
                        <div></div>
                        <button
                            className="shareButton"
                            onClick={()=>{
                                if (isValidEmail(email)) {
                                    const docRef = props.db.collection(props.collectionName).doc(props.id)
                                    docRef.update({
                                        "isSharedWith": [...props.isSharedWith, email]
                                    })
                                }
                                clearInput()
                            }}>Share</button>
                    </div>
                    <div id="closeShare">
                        <button className={"closeConfirm"} onClick={()=>setShareMode(false)} type={"button"}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        }


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