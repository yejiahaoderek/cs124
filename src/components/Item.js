function Item(props) {
    return (
    <div className="listItem">
        <input type="checkbox" name="buyBook"
               checked={props.isCompleted}
               onChange={()=>props.onChange(props.id, "isCompleted", !props.isCompleted)}
        />
        <div className="item"> {props.text} </div>
        <div className="buttonGroup">
            <button
                className="deleteButton"
                onClick={()=>props.onDelete(props.id)}
            > X</button>
        </div>
    </div>
    );
}

export default Item