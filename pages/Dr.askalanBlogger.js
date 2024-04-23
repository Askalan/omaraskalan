//console.log("hello");
//console.log("Dr. Askalan Need money");
//window.alert("do you have an account?");
//window.alert("Okay! Log In");

//HTML text show
/* document.getElementById("Agricultural").textContent =
  "Dr.askalan Is Agricultural Engineer";
document.getElementById("Massege").textContent =
  "All orginaztion memebers requeired to fill out this form for their salary";

let fullName = "Dr.Askalan"; */
//let Age = 29;
//let isstudent = true;

//document.getElementById("p1").textContent = "your name is ${fullname}";

// variable = a container that stores a value.
//             Behaves as if it were the value it container

// 1. declaration   let x;
// 2. assigment      x = 100

//let age = 29;
//let price = 199.89;
//let gpa = 3.9;

//console.log();
//console.log("You are ${age} years old");
//console.log("The price is $${price}");
//console.log("Your GPA is: ${gpa}");

//let x = 100;
//console.log(x);

//let firstName = "Askalan";
//let favorifood = "Cabmbuulo";
//let email = "askalan@gaiml.com";

//console.log(typeof firstName);
//console.log("your name is {firstName}");
//console.log("your like ${favorifood}");
//console.log("your email is ${email}");

//let X = 12;
//let Y = 9;
//let c = X + Y;

//console.log(c);

//let online = true;

//console.log("askalan is online: ${online}");

// Arithmatic operators = operands ( values, variable, etc)
//                         operators (+ - * /)
//                         ex, 11 = x + 5;

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extrastudents = students % 3;

// short way
//students += 1;
//students -= 3;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;
//console.log(students);

/* operator precedence
1. parenthesis()
2. exponents
3. multiplication $ division & modulo
4. addition & subtraction */

//let result = 1 + 2 * 3 + 4 ** 2;
//let result = (12 % 5) + 8 / 2;
//let result = 6 / 2 ** (2 + 5);
//console.log(result);

// how to accept user input
// 1. EASY WAY = WINDOW PROMPT
// 2. PROFESSIONAL WAY = HTML TEXTBOX

//let username;
//username = window.prompt("What is your username");
//console.log(username);

/* let username;
document.getElementById("mysubmit").onclick = function () {
  username = document.getElementById("mytext").value;
  console.log(username);
};
 */
// change words
//let username;
//document.getElementById("mysubmit").onclick = function () {
//username = document.getElementById("mytext").value;
//document.getElementById("myH1").textContent = "Hello Dr.Askalan";
//};

// type conversion = change the datatype of a value to another
//                     (string, numbers and booleans)

//let age = window.prompt("how old are you?");
//age = Number(age);
//age += 1;
//console.log(age);

//const = a variable that can't be change

const PI = 3.14159;
let radius;
let circumference;

//PI = 420.69;
//radius = window.prompt("Enter the radius of the a circle");
//radius = Number(radius);
//circumference = 2 * pi * radius;
//console.log(circumference);

document.getElementById("mysubmit").onclick = function () {
  radius = document.getElementById("mytext").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myh3").textContent = circumference;
};
