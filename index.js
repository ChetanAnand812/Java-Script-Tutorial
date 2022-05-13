// 1. Ways to print in JavaScript
// console.log("Hello World"); 
// alert("Hi");
// document.write("This is document.write");

// 2. JavaScript console API
// console.warn("This is warning");
// console.log("Hello World", 4+6, "Another log"); 
// console.error("This is error");
// console.assert(4==6)
// console.assert(4==4)

// 3. JavaScript Variables
// Containers to store data values
var number1 = 34;
var number2 = 56;
// console.log("Addtion of no is " , number1 + number2);

// 4. Data Types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76; 

// String
var str1 = "This is a string";
var str2 = "This is also a string";

// Booleans
var t = true;
var f = false;
// console.log(a,b);

var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(null);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: number, string, boolean, undefined,null, Symbol
2. Userdefined(Reference) data types: Arrays and Objects
*/

// Arrays
var arr = [1,2,"Hello",4,5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[4]);

// Objects
var Marks = {
    ravi: 34,
    shubham:78,
    harry:99.36
}
// console.log(Marks);

// 5. Operators in Javascript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b: " , a+b)
// console.log("The value of a - b: " , a-b)
// console.log("The value of a * b: " , a*b)
// console.log("The value of a / b: " , a/b)

// Assignment Operators
var c = b;
// c += 2;    c = c + 2
// c -= 2;    c = c - 2
// c *= 2;    c = c * 2
// c /= 2;    c = c / 2
// console.log("Value of c is: " ,c);

// Comparison Operators
var x = 54;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// a. logical AND
// console.log(true && true);    true
// console.log(true && false);   false
// console.log(false && true);   false
// console.log(false && false);  false
// b. logical OR
// console.log(true || true);     true
// console.log(true || false);    true
// console.log(false || true);    true
// console.log(false || false);   false
// c. logical not
// console.log(!false);
// console.log(!true);


/// input
let namastebtn = document.querySelector('button');
namastebtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('Enter name of students');
    namastebtn.textContent = 'Roll No. 1:' + name;
}