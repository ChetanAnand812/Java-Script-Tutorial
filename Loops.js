var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// for (var i = 0;i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let j = 0;
// while(j < arr.length){
//     console.log(arr[j]);
//     j++;
// } 

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


// break and continue
for (var i = 0;i<arr.length; i++){
    if(i==2){
        // break;     output -- 1 2
        continue;    // output -- 1 2 4 5 6 7
    }
    console.log(arr[i]);
}
