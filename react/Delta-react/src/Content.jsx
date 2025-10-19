export default function Content({title,headLine1,headLine2}){
    return (
        <div className="content">
            <h2>{title}</h2>
            <p>{headLine1}</p>
            <p>{headLine2}</p>
        </div>
    )
}