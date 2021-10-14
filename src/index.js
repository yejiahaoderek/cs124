import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InMemoryApp from "./InMemoryApp";

const initialData=[
    {
        id: 0,
        text: "This is an example of a to-do",
        isCompleted: false,
    },
    {
        id: 1,
        text: "Tap to rename and click Done to save",
        isCompleted: false,
    },
    {
        id: 2,
        text: "This is an example of a finished to-do",
        isCompleted: true,
    },
]

ReactDOM.render(
    <InMemoryApp initialData={initialData}/>,
    document.getElementById('root')
);
