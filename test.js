/*
// 1. Define variables
const playerName = "Alex";  // This cannot change
let score = 100;            // This can change

console.log("Player: " + playerName);
console.log("Initial Score: " + score);

// 2. Update the score (This is allowed because it is 'let')
score = 200;
console.log("Updated Score: " + score);

// 3. Do some math
score = score + 50;
console.log("Final Score: " + score);



// 1. Number (Math works)
let price = 100;
let tax = 17;
let total = price + tax; 
console.log("Math Result: " + total); // Should be 117

// 2. String (Text just connects)
let priceText = "100";
let taxText = "17";
let totalText = priceText + taxText;
console.log("Text Result: " + totalText); // ???

// 3. Boolean (Logic)
let isTestingFun = true;
console.log("Is it fun? " + isTestingFun);

*/

// Game Stats
const myTeamScore = 3;
const opponentScore = 1;
const expectedWinner = "MyTeam";

console.log("--- Game Results ---");

// 1. Check if we scored more (Greater than)
let didWeWin = myTeamScore > opponentScore;
console.log("Did we win? " + didWeWin);

// 2. Check strict equality (Is 3 equal to 3?)
let isScoreThree = myTeamScore === 3;
console.log("Is score exactly 3? " + isScoreThree);

// 3. Negative check (Not equal)
let isDraw = myTeamScore !== opponentScore;
console.log("Is it NOT a draw? " + isDraw);

// 4. String comparison (Testing text)
let isCorrectWinner = expectedWinner === "MyTeam";
console.log("Is the winner correct? " + isCorrectWinner);

// 1. Double Equals (The "Lazy" Check)
// It ignores the type, so text "5" equals number 5
console.log("Lazy Check (==): " + ("5" == 5)); 

// 2. Triple Equals (The "Strict" Check)
// It checks type too, so text "5" is NOT number 5
console.log("Strict Check (===): " + ("5" === 5)); 

// Another crazy example
console.log("Empty text is 0? (==): " + ("" == 0));
console.log("Empty text is 0? (===): " + ("" === 0));

// 1. DEFINING the function (The Recipe)
// "name" is a placeholder (argument) for the data we will receive
function welcomeUser(name) {
    console.log("----------------");
    console.log("Hello, " + name + "!");
    console.log("Welcome to the system.");
    console.log("----------------");
}

// 2. CALLING the function (Using the Recipe)
// Now we can use it as many times as we want!

welcomeUser("Alex");
welcomeUser("Elina");
welcomeUser("Itai");


function calculateArea(width, height){
console.log("the area is: " + (width * height));
}

calculateArea(5,10)



function login(username, password){
if (username === "admin" && password === "1234"){
console.log ("login success");  
//const userPassMatch = true;
return true;
}
else {
console.log ("login failed");
return false;
}
}


login ("admin", "123");
