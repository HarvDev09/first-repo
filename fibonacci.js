const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuántos números de la serie Fibonacci deseas ver?: ', (n) => {
  n = parseInt(n);

  let num1 = 0;
  let num2 = 1;
  let suma = 0;

  console.log(num1);
  if (n > 1) console.log(num2);

  for (let i = 2; i < n; i++) {
    suma = num1 + num2;
    console.log(suma);
    num1 = num2;
    num2 = suma;
  }

  rl.close();
});

