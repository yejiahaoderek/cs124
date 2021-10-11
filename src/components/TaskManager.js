import IncompleteSection from "./IncompleteSection";
import CompletedSection from "./CompletedSection";

function TaskManager(props) {
    return <div>
        <title>Task Tracker</title>
        <div id="outlier">
            <IncompleteSection
                tasks={props.tasks}
                onDelete={props.handleItemDeleted}
                onChange={props.onTaskFieldChanged}
            />

            <button id="hideButton"
                onClick={props.onToggleCompletedItems}>
                {props.showCompletedItems? `Hide` : `Show`} Completed
            </button>


            <CompletedSection
                tasks={props.tasks}
                showCompletedItems={props.showCompletedItems}
                onDelete={props.handleItemDeleted}
                onChange={props.onTaskFieldChanged}
            />


            <form className="addList" onSubmit={props.onAddTask}>
                <input
                    type="text"
                    className="taskInputBox"
                    name="task"
                    placeholder="Enter new task here"
                    onChange = {props.onAddChange}
                />
                <button type="submit"
                        className="addButton">
                    +
                </button>
            </form>

        </div>
    </div>
}

export default TaskManager