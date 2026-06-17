
// calculator

let num1 = +prompt('Enter first number');
let operator = prompt('Choose operator from +, -, /, x ');
let num2 = +prompt('Enter Second number');
let result;

if( operator == '+'  ){
   result = num1 + num2;
}else if(operator === '-'){
   result = num1 - num2;
}
else if(operator === 'x'){
   result = num1 * num2; 
}
else if(operator === '/'){
   result = num1 / num2; 
}
else{
    result = 'please enter valid input'
}
document.write(result)

