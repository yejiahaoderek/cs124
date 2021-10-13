import './App.css';
import './style.css';
import TaskManager from "./components/TaskManager";


function App(props) {
  return (
     <TaskManager tasks={props.data}
                  showCompletedItems={props.showCompletedItems}
                  onAddTask={props.handleAddTask}
                  onTaskFieldChanged={props.handleTaskFieldChanged}
                  onDeleteAll={props.handleDeleteAll}
                  handleItemDeleted={props.handleItemDeleted}
                  onToggleCompletedItems={props.handleToggleCompletedItems}
     />
  );
}

export default App;
