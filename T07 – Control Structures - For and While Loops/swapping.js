// Dru Delarosa | @dntstck

// user enters 3 digit value - done
// for loop swaps second and last digit - done
// output value - done

// finished - run tests


let userInput = document.getElementById('userinput');
let userOutput = document.getElementById('useroutput');
let qSwap = false; // set counter for if val swapped.


function swapVal(){
    let userVal = userInput.value.toString();
    let swapVal = '';

    if (userVal.length !== 3){
        userOutput.innerHTML = `invalid value. please input a 3 digit value`
        console.log('invalid value');        
    }

    else if (qSwap === true && userVal.length === 3){
        // value has been previously swapped so lets mix it up again
        for (let i = 0; i < userVal.length; i++){
            if (i === 0 ){
                swapVal += userVal[1];
            }
            else if (i === 1){
                swapVal += userVal[0];
            }
            else{
                swapVal += userVal[2];
            }
        }
        userOutput.innerHTML = `original value: ${userVal} swapped value: ${swapVal}`;
        console.log(`original value: ${userVal} swapped value: ${swapVal}`);
        qSwap = false; // revert t/f counter
    }
    else{

        for (let i = 0; i < userVal.length; i++){
            if (i === 0 ){
                swapVal += userVal[2];
            }
            else if (i === 1){
                swapVal += userVal[0];
            }
            else{
                swapVal += userVal[1];
            }
        }

        qSwap = true;
        userOutput.innerHTML = `original value: ${userVal} swapped value: ${swapVal}`;
        console.log(`original value: ${userVal} swapped value: ${swapVal}`);
    }
}