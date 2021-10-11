import Item from "./Item";

function ItemList(props) {
    return (
        props.tasks.map(task =>
            <Item
                id = {task.id}
                key = {task.id}
                text = {task.text}
                isSelected = {task.isSelected}
                isCompleted = {task.isCompleted}
                onDelete = {props.onDelete}
            />)
    );
}

export default ItemList