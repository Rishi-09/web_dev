import { useState } from "react"
import './Lottery.css'
import  {genTicket} from './helper'
export default function Lottery(){

    let [ticket,setTicket] = useState(genTicket(3));
    return (
        <>
            <h1>Lottery</h1>
            <div className="ticket" >
                <span className="ticket-value" >{ticket[0]}</span>&nbsp;&nbsp;
                <span className="ticket-value" >{ticket[1]}</span>&nbsp;&nbsp;
                <span className="ticket-value" >{ticket[2]}</span>&nbsp;&nbsp;
            </div>
        </>
    )
}