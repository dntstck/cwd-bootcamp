// arithmetic.js
// Dru Delrosa | @dntstck


const threeInt = [5,9,7];  // three integer array

function findSum(threeInt){
    return threeInt.reduce((accumulate, currentVal) => {
    // trying something new here, using reduce
    return accumulate + currentVal;
    }, 0) 
};

function subtractNumbers(num1, num2){
    return num1 - num2;  // subtracts
};

function multiplyNumbers(num1, num2){
    return num1 * num2;  // multiplication
};

function divideNumbers(num1, num2){
    if (num2 === 0){
        return `Can\'t divide by zero.`;  // prevents dividing by zero
    }
    return num1 / num2;

};

console.log(`the Array is: ${threeInt}`)

const sumResult = findSum(threeInt);
console.log(`result of sum is: ${sumResult}`);

const subResult =  subtractNumbers(threeInt[0], threeInt[1]);
console.log(`result of the subtraction is: ${subResult}`);

const multiResult = multiplyNumbers(threeInt[2], threeInt[0]);
console.log(`result of multiplication is: ${multiResult}`);

const divResult = divideNumbers(sumResult, threeInt[2]);
console.log(`result of the divide is: ${divResult}`);
