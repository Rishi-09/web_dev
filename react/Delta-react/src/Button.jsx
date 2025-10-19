export default function Button(){

    function changeBg(){
        document.body.style.backgroundColor="#1d2d44";
    }
    function undoBg(){
        document.body.style.backgroundColor="#222";
    }

    return (
        <div>
            <button onMouseOver={changeBg} onMouseLeave={undoBg} >Click</button>
        </div>
    )    
}