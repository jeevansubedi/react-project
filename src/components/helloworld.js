import {useState} from "react";

function Helloworld(props){
const [counter,setCounter]=useState(0);
// setCounter("hello jeevan")
// let counter=0;
function increment(){

    // counter++;
    setCounter(counter+1)
}
function decrement(){
    setCounter(counter-1)

}
function reset(){
    setCounter(0 )
}
return(<>
    <h1> counter :{counter}</h1>
    
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>

    </>
);

}
export default Helloworld