let gameSeq = [];
let userSeq = [];
let colors = ['pink','blue','yellow','green'];

let start = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function (){
    if(start == false){
        h3.innerText="Game started, Please set any color";
        start=true;
    }
    levelUp();
});

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let ranClr = colors[randIdx];
    let randBtn = document.querySelector(`.${ranClr}`);

    gameSeq.push(ranClr);
    flashBtn(randBtn);
}

function btnPress(){
    let btn = this;
    flashBtn(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h3.innerHTML = `Game over, Your score is <b>${level}</b> <br> restart the game by pressing any Key`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}