let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value >= '0' && value <= '9' || value === '.') {
            if (operator === '') {
                num1 += value;
                display.value = num1;
            } else {
                num2 += value;
                display.value = num1 + operator + num2;
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            display.value = num1 + operator;
        } else if (value === '=') {
            if (num1 !== '' && num2 !== '' && operator !== '') {
                let result = eval(num1 + operator + num2);
                display.value = result;
                num1 = result.toString();
                num2 = '';
                operator = '';
            }
        } else if (value === 'C') {
            num1 = '';
            num2 = '';
            operator = '';
            display.value = '';
        } else if (value === '<') {
            if (operator === '') {
                num1 = num1.slice(0, -1);
                display.value = num1;
            } else {
                num2 = num2.slice(0, -1);
                display.value = num1 + operator + num2;
            }
        }
    });
});