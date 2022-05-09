let myLovelyString = "Chetan is a good boy good";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("good"));  // return index of first good 
console.log(myLovelyString.lastIndexOf("good"));   // return index of last good
console.log(myLovelyString.slice(0,4));   // return value of 0 to n-1 

d = myLovelyString.replace("Chetan", "Rohan");
console.log(d,myLovelyString);