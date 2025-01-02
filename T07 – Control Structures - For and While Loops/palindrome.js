// palindrome v2

// Dru Delarosa | @dntstck

let userInput = document.getElementById('userinput');
let userOutput = document.getElementById('useroutput');

function checkPalindrome() {
    let userString = userInput.value;
    const regex = /^[a-zA-Z]+$/;  // regex to check for string
    console.log(`input: ${userString}`);

    if (userString === "") {
        userOutput.innerHTML = `No input.`;
    } else if (!regex.test(userString)) {
        userOutput.innerHTML = `Must be a string. No digits or special characters.`;  // prevents numerical input.
        console.log(`error: user entered an incorrect value`);
        return
    } else {
        let isPalindrome = true;
        let strlen = userString.length;
        let i = 0;
        while (i < strlen / 2) {
            if (userString[i] !== userString[strlen - 1 - i]) {
                isPalindrome = false;
                break;
            }
            i++;
        }
        if (isPalindrome) {
            userOutput.innerHTML = `${userString} is a palindrome.`; 
            console.log(`${userString} is a palindrome.`); 
        } else {
            userOutput.innerHTML = `${userString} is not a palindrome.`; 
            console.log(`${userString} is not a palindrome.`);
        }
    }
}
