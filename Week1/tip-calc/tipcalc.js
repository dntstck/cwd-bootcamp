// Tip Calc v1


 function getInput(){
    console.log("tip calc")
    let billTotal = parseFloat(prompt("What's the bill?"));
    let totalPayee = parseInt(prompt("Shared by how many?"));
    let tipPct = parseFloat(prompt("What's the tip percentage?\n (0.5 = 5%, 0.10 = 10%, 0.25 = 25%)"));
    



    if (confirm("Correct?")){
        if (totalPayee === 1){  
            let tipTotal = (billTotal * tipPct);
            let maxTotal = (billTotal + tipTotal);
            console.log(maxTotal, tipTotal) // log this
        alert(`divided by ${totalPayee} people, the tip is ${tipTotal}.\n total amount to pay is ${maxTotal}`);
        }
        if (totalPayee > 1){
            let tipTotal = (billTotal * tipPct) / totalPayee;
            let maxTotal = (billTotal + tipTotal);
            console.log(billTotal, tipPct, tipTotal, maxTotal); // log this
            alert(`divided by ${totalPayee} people, the tip is ${tipTotal}. \n total amount to pay is ${maxTotal}`);
        }
    }
}

function runScript(){
    if (confirm("Run Tip Calculator?")){
        getInput();
    } else {
        null
    }
}

// v2

window.onload = () =>  // arrow function to call the function when btn is clicked
    {
        document.querySelector('#calc').onclick = runScript;
    }


