import IncompleteSection from "./IncompleteSection";
import CompletedSection from "./CompletedSection";
import AddItem from "./AddItem";


function TaskManager(props) {
    return <div>
        <head>
            <title>Task Tracker</title>
        </head>
        <div id="outlier">
            <IncompleteSection
                tasks={props.tasks}
                onDelete={props.handleItemDeleted}
            />

            <button id="hideButton">Hide Completed</button>

            <CompletedSection
                tasks={props.tasks}
                onDelete={props.handleItemDeleted}
            />

            <form className="addList">
                <input
                    type="text"
                    className="taskInputBox"
                    name="task"
                    placeholder="Enter new task here"
                    field="text"
                />
                <button type="submit"
                        className="addButton"
                        onClick={props.onAddTask}
                >
                    +
                </button>
            </form>

        </div>
    </div>
}

export default TaskManager