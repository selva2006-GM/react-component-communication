export default function Child2(props){
    const color = props.col ; 
    
    return(
        <div id= "child2">
        <h2>Second Child Component</h2>
        {color ? <div className = "greenbox" ></div>
        :
        <div className = "redbox" ></div>}
        <input
            id="enter"
            type="text"
            onChange={(e) => props.setValue(e.target.value)}
        />
        </div>
    )
}