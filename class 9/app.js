// for(let i = 10; i <= 100; i = i + 10){
//     document.write(i + '<br>')
// }



// while loop

// let i = 0;

// while (i <= 10) {

//     document.write(i + '<br>');
//     i++;
// }



// function

// function greeting() {
//     document.write('Hello')
//     alert('Aao beth jao khana aa raha hai')
    
// };

// greeting();

// let myName = 'jabbar';


// function test() {
//     // let myName = str
//     document.write('Welcome ' + user);
// };

// let user = prompt('enter your name');

// test()


// function sum(a, b) {
//     return a + b
//     // console.log('a',a);
//     // console.log('b',b);

// };

// document.write(sum(12, 10))


function juice(fruit, amount) {
    // document.write('you have selected ' + fruit + '<br>')
    // document.write('Amount Received Rs ' + amount )

    if(fruit == 'mango'){
        alert('not available')
        alert('plz select an other fruit')
    }else{
    document.write('you have selected ' + fruit + '<br>')   
    document.write('Amount Received Rs ' + amount )
    
    }

};



let flavour = prompt('select friut');
let payment = prompt('Pesy do');

juice(flavour, payment)
