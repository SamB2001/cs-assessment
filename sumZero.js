const perf = require('execution-time')();

let array = [1, 4, 11, 2, 37, -4]

function doesItAddToZero(array) {
    let addZero = false
for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
        if(i !== j){
            if(array[i] + array[j] === 0){
                addZero = true
            }
        }
    }
} console.log(addZero)
}


// Timer
perf.start();                     // Starts timer
doesItAddToZero(array);
let results1 = perf.stop();

console.log(results1)

// this took 9.58 ms

//O(n^2)