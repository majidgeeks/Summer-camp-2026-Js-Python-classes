// function test1(params) {
//     console.log('Hello');
// };

// test1()
// test1()
// test1()
// test1()

// create a function which takes 3 parameters
// 1. name
// 2. age
// 3 roll

// just print these 3 params in on line

// docoment.write(name is (name), age is (age), 
// and roll num is (num))

function test2(name1, age1, rollNum){
    let name = name1;
    let age = age1;
    let roll = rollNum;

    document.write(`your name is ${name} and the age is ${age}
        and the roll number is ${roll}`);
};

let promName = prompt('enter your name')
let promAge = prompt('enter your age')
let promRoll = prompt('enter your Roll number')

test2(promName, promAge, promRoll);

