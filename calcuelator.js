const calculator = document.querySelector('.calcuelator');
const buttons = document.querySelector('.calcuelator__btn');
const operator = document.querySelector('.operator');
const equeal = calculator.querySelector('.calcuelator__equeal');
const display = calculator.querySelector('#calcuelator__result_screen');

const calculate = function calcuelate(n1, operator, n2){
    let result = 0;
    if(operator === '+') {
        result = (+n1) + (+n2);
    }
    else if(operator === '-'){
        result = (+n1) - (+n2);
    }
    else if(operator === 'x'){
        result = (+n1) * (+n2);
    }
    else if(operator === '/'){
        console.log(typeof n1,typeof n2);
        result = (+n1) / (+n2);
    }
    return String(result);
}
let operatorForAdvanced = '';
let firstNumber = '';
let secondNumber = '';

buttons.addEventListener('click',function(event){
    const target = event.target;
    const type = target.classList[0];
    const buttonContent = target.textContent;
    console.log(display);
    if(type === 'number'){
        if(!operatorForAdvanced){
            if(firstNumber === '0'&&buttonContent !== '.'){
                firstNumber = buttonContent;
            }
            else{
                if(!!!firstNumber&&buttonContent === '.')
                    buttonContent = '0.';
                    // operator == ''
                firstNumber += buttonContent;
            }
        }
        else{
            if(!!!secondNumber&&buttonContent ==='.')
                buttonContent = '0.';
            secondNumber += buttonContent;            
        }
    }
    else if(type === 'operator'){
        if(!!operatorForAdvanced && !secondNumber){
            operatorForAdvanced  = buttonContent;
        }
        else if(!!operatorForAdvanced && !!secondNumber){
            firstNumber = calculate(firstNumber,operatorForAdvanced,secondNumber);
            operatorForAdvanced = buttonContent;
            secondNumber = '';
        }
        else if(!firstNumber && buttonContent === '-'){
            firstNumber += '-';
        }
        // else if(!!firstNumber&&!Number){
        //     operatorForAdvanced = buttonContent;
            
        // }
        else if(!operatorForAdvanced){
            operatorForAdvanced = buttonContent;
        }
    }
    else if(type === 'calcuelator__clear'){
        operatorForAdvanced = "";
        firstNumber = '';
        secondNumber = '';
        Number = '';
        display.textContent = '0';
    }
    else if(type === 'calcuelator__equeal'){
        if(!!firstNumber&&!!operator&&!!secondNumber){
            firstNumber = "" + calculate(firstNumber,operatorForAdvanced,secondNumber);
            operatorForAdvanced = '';
            secondNumber = '';
        }
    }
    display.textContent = firstNumber + ' ' + operatorForAdvanced + ' ' + secondNumber;
})
