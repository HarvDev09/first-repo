//The factorial number that you want to obtain.
let n = 10;

//Variable to calculate the factorial.
let factorial = 1;

//Loop to calculate the factorial initialized to one because the factorial is only calculated with positive integers.
for(let i = 1; i <= n; i++){

factorial *= i;


}

//Printing the result to the console.
console.log(factorial);
