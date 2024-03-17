'use strict';
const calcAverage = (a,b,c) => (a + b + c) / 3; // тут для среднего значения оказывается нужно их +, не знал :)
const shark = Math.floor(calcAverage(36,28, 55)); //тут лучше использоваться trunc
const jelly = Math.floor(calcAverage(45,34,52));
// const shark = Math.floor(calcAverage(24,31,29));
// const jelly = Math.floor(calcAverage(56,41,45));
const CheckWinner = function (avgSharks, avgJelly){
    if (shark > jelly){
        return `Акулы выигрывают у них ${shark} против ${jelly}`
    } else if(jelly > shark){
        return `Медузы выигрывают у них ${jelly} против ${shark}`
    } else{
        return 'хуйня';
    }
}
console.log(CheckWinner(shark, jelly))
