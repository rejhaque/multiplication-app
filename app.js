const num1 = Math.ceil(Math.random()* 10);
const num2 = Math.ceil(Math.random()* 10);
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
     score = 0;
}

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2; 
// console.log(correctAns);

formEl.addEventListener("click", function(){
     const userAns = +inputEl.value;
     // console.log(userAns, typeof userAns);
     if(userAns === correctAns){
          score++;
          updateLocalStorage();
     }else{
          score--;
          updateLocalStorage();
     }
});

function updateLocalStorage(){
     localStorage.setItem("score", JSON.stringify(score));
}

const scoreEl = document.getElementById("score");
scoreEl.innerHTML = `Score: ${score}`;

