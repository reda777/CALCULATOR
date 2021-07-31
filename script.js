const buttons=document.querySelectorAll('button');
const display=document.querySelector('.display span');
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.value==='clear')
            display.textContent="";
        else
            display.textContent+=e.target.value;
    });
});
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
