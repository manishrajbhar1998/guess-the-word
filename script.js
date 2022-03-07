

const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
const score = document.querySelector('.score');
let play = false;
let sword = ['python','javascript','c++','php','java','c#','html','css','reactjs','angular','swif','android','sql'];
let newWord = "";
let reandWord = "";
let num = 0

const createNewWords = () =>{
    let random = Math.floor(Math.random() * sword.length);
    let newTempSword = sword[random];
    // console.log(newTempSword);
    return newTempSword;
    
} 
const scramble = (arr) =>{
    for(let i = arr.length-1;i>0;i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        score.style.display = "block";
        score.innerHTML = `Score : ${num}`;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWord = createNewWords();
        randWord = scramble(newWord.split("")).join("");
        msg.innerHTML = `Guess the word => ${randWord}`;
    }else{
        let tempWord = guess.value;
        if(tempWord.toUpperCase() === newWord.toUpperCase()){
            num++;
            score.innerHTML = `Score : ${num}`;
            play = false;
            msg.innerHTML = `Awesome It's Correct. It is ${newWord}`;
            btn.innerHTML = "Try Next";
            guess.classList.toggle('hidden');
            guess.value = "";
        }else{
            // console.log('incorect');
            msg.innerHTML = `Sorry Boss. It's not Correct. Plz try again  ${randWord}`;

        }
    }
});