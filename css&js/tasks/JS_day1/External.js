// 2- Create an external JavaScript file and name it External.js 
// -------------2)(a)----------------------
var num1 = 3;
var num2 = 2.9;
var num3 = 0xff;

var firstName = "Amira";
var middleName = 'Hassan';
var lastName = `Sobhi`;

// -------------2)(b)----------------------
var flag = true;

// -------------2)(c)----------------------
console.log("This is External JavaScript file"); // This is External JavaScript file

// 3)(a)- On External.js → print the value of number1 on console before number1 definition line ?!
// console.log(number1); // ReferenceError: number1 is not defined

// 3) C- Try to change your firstName character at index 3
firstName[3] ='A';
console.log(firstName); // Amira 

// 3) (g)
console.log("typeof num1 : " + typeof(num1)); // number
console.log("typeof num2 : " + typeof(num2)); // number
console.log("typeof num3 : " + typeof(num3)); // number

console.log("typeof firstName : " + typeof(firstName)); // string
console.log("typeof middleName : " + typeof(middleName)); // string
console.log("typeof lastName : " + typeof(lastName)); // string

console.log("typeof flag : " + typeof(flag)); // boolean

// 4)apply the following assignments and print the result on console
//   a- Summation of number1 and number2
console.log(num1 + num2); // 5.9

//  b- Summation of flag and number2
console.log(flag + num2); // 3.9

//  c- Summation of firstName and flag
console.log(firstName + flag); // Amiratrue

// 	d- Summation of number1 and firstName
console.log(num1 + firstName); // 3Amira

// e- Multiplication of number1 and flag
console.log(num1 + flag);  // 4

// f- Divide number1 and lastName
console.log(num1 + lastName); // 3Sobhi 

// g- Print your full Name with firstName , middleName and lastName variables with string template and backtick (ES6).
console.log(`${firstName} ${middleName} ${lastName}`); // Amira Hassan Sobhi



