
// 1- Function accept a full name string and convert each letter of first world to Capital and the remaining to small (Pascal Case).
function capitalizesentance(sentance) {
    sentance = sentance
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
      return sentance;
  }
console.log(capitalizesentance("the quick brown fox")); // The Quick Brown Fox

// 2- Function that accept a sentence and return the longest word within the input
function longestWord(sentance){
    sentance = sentance.split(' ');
    var longest = 0;
    let LongestChar = " ";
    for(let i=0; i<sentance.length; i++){
        if(longest < sentance[i].length){
            longest = sentance[i].length;
            LongestChar = sentance[i];
        }
    }
    return LongestChar;
}
console.log(longestWord('Web Development Tutorial')); // Development

// 3- Write a JavaScript Function that returns a passed string with letters in alphabetical order
function sortSentance(sentance){
    sentance = sentance.split('').sort().join('');

    return sentance;
}
console.log(sortSentance("javascript")); // aacijprstv

// 4)  Sort them ascending then descending and print the result on console as table.
var arr = [2,1,3,2,7,2,8,4,3,6,10,9,12];
ascendingArr = arr.sort((a,b)=> (a-b));
console.log(ascendingArr);

descendingArr = arr.sort((a,b)=> -(a-b));
console.log(descendingArr);

// 4) Filter numbers larger than 5 (use ES6 arrow function )
filterArr = arr.filter(e => e > 5);
console.log(filterArr)

// 4) display Max and Min Number 
maxNumberInArr = Math.max(...arr);
console.log(maxNumberInArr);

minNumberInArr = Math.min(...arr);
console.log(minNumberInArr);

// 4) Use Array.from function to generate a copy from this array but elements will be multiplied by 5.
function arrFunction(arr){
    for(let i=0; i<arr.length; i++){
       arr[i] = arr[i] * 5;
    }
    return arr;
}
console.log(arrFunction(arr));

// 4) Remove repeated numbers from the array
var arrFilter = arr.filter((e , i)=> arr.indexOf(e) === i);
console.log(arrFilter);

// 4) Display the array elements from pervious step as string concatenated with *.
arrFilterWithJoin = arrFilter.join("*");
console.log(arrFilterWithJoin);

// 5) Write a JavaScript function to get the month name from a particular date and display the result on alert.
let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var date = new Date();
var monthIndex = date.getMonth();
function MonthName(month = monthNames[monthIndex]){
    alert(month);
}
MonthName();