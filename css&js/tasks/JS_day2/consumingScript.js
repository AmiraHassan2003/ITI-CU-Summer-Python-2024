// Assignment (1) b- Try to call the function before definition line?
console.log(printVariables()); // [undefined, undefined, undefined]


// Assignment (1) Create function name it printVariables(value1,value2,value3) (as function declaration) takes 3 parameters and return them as an Array
function printVariables(value1,value2,value3){
    return [value1, value2, value3];
}


// Assignment (1) a- try to console.log the values of value1,value2,value3 on consumingScript.js file ??
// console.log(value1); // value1 is not defined
// console.log(value2); // value2 is not defined
// console.log(value3); // value3 is not defined


// Assignment (1) c- Call the function with 3 values then print the return
let callFun = printVariables("a", "m", "r");
console.log(callFun); // ['a', 'm', 'r']


// Assignment (1) d- Try to call the function with less than 3 parameters
console.log(printVariables(3,5));  // [3, 5, undefined]

// Assignment (1) d) solve the problem of undefined variables
function printVariablesAfterSolution(value1,value2,value3 = 0){
    return [value1, value2, value3];
}
console.log(printVariablesAfterSolution(3,5)); //  [3, 5, 0]


// Assignment (1) e- What if you call the function with too many parameters ? (more than 3)
console.log(printVariables(3,5,7,9,8)); // [3, 5, 7]
// Assignment (1) e) Can you print them using (arguments)?
function printVariablesWithArguments(){
    return arguments;
}
console.log(printVariablesWithArguments(3,5,7,9,8));


// Assignment (1) f- Define var localVar=3; testingVar=5; inside the function’s block Before calling the function try to console.log the values localVar and testingVar.??
function printOutFunction(){
    var localVar=3; 
    var testingVar=5; 
}
// console.log(localVar);  // localVar is not defined
// console.log(testingVar) // testingVar is not defined


// Assignment (1) g- In step f , call the function and try to print localVar and testingVar?
printOutFunction();
// console.log(localVar);  // localVar is not defined
// console.log(testingVar) // testingVar is not defined


// Assignment (1) h- Define the following variable on your script outside the function let localVar=90;
let localVar=90;
function printOutFunctionWithLet(){
    console.log(localVar); // undefined
    var localVar=3; 
    var testingVar=5; 
}
console.log(localVar); // 90
printOutFunctionWithLet();
console.log(localVar); // 90


// Now inside the function what if you remove let from localVar and repeat the pervious Steps again?
localVarWithoutLet=90;
function printOutFunctionWithLet(){
    console.log(localVarWithoutLet); // undefined
    var localVarWithoutLet=3; 
    var testingVar=5; 
}
console.log(localVarWithoutLet); // 90
printOutFunctionWithLet();
console.log(localVarWithoutLet); // 90


// 2- Repeat step 1 but define the function as function expression
var printOutFunctionWithExpression = function(){
    var localVarWithExpression=3; 
    var testingVarWithExpression=5; 
}
// console.log(localVarWithExpression); //  localVarWithExpression is not defined
printOutFunctionWithExpression();


// 3- Repeat step 1 but define the function as arrow function
var printOutFunctionWithArrowFun = () => {
    var localVarWithArrowFun=3; 
    var testingVarWithArrowFun=5; 
}
// console.log(localVarWithArrowFun); //  localVarWithArrowFun is not defined
printOutFunctionWithArrowFun(); 





// ------------------ Assignment(2) --------------------
// 4- Functions accept 2 variables and return the summation result
function sum(num1 , num2){
    return num1 + num2;
}
console.log(sum(1)); // NaN

// solve this problem using ES6 feature.
function sumWithES6(num1 = 0, num2 = 0) {
    return num1 + num2;
}
console.log(sumWithES6(1)); // 1


//  b- What if the input is not a Number ?
console.log(sumWithES6('s')); // s0

// Solve this problem using your logic
function sumWithES6Soution(num1 = 0, num2 = 0) {
    num1 = (isNaN(num1))? 0: num1;
    num2 = (isNaN(num2))? 0: num2;

    return num1 + num2;
}
console.log(sumWithES6Soution('s')); // 0


//  5- Create a function that takes the following: a- User name using prompt ( required) if empty show the prompt again to user

function takeUserName(){
    do{
        userName = prompt("Please enter your name:");
    }while(!userName);
    console.log(userName);
}
takeUserName();
