import IncompleteSection from "./IncompleteSection";
import CompletedSection from "./CompletedSection";
import {useState} from "react";
import AddItem from "./AddItem";


function TaskManager(props) {
    return <div>
        <title>Task Tracker</title>
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