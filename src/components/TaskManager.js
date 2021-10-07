import IncompleteSection from "./IncompleteSection";
import CompletedSection from "./CompletedSection";
import AddItem from "./AddItem";


function TaskManager(props) {
    return <div>
        <head>
            <title>Task Tracker</title>
        </head>
        <div id="outlier">
            <IncompleteSection tasks={props.tasks}/>

            <button id="hideButton">Hide Completed</button>

            <CompletedSection tasks={props.tasks}/>

            <form className="addList" onSubmit={props.onAddTask}>
                <input
                    type="text" className="taskInputBox" name="task" placeholder="Enter new task here"
                    // ref={(a) => this._inputElement = a}
                />
                <button type="submit" className="addButton">
                    +
                </button>
            </form>;

        </div>
    </div>
}

export default TaskManager