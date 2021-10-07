import Item from "./Item";

function ItemList(props) {
    return (
        props.tasks.map(task =>
            <Item
                text = {task.text}
                isSelected = {task.isSelected}
                isCompleted = {task.isCompleted}
            />)
    );
}

export default ItemList