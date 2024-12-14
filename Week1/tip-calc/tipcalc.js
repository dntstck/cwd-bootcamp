// Tip Calc v1


 function getInput(){
    console.log("tip calc")
    let billTotal = parseFloat(prompt("Enter bill total: "));
    let totalPayee = parseInt(prompt("Shared by how many?"));
    let tipPct = parseFloat(prompt("What's the tip percentage?\n (0.5 = 5%, 0.10 = 10%, 0.25 = 25%)"));



    if (confirm("Correct?")){
        if (totalPayee === 1){  
            let tipTotal = (billTotal * tipPct);
            let maxTotal = (billTotal + tipTotal);
            tipTotal = tipTotal.toFixed(2); // enables correct use of decimal points when working with currency
            maxTotal = maxTotal.toFixed(2);
            console.log(maxTotal, tipTotal) // log this
            document.getElementById('maxtotal').innerText = maxTotal
            document.getElementById('total').innerText = tipTotal; //change html element
        alert(` £${billTotal} divided by 1 person, with a ${tipPct}% tip is £${tipTotal}.\n total amount to pay is £${maxTotal}`);}
        if (totalPayee > 1){
            let tipTotal = (billTotal * tipPct) / totalPayee;
            let maxTotal = (billTotal + tipTotal);
            let perPerson = (tipTotal / totalPayee);
            tipTotal = tipTotal.toFixed(2);
            maxTotal = maxTotal.toFixed(2);
            perPerson = perPerson.toFixed(2);
            console.log("bill: £", billTotal, "tip pct: " , tipPct, "tip: £", tipTotal, "total: £", maxTotal, "per person: £", perPerson);
            document.getElementById('maxtotal').innerText = maxTotal 
            document.getElementById('total').innerText = perPerson; // change element
            alert(`£${billTotal} divided by ${totalPayee} people, with a ${tipPct}% tip is: £${tipTotal}. \n total amount to pay is: £${maxTotal} \n the tip per person is: £${perPerson}`);
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


