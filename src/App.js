import logo from './logo.svg';
import './App.css';
import './style.css';
import TaskManager from "./components/TaskManager";
import {useState, useEffect} from 'react'
import InMemoryApp from "./InMemoryApp";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";


function App(props) {
  return (
     <TaskManager tasks={props.data}
                  onAddTask={props.handleAddTask}
                  onTaskFieldChanged={props.handleTaskFieldChanged}
                  handleItemDeleted={props.handleItemDeleted}
                  onAddChange={props.onAddChange}
     />
  );
}

export default App;
