function AddItem(props) {
    return <form className="addList">
        <input type="text" className="taskInputBox" name="task" placeholder="Enter new task here"/>
        <button type="button" className="addButton" onClick={props.onAddTask} >
            +
        </button>
    </form>;
}

export default AddItem