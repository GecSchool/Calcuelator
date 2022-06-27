const calculator = document.querySelector('.calcuelator');
const buttons = document.querySelector('.calcuelator__btn');
const operator = document.querySelector('.operator');
const equeal = calculator.querySelector('.calcuelator__equeal');
const display = calculator.querySelector('.calcuelator__result_screen');

const calculate = function calcuelate(n1, operator, n2){
    let result = 0;
    if(operator === '+') {
        result = Number(n1) + Number(n2);
    }
    else if(operator === '-'){
        result = Number(n1) - Number(n2);
    }
    else if(operator === '*'){
        result = Number(n1)*Number(n2);
    }
    else if(operator === '/'){
        result = Number(n1) / Number(n2);
    }
    return String(result);
}
let operatorForAdvanced = '';
let firstNumber = '';
let secondNumber ='';
let Number = '';


buttons.addEventListener('click',function(event){
    const target = event.target;
    const type = target.classList[0];
    const buttonContent = target.textContent;
    console.log('click');
    if(type === 'number'){
        console.log('number');
    }
    else if(type === 'operator'){
        console.log('oper');
    }
    else if(type === 'calcuelator__clear'){
        console.log('clear');
    }
    else if(type === 'calcuelator__equeal'){
        console.log("=")
    }
})
