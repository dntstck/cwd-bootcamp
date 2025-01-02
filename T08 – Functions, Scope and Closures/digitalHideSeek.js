// digitalHideSeek.js
// Dru Delarosa | @dntstck

let globalscope = "global string" // global variable. accessible anywhere
const myString = "My secret location is..."

function hide(secretlocation){
    const hideLocation = secretlocation;
    // ^ this variable is function scope because its defined in the function
    function seek(){
    return hideLocation; // < this function is hidden. it cannot be called by seek() outside of this block
    };
    let blockScopeVar = "string" // this var is block scoped, as it is inside the curled brackets.
    return seek;
};

const startGame = hide("The Linux Kernel");

console.log(myString + startGame());

// console.log(hideLocation)  // returns undefined in the console. i will comment it out for now and explain:

/* this is because of encapsulation and local scope.
 encapsulation protects code from being modified either illegally or unintentionally from outside the scope.
 it is locally scoped too, so its inaccessible from outside that function. */