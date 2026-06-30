import { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import "./index.css";
function App(){
    let [value , setValue] = useState("");
    let [color, changeColor] = useState(true);
    return (
        <>
        <div id = "parent"> <h1> Parent Component</h1>
        <div id= "child">
            <Child1 val = {value} changecolor = {changeColor}/>
            <Child2 col = {color} setValue = {setValue}/>
        </div>
        </div>
        </>
    )
}


export default App;



