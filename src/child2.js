export default function Child2(props){
    const color = props.col ; 
    
    return(
        <div id= "child2">
        <h2>Second Child Component</h2>
        {color ? <div class = "greenbox" ></div>
        :
        <div class = "redbox" ></div>}
        <input id = "enter" type = "text" onChange={()=>{
            props.setValue(document.getElementById("enter").value);
        }} />
        </div>
    )
}