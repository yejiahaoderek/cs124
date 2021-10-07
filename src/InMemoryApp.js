import App from "./App";
import React from "react";

function InMemoryApp(props) {
    return <App data={props.initialData}/>
}

export default InMemoryApp