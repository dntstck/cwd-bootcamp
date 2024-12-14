// Compliment Generator JS

const niceMessages = [
    "You're great at everything you do.",
    "Keep it up.",
    "Have a great day",
    "Here\'s a compliment you beautiful thing",
    "Another compliment? Oh go on then."
];

function getInput(){
    let userName = prompt("Tell me your name: ");
    let userAge = parseInt(prompt("Whats your age?"));
    let userHobby = prompt("Favourite hobby?");
    let userAnimal = prompt("Favourite animal?")

    if (confirm("Correct?")){
        alert(`Hi ${userName}, you're ${userAge}. Your hobby is ${userHobby} & your favourite animal is ${userAnimal}`)
        console.log(`name: ${userName}\n age: ${userAge}\n hobby: ${userHobby}\n animal: ${userAnimal}\n`)
        alert(`PS: ${niceMessages[0]}`)
    }
}

function runScript(){
    if (confirm("Run script?")){
        getInput();
    } else {
        alert("Script aborted");
    }
}

runScript(); 