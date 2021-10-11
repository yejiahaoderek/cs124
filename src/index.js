import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InMemoryApp from "./InMemoryApp";

const initialData=[
    {
        id: 0,
        text: "Buy new John Grisham book",
        isCompleted: false,
        isSelected: false,
    },
    {
        id: 1,
        text: "Eat Lunch",
        isCompleted: false,
        isSelected: false,
    },
    {
        id: 2,
        text: "Call Mom",
        isCompleted: true,
        isSelected: false,
    },
]

ReactDOM.render(
    <InMemoryApp initialData={initialData}/>,
    document.getElementById('root')
);
