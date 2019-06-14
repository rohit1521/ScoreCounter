var p1Btn = document.querySelector("#p1Btn");
var p2Btn = document.querySelector("#p2Btn");
var resetBtn = document.querySelector("#reset");
var p1Score = document.querySelector("#p1score");
var p2Score = document.querySelector("#p2score");
var finalValue = document.querySelector("#winningNumber");
var changeValue = document.querySelector("#number");
var p1score = 0;
var p2score = 0;
var isGameOver = false;
var winningScore = 1;


p1Btn.addEventListener("click", function(){
    if(!isGameOver){
        p1score++
        p1Score.textContent = p1score;
        if(p1score == winningScore){
            p1Score.classList.toggle("winningColor");
            isGameOver = true;
        }
    }
    
});

p2Btn.addEventListener("click", function(){
    if(!isGameOver){
        p2score++
        p2Score.textContent = p2score;
        if(p2score == winningScore){
            p2Score.classList.toggle("winningColor");
            isGameOver = true;
        }
    }
});

resetBtn.addEventListener("click", function(){
    p1score = 0;
    winningScore = 1;
    finalValue.textContent = winningScore;
    p1Score.textContent = p1score;
    p1Score.classList.remove("winningColor");
    p2score = 0;
    p2Score.textContent = p1score;
    p2Score.classList.remove("winningColor");
    isGameOver = false;
});

changeValue.addEventListener("change", function(){
    winningScore = changeValue.value;
    finalValue.textContent = winningScore;
    p1score = 0;
    p2score = 0;
    p1Score.textContent = p1score;
    p2Score.textContent = p2score;
    
});
