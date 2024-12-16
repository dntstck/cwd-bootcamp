function interestsFunc(){
const selectOpt = document.getElementById('interests');
const selectedOpt = selectOpt.value;

if (selectOpt.value === "error") {
    alert("Please select an interest.");
}
    else {
        window.open(selectedOpt);
    }
}

function clickPicture(){
    alert("Hey! :) ")
    console.log("picture clicked")
}