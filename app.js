let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highScore=0;
let btns=["blue","yellow","orange","pink"];
    let h2=document.querySelector('h2');
document.getElementById("startBtn").addEventListener("click", function(){
    if(!started){
        console.log("Game started");
        started=true;
        levelUp();
    }
});
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
   btn.classList.remove("flash");
    },250);

}
function userbtnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
   btn.classList.remove("userflash");
    },250);

}






function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
let rndIdx=Math.floor(Math.random()*4);
let rndColor=btns[rndIdx];
let rndBtn=document.querySelector(`.${rndColor}`);
gameSeq.push(rndColor);   
btnFlash(rndBtn);

}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your Score is <b>${level}</b>  HIGH SCORE ${highScore} <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";  
        },150);
        reset();
    }
}
function btnPress(){
    console.log("Button pressed");
    let btn=this;
    userbtnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    if (level > highScore) {
        highScore = level;
      
    }
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}
