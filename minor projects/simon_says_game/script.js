let h3 = document.querySelector("h3");
let boxes = document.querySelectorAll(".box");
let startBtn = document.querySelector(".startBtn");


let gameSeq = [];
let usrSeq = [];
let started = false;
let level = 0;


startBtn.addEventListener("click", function () {
  if (started == false) {
    console.log("started");
  }
  started = true;
  startBtn.disabled = true;

  levelUP();
});


function checkAns(idx){
     if(gameSeq[idx]===usrSeq[idx]){
        if(usrSeq.length==gameSeq.length){
            setTimeout(levelUP(),1000);
        }
    
   }
    else{
        h3.innerHTML = `Game Over! your score was <b>${level}</b> </br>Start again , GO Farrr.....`;
        reset();
    }
}

function flashBtn(btn) {
  btn.classList.add("flashBtn");
  setTimeout(function () {
    btn.classList.remove("flashBtn");
  }, 500);
} 

function btnPress(){
    usrSeq.push(this.getAttribute("id"))
    console.log(usrSeq);
    checkAns(usrSeq.length-1);
}
 
function levelUP() {
  level++;
  h3.innerText = `level ${level}`;
  let randBox = boxes[`${Math.floor(Math.random()*4)}`];
  gameSeq.push(randBox.getAttribute("id"));
  console.log(gameSeq);
  flashBtn(randBox);
  usrSeq = [];
}

for(box of boxes){
    box.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    usrSeq = [];
    level = 0;
    startBtn.disabled=false;
}
