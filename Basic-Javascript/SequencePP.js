// 1 - Sequence Practice Problem
console.log("Single digit number "+ Math.floor(Math.random() * 10));
//2
console.log("Dice Number "+ Math.floor(1 + Math.random()*5));
//3
let sum =(Math.floor(Math.random() * 10)) + (Math.floor(Math.random() * 10));
console.log("addition of two random numbers "+sum);
//4 read five values and perform sum and average operation
console.log("Enter five values");
let arr = new Array(5);
var readlineSync = require("readLine-sync");
 sum =0;
for(let i =0; i< arr.length; i++){
    arr[i] = readlineSync.questionInt();
    sum += arr[i];
}
let avg = sum/arr.length;
console.log("Total sum: "+sum);
console.log("Total average: "+avg);


