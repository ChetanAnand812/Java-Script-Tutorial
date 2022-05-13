// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is plain text written in JavaScript object notation
// JSON is used to send data between computers
// JSON is language independent *
// The JSON syntax is derived from JavaScript object notation, but the JSON format is text only.
// Code for reading and generating JSON exists in many programming languages.

// It defines an object with 3 properties:
// name
// age
// car
// Each property has a value.
// If you parse the JSON string with a JavaScript program, you can access the data as an object:
        // 1. let personName = obj.name;
        // 2. let personAge = obj.age;

// Json only used double quote

// obj = {name: "chetan", length: 1, a:{this: "that"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
parsed = JSON.parse({"name": "chetan", "length": 1,"a":{"this":"that"}})
console.log(parsed);