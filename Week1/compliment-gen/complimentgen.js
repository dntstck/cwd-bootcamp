// Compliment Generator JS
//
// let buttonClick = document.getElementById('clickgen').addEventListener('click',
//   function() {
//
//        alert('Here\'s a compliment you beautiful thing!');
//    });  // links a defined variable to the button with the id "clickgen"
//         // adds an event listener when button is clicked
//         // provides an alert to the user
//


// v2

const niceMessages = [
    "You're great at everything you do.",
    "Keep it up.",
    "Have a great day",
    "Here\'s a compliment you beautiful thing",
    "Another compliment? Oh go on then."
]

let currentMsg = 0;

let buttonClick = document.getElementById('clickgen').addEventListener('click',
    function newMsg(){
    alert(niceMessages[currentMsg]);

    currentMsg = (currentMsg + 1) % niceMessages.length;
});

