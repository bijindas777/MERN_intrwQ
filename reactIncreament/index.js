import "./styles.css";
import React,{useState} from 'react';


export default function App() {

  const[numbers,setNumbers] = useState(0);

  const increment=()=>{
setNumbers(numbers + 1)
  }
  const deincrement=()=>{
    setNumbers(numbers - 1)
      }
    

  return (
    <div className="App">
      <h1>{numbers}</h1>
      <h2>Start editing to see some magic happen!</h2>
    <button onClick={increment} class="btn btn-warning">Increase</button>
    <button onClick={deincrement} class="btn btn-warning">Decrease</button>

    </div>
  );
}
