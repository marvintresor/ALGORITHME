// This is a single-line comment

/*
   This is a multi-line comment.
   You can use it for longer explanations.
*/

// Declare variables or constants
let variableName = "Hello, World!";
const pi = 3.14;

// Define functions
function myFunction(parameter1, parameter2) {
    // Function logic goes here
    return parameter1 + parameter2;
}

// Event listener example
document.getElementById("myButton").addEventListener("click", function() {
    // Code to execute when the button is clicked
    console.log("Button clicked!");
});

// Conditional statements
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}

// Loops
for (let i = 0; i < 5; i++) {
    // Code to repeat multiple times
    console.log(i);
}

// Objects
let myObject = {
    key1: "value1",
    key2: "value2",
    method: function() {
        // Method logic goes here
    }
};

// Arrays
let myArray = [1, 2, 3, 4, 5];

// Asynchronous code example (using Promises)
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Asynchronous operation, e.g., fetching data from an API
        if (/* operation is successful */) {
            resolve(data);
        } else {
            reject("Error fetching data");
        }
    });
};

// Using async/await with Promises
async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// Your code can go here
