import logo from './logo.svg';
import './App.css';
import './style.css';
import TaskManager from "./components/TaskManager";
import {useState} from 'react'
import InMemoryApp from "./InMemoryApp";

function App(props) {

  const [tasks, setTasks] = useState(props.data)

  function addHandler(props) {
    setTasks([...tasks, {
      id: 10,
      text: "fake data",
      isSelected: false,
      isCompleted: false,
    }])
  }

  function handleAddFieldChanged(props) {

  }

  return (
     <TaskManager tasks={tasks} onAddTask={addHandler} onAddFieldChanged={handleAddFieldChanged}/>
  );
}

export default App;
