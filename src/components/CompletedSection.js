import ItemList from "./ItemList";

function CompletedSection(props) {
    return <div>
        {props.showCompletedItems &&
        <div>
            <div className="headerButton">
                <h1>Completed </h1>
                <button className="warning">Delete All</button>
            </div>

            <div className="completedTaskItems">
                {props.tasks.filter((item) => item.isCompleted === true).length !== 0 ?
                    <ItemList
                        className="completeItem"
                        tasks={props.tasks.filter((item) => item.isCompleted === true)}
                        onDelete={props.onDelete}
                        onChange={props.onChange}
                        onClick={props.onClick}
                    />
                    :
                    <div className="completeItem">
                        <div className="item">
                            You don't have any completed tasks
                        </div>
                    </div>
                }


            </div>
        </div>
        }
    </div>;
}

export default CompletedSection