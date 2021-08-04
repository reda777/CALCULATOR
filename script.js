const numbers=document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const clear=document.querySelector('.clear');
const equal=document.querySelector('.equal');
const display=document.querySelector('.display span');
let inputes=[];
let concatInput=[];
let operator;

numbers.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.value==='.'){
            if(!inputes.includes('.')){
                inputes.push(e.target.value);
                display.textContent=inputes.join('');
            }
        }
        else if(e.target.value==='backspace'){
            inputes.pop();
            display.textContent=inputes.join('');
        }
        else{
            inputes.push(e.target.value);
            display.textContent=inputes.join('');
        }
            
    });
});
operators.forEach(button=>{
    button.addEventListener('click',(e)=>{
        evaluate(e.target.value);
    });
});
clear.addEventListener('click',(e)=>{
    clearScreen();
});
equal.addEventListener('click',(e)=>{
    results();
});

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
        default: return "unknown operator"; break;
    }
}
