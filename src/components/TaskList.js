import {useState} from "react";
import List from "./List";
import './TaskList.css'
import Alert from "./Alert";

function TaskList(props) {
    const [enteredText, setEnteredText] = useState('');
    const [selectMode, setSelectMode] = useState(false)
    const [selectedID, setSelectedID] = useState([])
    const [showAlert, setShowAlert] = useState(false)
    const [tabIdx, setTabIdx] = useState("")

    const handleSelect = (id) => {
        if (selectedID.includes(id)) {
            const newSelectedID = selectedID.filter(item => item !== id)
            setSelectedID(newSelectedID)
        }
        else
            setSelectedID([...selectedID, id])
    }

    const handleExitSelectMode = () => {
        setSelectedID([])
        setSelectMode(false)
        setShowAlert(false)
        setTabIdx("")
    }

    const onShowAlert = () => {
        setShowAlert(true)
        setTabIdx(-1)
    }

    function handleAlertOK() {
        selectedID.map((docID) => {
            const docRef = props.db.collection(props.collectionName).doc(docID)
            docRef.delete(docID)
        })
    }

    function toggleModal() {
        handleExitSelectMode()
    }


    return <div id="listOutlier">
        {showAlert && <Alert role="alert" onClose={toggleModal} onOK={handleAlertOK}>
            <div className={"message"} aria-label="You're about to delete the selected lists">
                You're about to delete the selected lists
            </div>
        </Alert>}

        <div className="headerButton"
             role="heading"
             aria-level="1"
             aria-label="Your Lists">
            <h1>Your Lists</h1>

            { props.lists.length !== 0 &&
                (!selectMode ?
                    <div className={"buttonGroup"}>
                        <button className={"select"}
                                aria-label="enter list selection mode"
                                onClick={()=>setSelectMode(true)} >
                            Select</button>
                    </div>
                    :
                    <div className={"buttonGroup"}>
                        <button className={"warningConfirm"}
                                onClick={onShowAlert}
                                tabIndex={tabIdx}
                        >
                            Delete selected
                        </button>
                        <button className={"cancel"}
                                tabIndex={tabIdx}
                                onClick={handleExitSelectMode}>
                            Cancel</button>
                    </div>)
            }

        </div>

        <div className={"taskItems"}>
            {props.isLoading ?
                <div className="completeItem">
                    <div className="task">
                        Loading...
                    </div>
                </div>
                :
                (props.lists.length === 0 ?
                <div className="completeItem">
                    <div className="task">
                        Create your 1st Task List using the input box below : )
                    </div>
                </div>
                :
                props.lists.map(list =>
                <List
                    id={list.id}
                    key={list.id}
                    text={list.text}
                    selectMode={selectMode}
                    selectedID={selectedID}
                    onCurrList={props.onCurrList}
                    onListChange={props.onListChange}
                    onSelect={handleSelect}
                    onExit={handleExitSelectMode}
                    tabIdx={tabIdx}
                />)
            )}
        </div>

        {!selectMode &&
        <div className="addList">
            <input
                type="text"
                className={"taskInputBox"}
                name="task"
                value={enteredText}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        props.onAddList(enteredText)
                        setEnteredText("")
                    }
                }}
                onChange={(e) => setEnteredText(e.target.value)}
                placeholder={`Enter your new list here`}
            />
            <button type="button"
                    className={selectMode ? "disabledAddButton" : "addButton"}
                    aria-label="add this new list"
                    onClick={()=> {
                        props.onAddList(enteredText)
                        setEnteredText("")
                    }}>+
            </button>
        </div>}

    </div>
}

export default TaskList