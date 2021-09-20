import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <div>
        <h1>To-Dos</h1>
        <ul>
            <li>Uncompleted Task 1</li>
            <li>Uncompleted Task 2</li>
        </ul>

        <button>Hide Completed</button>
        <h1>Completed Tasks</h1>
        <button>Delete All</button>
        <ul>
            <li>Completed Task 1</li>
            <li>Completed Task 2</li>
        </ul>

        <form>
            <label>
                Enter your new task here
                <input type="text" name="task" />
            </label>
            <button>
                Confirm
            </button>
        </form>
    </div>,
  document.getElementById('root')
);
