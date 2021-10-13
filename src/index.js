import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InMemoryApp from "./InMemoryApp";

const initialData=[
    {
        id: 0,
        text: "Buy new John Grisham book",
        isCompleted: false,
    },
    {
        id: 1,
        text: "Eat Lunch",
        isCompleted: false,
    },
    {
        id: 2,
        text: "Call Mom",
        isCompleted: true,
    },
]

ReactDOM.render(
    <InMemoryApp initialData={initialData}/>,
    document.getElementById('root')
);
