console.log("press 1 to Generate random number and check min and max");
console.log("press 2 check if day and month is between march 20 and july 20");
console.log("press 3 check the year is leap year or not");
console.log("press 4 simulate Coin flip");

var readlineSync = require("readline-sync");
let input = readlineSync.questionInt();
while (input > 4 || input <= 0) {
  console.log("Invalid input");
  input = readlineSync.questionInt();
}
switch (input) {
  case 1:
    GenMinMax();
    break;
  case 2:
    CheckDayandMonth();
    break;
  case 3:
    CheckLeapYear();
    break;
  case 4:
    CoinFlip();
    break;
  default:
    console.log("Invalid Inupt");
    break;
}

//ability to simulate coin flip
function CoinFlip(){
  const HEAD = 1;
    let coin = Math.floor(Math.random() * 2)
    if(coin == HEAD)
    console.log("HEAD");
    else
    console.log("TAILS");
}

//ability to check whether a year is leap year or not
function CheckLeapYear() {
  let year = readlineSync.question("Enter a year: ");
  while (year > 9999 || year <= 999) {
    console.log("Invalid year, Try again. \n year must be a 3 digit number");
    year = readlineSync.question("Enter a year: ");
  }
  if (year % 4 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    console.log(year, " is leap year ");
  } else {
    console.log(year, " is not a leap year");
  }
}

//2 check if day and month is between march 20 and july 20
function CheckDayandMonth() {
  let day, month;
  day = readlineSync.questionInt("Enter the day: ");
  while (day > 31 || day <= 0) {
    console.log("invalid day, Enter again between 1-31");
    day = readlineSync.questionInt("Enter the day: ");
  }
  month = readlineSync.questionInt("Enter the month: ");
  while (month > 12 || month <= 0) {
    console.log("invalid month, Enter again between 1-12");
    month = readlineSync.questionInt("Enter the month; ");
  }
  if (
    (month == 3 && day >= 20) ||
    (month == 6 && day <= 20) ||
    (month > 3 && month < 6)
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// 1 ability to generate random number and check min and max numbers
function GenMinMax() {
  let arr = new Array(5);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(100 + Math.random() * 899);
    console.log(arr[i]);
  }
  console.log("maximum number " + Max(arr));
  console.log("minimum number " + Min(arr));

  function Max(arr) {
    let max = arr[0];
    let i = arr.length;
    while (i--) {
      max = arr[i] > max ? arr[i] : max;
    }
    return max;
  }

  function Min(arr) {
    let min = arr[0];
    let i = arr.length;
    while (i--) {
      min = arr[i] < min ? arr[i] : min;
    }
    return min;
  }
}
