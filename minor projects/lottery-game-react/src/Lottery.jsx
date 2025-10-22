import { useState } from "react"
import './Lottery.css'
import  { genTicket,sum } from './helper'
import Ticket from "./Ticket"

export default function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket)===winningSum; 

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

            {
               (isWinning && <h2>Congrats! You Won!!</h2>)
            }
            
        </>
    )
}