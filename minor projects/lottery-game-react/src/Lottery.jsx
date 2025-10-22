import { useState } from "react"
import './Lottery.css'
import  { genTicket,sum } from './helper'
import Ticket from "./Ticket"

export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket); 

    let updateTicket = () =>{
    setTicket((n)=>{
       return [...genTicket(3)];
    })
}


    return (
        <>
            <h1>Lottery</h1>
            <Ticket ticket={ticket} />
            <br />
            <button onClick={updateTicket} >Generate Ticket</button>
            <br />
            <h3>{(isWinning && "Congrats! You Won!")}</h3>
            
        </>
    )
}