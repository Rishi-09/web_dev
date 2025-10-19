import { useState } from "react";

export default function LikeButtton(){
    let [isLike,setisLike] = useState(false);
    let like = () =>{
        setisLike(!isLike);
    }
    return (
        <div>
            {
                isLike?
                ( <p onClick={like} ><i className="fa-solid fa-heart" style={{color:"rgb(218,15,12)"}} ></i></p>):
                ( <p onClick={like} ><i className="fa-regular fa-heart "  ></i></p>)
            }
        </div>
        
    )
} 