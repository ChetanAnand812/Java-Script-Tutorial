// Arrow Function
// function summ(a,b){
//     return a+b;
// }

summ = (a,b)=>{
    return a+b;
} 

logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set intervla fired</b>"
    console.log("I am your log")
}

// SetTimeout and setinterval
// clr = setTimeout(logkaro, 2000);
// clr = setInterval(logkaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout



// JavaScript localStorage
localStorage.setItem('name', 'chetan');
localStorage
localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear();