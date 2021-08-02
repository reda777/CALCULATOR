const buttons=document.querySelectorAll('button');
const display=document.querySelector('.display span');
let inputes=[];
let operator;
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.value==='clear')
            clear(e.target.value);
        if(['*','+','-','/'].includes(userInput)){
            if(inputes.length!=0)
            
        }
        populate(e.target.value);
    });
});
function clear(userInput){
    display.textContent="";
    inputes.length=0;
    operator=undefined;
}
function populate(userInput){
    if(userInput==='='){
        inputes.push(display.textContent);
        console.log(display.textContent);
        result=operate(operator,inputes[0],inputes[1]);
        display.textContent=result;
    }
    else if(['*','+','-','/'].includes(userInput)){
        inputes.push(display.textContent);
        console.log(display.textContent);
        operator=userInput;
        display.textContent="";
    }
    else{
        display.textContent+=userInput;
    }
}
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(op,a,b){
    switch (op) {
        case "+": return add(a,b); break;
        case "-": return subtract(a,b); break;
        case "*": return multiply(a,b); break;
        case "/": return divide(a,b); break;
        default: return NaN; break;
    }
}
