import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const initialData=[
    {
        id: 0,
        text: "Tap to rename",
        isCompleted: false,
    }
]

ReactDOM.render(
    <App initialData={initialData}/>,
    document.getElementById('root')
);
