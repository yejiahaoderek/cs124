import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import InMemoryApp from "./InMemoryApp";


ReactDOM.render(
    <InMemoryApp initialData={[
        // {
        //     id: 0,
        //     text: "Buy new John Grisham book",
        //     isCompleted: false,
        //     isSelected: false,
        // },
        // {
        //     id: 1,
        //     text: "Eat Lunch",
        //     isCompleted: false,
        //     isSelected: false,
        // },
        // {
        //     id: 2,
        //     text: "Call Mom",
        //     isCompleted: true,
        //     isSelected: false,
        // },

    ]}/>,
    document.getElementById('root')
);
