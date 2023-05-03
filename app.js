// <-- Alerts START --> //

alert("Welcome to JS Land...");

alert("Error! Please enter a valid password");

alert("Welcome to JS Land...\n Happy Coding!");

// <-- Alerts END --> //

// <-- VARIABLES FOR STRINGS START --> //

// Task 1 //
var userName;

// Task 2 //
var myName = "Muhammad Shahzaib Khan";

// Task 3 //
var messsage = "Hello World";
alert(messsage);

// Task 4 //
var name = "Muhammad Shahzaib khan";
var age = 21;
var course = "Certification Full Stack Developer";

alert(name);
alert(age);
alert(course);

// Task 5 //
var a = "PIZZA \n PIZZ \n PIZ \n PI \n P ";
alert(a);

// Task 6 //
var email = "example@gmail.com";
alert("My email is " + email);

// task 7 //
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// Task 8 //
document.write("Yah! I can write HTML through JavaScript");

// Task 9 //
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);

// <-- VARIABLES FOR STRINGS ENDS --> //

// <-- VARIABLES FOR NUMBERS START --> //

// Task 1 //
var age = 21;
alert("I am " + age + " years old");

// Task 2 //
var visited = 14;
alert("You have visited this site " + visited + " times");

// Task 3 //
var birthyear = 2001;
document.write("My birth year is " + birthyear);

// Task 4 //
var user = prompt("Enter your name");
var product = prompt("Enter product title");
var qauntity = prompt("Enter quantity");
document.write(
  user + " ordered " + qauntity + " " + product + " on XYZ Clothing Store"
);

// <-- VARIABLES FOR NUMBERS END --> //

// <-- VARIABLE NAMES: LEGAL & ILLEGAL  START --> //

// Task 1 //
var name, age, year;

// Task 2 //
var name; // legal
var firstName; // legal
var first_Name; // legal
var email123; // legal
var $name; // legal

// var 123name; // Illegal
// var function; // Illegal
// var &*^%; // Illegal
// var First-name; // Illegal
// var Last Name; // Illegal

// Task 3 //
document.write("Rules for naming JS variables.<br /> <br /> <br />");
document.write(
  "Variables names can only contain numbers, _ , $. For example $my_1stVariable.<br />"
);
document.write(
  "Variables must begin with a letter, $ or _. For example $name, _name or name.<br />"
);
document.write("Variable names are case sensitive.<br />");
document.write("Variable names should not be JS reserved keywords.<br />");

// <-- VARIABLE NAMES: LEGAL & ILLEGAL  END --> //

// <-- MATH EXPRESSIONS START --> //

// Task 1 //

var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c);

// Task 2 //

// Subtraction

var a = 3;
var b = 5;
var c = a - b;
document.write("Subtraction of " + a + " and " + b + " is " + c);

// Division

var a = 3;
var b = 5;
var c = a / b;
document.write("Subtraction of " + a + " and " + b + " is " + c);

// Modulus

var a = 3;
var b = 5;
var c = a % b;
document.write("Subtraction of " + a + " and " + b + " is " + c);

// Task 3 //

var a;
document.write("Value after variable declaration is: " + a);
a = 5;
document.write("<br /> Value after variable declaration is: " + a);
++a;
document.write("<br /> Value after increment is: " + a);
a = a + 7;
document.write("<br /> Value after addition is: " + a);
--a;
document.write("<br /> Value after decrement is: " + a);
a = a % 3;
document.write("<br /> The remainder is: " + a);

// Task 4 //

var ticketCost = 600;
var ticket = 5;
document.write(
  "Total cost to buy 5 tickets to a movie is " + ticket * ticketCost + " PKR"
);

// Task 5 //
document.write("Table of 4 <br /> <br />");

var number = 4;
for (var i = 1; i <= 10; i++) {
  document.write(number + "x" + i + "=" + number * [i] + "<br />");
}

// Task 6 //

// Temperature convertor

var celcius = 25;
var fahrenheit = 70;

var toFarenheit = (celcius * 9) / 5 + 32;
var toCelcius = ((fahrenheit - 32) * 5) / 9;

document.write(celcius + "&deg;C" + " is " + toFarenheit + "&deg;F <br />");
document.write(fahrenheit + "&deg;F" + " is " + toCelcius + "&deg;C");

// Task 7 //

var price_1 = 650;
var price_2 = 100;

var quantity_1 = 3;
var quantity_2 = 7;
var shipping_Charges = 100;

var totalPrice1 = price_1 * quantity_1;
var totalPrice2 = price_2 * quantity_2;
var totalValue = totalPrice1 + totalPrice2 + shipping_Charges;

document.write("Shopping Cart <br /> <br />");
document.write("Price of item 1 is " + price_1);
document.write("<br /> Quantity of item 1 is " + quantity_1);
document.write("<br /> Price of item 2 is " + price_2);
document.write("<br /> Quantity of item 2 is " + quantity_2);
document.write("<br /> Shipping Charges are " + shipping_Charges);
document.write("<br /> Total cost of your order is " + totalValue);

// Task 8 //

var totalMarks = 980;
var obtainedmarks = 804;
var percentage = (obtainedmarks / totalMarks) * 100;

document.write("Mark Sheet <br /> <br />");
document.write("Total Marks: " + totalMarks);
document.write("<br /> Obtained Marks: " + obtainedmarks);
document.write("<br /> Percentage: " + percentage + "%");

// Task 9 //

var dollar = 10;
var riyal = 25;

var dPkr = dollar * 104.8;
var rPkr = riyal * 28;
var total = dPkr + rPkr;

document.write("Total Currency in PKR: " + total);

// Task 10 //

var a = 10;
var b = ((a + 5) * 10) / 2;
document.write(b);

// Task 11 //

var currentYear = 2023;
var birthYear = 2001;
var age = currentYear - birthYear;

document.write("Your age is: " + age);

// Task 12 //

var radius = 20;
var pi = 3.142;

var cirumference = 2 * pi * radius;
var area = pi * (radius * radius);

document.write("The circumference of the circle is " + cirumference);
document.write("<br /> The area of the circle is " + area);

// Task 13 //

document.write("<b> The Lifetime Supply Calculator <b/><br /><br />");

var snack = "Nuggets";
var currentAge = 10;
var maxAge = 75;
var perDay = 10;

var yearRemaining = maxAge - currentAge;
var lifeReamaining = yearRemaining * 365;
var totalSnack = lifeReamaining * perDay;

// document.write("You will need " + totalSnack + " to last until the ripe old age of age " + maxAge);

// <-- MATH EXPRESSIONS END --> //

// <-- USER INPUT & CONDITIONAL STATEMENT START --> //

// Task 1 //

var user = prompt("Enter your City", "Karachi");

if (user == "Karachi") {
  alert("Welcome to the city of lights");
}

// Task 4 //

var user = prompt("Enter your gender");

if (user == "Male") {
  document.write("Good Morning Sir");
} else {
  document.write("Good Morning Ma'am");
}

// Task 3 //

var signalColor = prompt("Enter the color of the road traffic signal:");

if (signalColor === "Red") {
  console.log("Must Stop");
} else if (signalColor === "Yellow") {
  console.log("Ready to move");
} else if (signalColor === "Green") {
  console.log("Move now");
} else {
  console.log("Invalid input. Please enter Red, Yellow, or Green.");
}

// Task 4 //

var user = +prompt("Enter remaining fuel");

if (user < 0.25) {
  document.write("Please refill the fuel in the car");
} else {
  document.write("You are good to go");
}

// Task 5 //

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true"); // Works
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true"); // didn't work
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true"); // works
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true"); // works
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
} // works

if (true) {
  alert("True");
}
if (false) {
  alert("False");
} // Works

if ("car" < "cat") {
  alert("car is smaller than cat"); // Works
}

// Task 6 //

var english = +prompt("Enter English Marks");
var urdu = +prompt("Enter Urdu 2 Marks");
var computer = +prompt("Enter Computer 3 Marks");
var totalMarks = 300;
var marksObtained = english + urdu + computer;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Mark ");
document.write("<br />Total Marks : " + totalMarks);
document.write("<br />Marks Obatained : " + marksObtained);
document.write("<br />Percentage : " + percentage + "%");

if (percentage >= 80) {
  document.write("<br />Grade: A-one");
  document.write("<br />Remarks : Excellent");
} else if (percentage >= 70) {
  document.write("<br />Grade: A");
  document.write("<br />Remarks : Good");
} else if (percentage >= 60) {
  document.write("<br />Grade: B");
  document.write("<br />Remarks : You need to Improve");
} else if (percentage < 60) {
  document.write("<br />Grade: Fail");
  document.write("<br />Remarks : poor");
}

// Task 7 //

var number = prompt("Enter Number");

if (number == 9) {
  document.write("Bingo! Correct answer");
} else if (number == 9 + 1 || number == 9 - 1) {
  document.write("Close enough to the correct answer");
} else {
  document.write("Sorry! Wrong Answer");
}

// Task 8 //

var number = +prompt("Enter any Number");
var divid = number % 3;

if (divid) {
  document.write(number + " is not divided by 3");
} else {
  document.write(number + " is divided by 3");
}

// Task 9 //

var number = +prompt("Enter any Odd or Even Number");
var check = number % 2;

if (check) {
  document.write(number + " is odd");
} else {
  document.write(number + " is even");
}

// Task 10 //

// var temp = +prompt("Write  Tempreature");

if (temp >= 40) {
  document.write("It is too hot outside.");
} else if (temp >= 30) {
  document.write("The Weather today is Normal.");
} else if (temp >= 20) {
  document.write("Today’s Weather is cool.");
} else if (temp < 20) {
  document.write("OMG! Today’s weather is so Cool.");
}

// <-- MATH EXPRESSIONS END --> //

// <-- IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS  START--> //

// Task 1 //

var input = prompt("Enter a character:");

if (!isNaN(input)) {
  document.write(input + " is a number.");
} else if (input === input.toUpperCase()) {
  document.write(input + " is an uppercase varter.");
} else if (input === input.toLowerCase()) {
  document.write(input + " is a lowercase letter.");
} else {
  document.write("Invalid input.");
}

// Task 2 //

var num1 = +prompt("Enter the first integer: ");
var num2 = +prompt("Enter the second integer: ");

if (num1 > num2) {
  document.write(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  document.write(num1 + " is smaller than " + num2);
} else {
  document.write("Both integers are equal");
}

// Task 3 //

var num = +prompt("Enter a Number:");

if (num > 0) {
  console.log(num + " is a positive Number.");
} else if (num < 0) {
  console.log(num + " is a negative Number.");
} else {
  console.log("The Number is zero.");
}

// Task 4 //

var vowel = prompt("Enter a Alphabet:");

if (
  vowel == "a" ||
  vowel == "e" ||
  vowel == "i" ||
  vowel == "o" ||
  vowel == "u"
) {
  console.log(vowel + " is a vowel.");
} else {
  console.log(vowel + " is not a vowel.");
}

// Task 5 //

var correctPass = "hello world";
var userPass = prompt("Enter your password:");

if (userPass === "") {
  console.log("Please enter your password.");
} else if (userPass === correctPass) {
  console.log(
    "Correct! The password you entered matches the original password."
  );
} else {
  console.log("Incorrect password.");
}

// Task 6 //

var greeting;
var hour = 13;

if (hour < 18) {
  alert("Good day"); // alert was missing to display
} else {
  //{} was not here
  alert("Good evening"); //alert was missing to display
}

// Task 7 //

// var Time = prompt("Enter time");

if (Time >= 0000 && Time < 1200) {
  document.write("Good Morning");
} else if (Time >= 1200 && Time < 1700) {
  document.write("Good Afternoon");
} else if (Time >= 1700 && Time < 2100) {
  document.write("Good Evening");
} else if (Time >= 2100 && Time < 2359) {
  document.write("Good Night");
}

// <-- USER INPUT & CONDITIONAL STATEMENT END --> //

// <-- ARRAYS START --> //

// Task 1 //

var arr = [];

// Task 2 //

var name = new Array();

// Task 3

var fruits = ["apple", "mango", "watermelon", "grapes"];

// Task 4

var numbers = [1, 2, 3, 4, 5];

// Task 5 //

var boolean = [true, false];

// Task 6 //

var mixArr = ["mango", 2, true, "banana"];

//Task 7 //

var Qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "B.COM",
  "MS",
  "M. Phil.",
  "PhD",
];

document.write("<h1>Qualifications:</h1>");

document.write("<ol>");

for (let i = 0; i < Qualifications.length; i++) {
  document.write("<li>" + Qualifications[i] + "</li>");
}

document.write("</ol>");

//Task 8 //

document.write("<h1>MarkSheet</h1>");

var students = ["Michael", "Jhon", "Tony"];
var MarksObtained = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < students.length; i++) {
  var percentage = (MarksObtained[i] / totalMarks) * 100;
  document.write(
    " Score of " +
      students[i] +
      " is " +
      MarksObtained[i] +
      ". Percentage : " +
      percentage +
      "%<br />"
  );
}

// Task 9 //

document.write("<h1>Colors</h1>");

var colors = ["red", "blue", "green", "yellow", "orange"];

var color = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(color);
document.write(colors + "<br />");

var color = prompt("Enter a color to add to the end of the array:");
colors.push(color);
document.write(colors + "<br />");

colors.unshift("purple", "pink");
document.write(colors + "<br />");

colors.shift();
document.write(colors + "<br />");

colors.pop();
document.write(colors + "<br />");

var position1 = prompt("Enter the index at which you want to add the color:");
var color = prompt("Enter a color to add to the array:");
colors.splice(position1, 0, color);
document.write(colors + "<br />");

var position2 = prompt("Enter the index from where you want to delete color:");
var numberOfColors = prompt("Enter the number of colors you want to delete:");
colors.splice(position2, numberOfColors);
document.write(colors + "<br />");

// Task 10

document.write("<h2>Student Score</h2>");

var StudentScore = [320, 230, 480, 120];
StudentScore.sort(function (a, b) {
  return a - b;
});

document.write([320, 230, 480, 120] + "<br />");
document.write(StudentScore);

// Task 11 //

document.write("<h2>CITIES</h2>");
const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

const selectedCities = [];

selectedCities.push(cities[0], cities[3]);

document.write("<br />Cities:", cities);
document.write("<br />Selected cities:", selectedCities);

// Task 12 //

document.write("<h1>Array to Sting</h1>");

var arr = ["This", "is", "my", "cat"];
var joining = arr.join(" ");
document.write("<br />" + ["This", "is", "my", "cat"]);
document.write("<br />" + joining);

// Task 15 //

document.write("<h1>DropDown</h1>");

var phoneCompany = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (let i = 0; i < phoneCompany.length; i++) {
  document.write("<option>" + phoneCompany[i] + "</option>");
}

document.write("</select>");

// <-- ARRAYS END--> //

// <-- ARRAYS AND LOOP START--> //

// Task 1

var multiArr = [[]];

// Task 3 //

for (var i = 1; i <= 10; i++) {
  console.log(i);
  document.write("<br />" + i);
}

// Task 4 //

document.write("<h1>Table</h1> ");

var tableNum = +prompt("Enter the number to print its multiplication table:");
var tableLength = +prompt("Enter the length of multiplication table:");

for (var i = 1; i <= tableLength; i++) {
  console.log(tableNum + " x " + i + " = " + tableNum * i);
  document.write("<br />" + tableNum + " x " + i + " = " + tableNum * i);
}

// Task 5 //

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log("Element at index " + i + " is " + fruits[i]);
}

// Task 6 //

document.write("<h1>Counting:</h1> ");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<h1>Reverse counting:</h1> ");
for (var i = 10; i >= 1; i--) {
  document.write(+i + ", ");
}
document.write("<h1>Even:</h1> ");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("<h1>Odd:</h1> ");
for (var i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}
document.write("<h1>Series:</h1> ");
for (var i = 1; i <= 10; i++) {
  document.write(i * 2 + "k, ");
}

// Task 7 //

var Bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt(
  "Welcome to ABC Bakery.What do you want to order sir/ma'am?"
);

var found = false;
for (var i = 0; i < Bakery.length; i++) {
  if (Bakery[i] === userInput) {
    found = true;
    break;
  }
}

if (found) {
  console.log(userInput + " is Available at index " + i + " in our bakery ");
} else {
  console.log("We are Sorry. " + userInput + " is Not Available in our bakery");
}

// Task 8 //

document.write("<h2>Largest Number</h2>");

var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

document.write("A = [24, 53, 78, 91, 12]");
document.write("<br />The largest number is: " + largest);

// Task 9 //

document.write("<h2>Smallest Number</h2>");

var B = [24, 53, 78, 91, 12];
var smaller = A[0];

for (var i = 1; i < A.length; i++) {
  if (B[i] < smaller) {
    smaller = B[i];
  }
}

document.write("B = [24, 53, 78, 91, 12]");
document.write("<br />The smaller number is: " + smaller);

// Task 10 //

document.write("<h1>Multipy by 5</h1>");

for (var i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    document.write(i + " ,");
  }
}

// <-- ARRAYS AND LOOP END--> //
