const btn = document.body.querySelector(".btn");
const input = document.body.querySelector("input");
const list = document.body.querySelector(".list");
const body = document.querySelector("body");
body.style.backgroundColor="black";
body.style.color="white";
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete")
    li.style.margin="10px"; 
    li.innerText=`${input.value}`;
    list.append(li);
    li.append(delBtn);
    input.value="";
});

list.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){
      event.target.parentElement.remove();
    }
})
