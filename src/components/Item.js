function Item(props) {
    return (
    <div className="listItem">
        <input type="checkbox" name="buyBook" checked={props.isCompleted}/>
        <div className="item"> {props.text}</div>
        <div className="buttonGroup">
            <button className="deleteButton"> X</button>
        </div>
    </div>
    );
}

export default Item