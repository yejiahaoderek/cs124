import React from 'react';
import ReactDOM from 'react-dom';
import InMemoryApp from "./InMemoryApp";

const initialData=[
    {
        id: 0,
        text: "Tap to rename",
        isCompleted: false,
    }
]

ReactDOM.render(
    <InMemoryApp initialData={initialData}/>,
    document.getElementById('root')
);
