import Lottery from "./Lottery"
import './App.css'
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) =>{
    return (ticket.every((num)=>num===ticket[0]));
  }
  return (
    <>
    <Lottery  winCondition={winCondition}/>
    </>
  )
}

export default App
