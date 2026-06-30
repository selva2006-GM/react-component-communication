export default function Child1(props){
    return (
        <div id= "child1">
        <h2>First Child Component</h2>
        <button onClick={()=>{
            props.changecolor(prev => !prev);
        }}> Change Child 2</button>
        <h2>Value from Child Two: {props.val}</h2>
        </div>
    )
}