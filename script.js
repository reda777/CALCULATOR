const numbers=document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const clear=document.querySelector('.clear');
const equal=document.querySelector('.equal');
const display=document.querySelector('.display span');
let inputes=[];
let concatInput=[];
let operator;
document.onkeydown = function (e) {
    if(['0','1','2','3','4','5','6','7','8','9','.','Backspace'].includes(e.key))
        populateScreen(e.key);
    if(['/','*','-','+'].includes(e.key))
        evaluate(e.key);
    if(['Enter'].includes(e.key))
        results();
    if(['Delete'].includes(e.key))
        clearScreen();
}
numbers.forEach(number=>{
    number.addEventListener('click',(e)=>{
        populateScreen(e.target.value);
    });
});
operators.forEach(operator=>{
    operator.addEventListener('click',(e)=>{
        evaluate(e.target.value);
    });
});
clear.addEventListener('click',(e)=>{
    clearScreen();
});
equal.addEventListener('click',(e)=>{
    results();
});

function populateScreen(userInput){
    if(userInput==='.'){
        if(!inputes.includes('.')){
            inputes.push(userInput);
            display.textContent=inputes.join('');
        }
    }
    else if(userInput==='Backspace'){
        inputes.pop();
        if(inputes.length!==0)
            display.textContent=inputes.join('');
        else
            display.textContent='0';
    }
    else{
        if(inputes.length<26){
            inputes.push(userInput);
            display.textContent=inputes.join('');
        }
    }
}
function clearScreen(){
    display.textContent="0";
    inputes.length=0;
    concatInput.length=0;
    operator=undefined;
}
function results(){
    concatInput[1]=inputes.join('');
    inputes.length=0;
    result=operate(operator,concatInput[0],concatInput[1]);
    display.textContent=result;
    inputes.push(result);
}
function evaluate(userInput){
    if(concatInput.length == 1 ){
        concatInput[1]=inputes.join('');
        inputes.length=0;
        result=operate(operator,concatInput[0],concatInput[1]);
        operator=userInput;
        display.textContent=result;
        concatInput.length=0;
        concatInput[0]=result;
    }
    else{
        concatInput.length=0;
        concatInput[0]=inputes.join('');
        inputes.length=0;
        operator=userInput;
        display.textContent=concatInput[0];
    }
}
function add(a,b){
    return round(+a + +b);
}
function subtract(a,b){
    return round(+a - +b);
}
function multiply(a,b){
    return round(+a * +b);
}
function divide(a,b){
    if(b==0){
        clearScreen();
        return 'Impossible';
    }
    return round(+a / +b);
}
function round(num) {
    let multiplier = Math.pow(10, 17);
    return Math.round(num * multiplier) / multiplier;
}
function operate(op,a,b){
    switch (op) {
        case "+": return add(a,b); break;
        case "-": return subtract(a,b); break;
        case "*": return multiply(a,b); break;
        case "/": return divide(a,b); break;
        default: return "operator error"; break;
    }
}
