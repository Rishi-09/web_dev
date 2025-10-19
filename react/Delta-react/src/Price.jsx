import "./Price.css"
export default function Price({oldPrice,newPrice}){
    return (
        <div className="price" >
            <span><s>{oldPrice}</s></span>
            <span>{newPrice}</span>
        </div>
    )
}