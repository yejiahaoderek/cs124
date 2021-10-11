function Item(props) {
    return (
    <div className="listItem" onClick={()=>props.onClick(props.id)}>
        <input type="checkbox" name="buyBook"
               checked={props.isCompleted}
               onChange={()=>props.onChange(props.id, "isCompleted", !props.isCompleted)}
        />
        {   props.editID === props.id ?
            <input type="text" className="rename" placeholder={props.text}/>
            :
            <div className="item"> {props.text} </div>
        }
        <div className="buttonGroup">
            <button
                className="deleteButton"
                onClick={()=>props.onDelete(props.id)}
            > X
            </button>
        </div>
    </div>
    );
}

export default Item