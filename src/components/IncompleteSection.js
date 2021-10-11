import ItemList from "./ItemList";

function IncompleteSection(props) {
    return (
    <div>
        <h1>To-Do</h1>
        <div className="taskItems">
            <ItemList tasks={props.tasks.filter((item)=> item.isCompleted === false)}
                       onDelete={props.onDelete}
            />
        </div>
    </div>
    )
}

export default IncompleteSection