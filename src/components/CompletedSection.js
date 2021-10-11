import ItemList from "./ItemList";

function CompletedSection(props) {
    return <div>
        <div className="headerButton">
            <h1>Completed </h1>
            <button className="warning">Delete All</button>
        </div>


        <div className="completedTaskItems">
            <ItemList
                className="completeItem"
                tasks={props.tasks.filter((item)=> item.isCompleted === true)}
                onDelete={props.onDelete}
            />
        </div>
    </div>;
}

export default CompletedSection