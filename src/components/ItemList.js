import Item from "./Item";

function ItemList(props) {
    return (
        props.tasks.map(task =>
            <Item
                id = {task.id}
                key = {task.id}
                text = {task.text}
                onRename={props.onRename}
                newText = {task.newText}
                isCompleted = {task.isCompleted}
                editID = {props.editID}
                deleteConfirm = {props.deleteConfirm}
                onClick={props.onClick}
                onDelete = {props.onDelete}
                onChange = {props.onChange}
            />)
    );
}

export default ItemList