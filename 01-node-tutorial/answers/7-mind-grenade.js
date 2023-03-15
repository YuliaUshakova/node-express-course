const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is: ${num1 + num2}`)
}

addValues(); //if we have a f instead of the module, that we invoke, this code will run even though we did not assign it to a variable and did not invoke that variable
//its not unique, also works in ES6 modules.
// when we import a module, we actually invoke it
// this code above is actually wrapped in a function by Node, when Node invokes it