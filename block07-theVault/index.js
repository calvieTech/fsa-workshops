/**
 * 1. Declare a string variable containing a message for the user
 * 2. Assign three variables with the values of having performed an arithmetic calculation (must match the lock combo)
 * 3. Using string template literals, insert the values of the three variables inside the alert() function
 */

let userInput =
	"You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

let num1 = 5 + 5;
let num2 = 20 * 2;
let num3 = 40 - 1;

alert(`${userInput}\n ${num1} - ${num2} - ${num3}`);
