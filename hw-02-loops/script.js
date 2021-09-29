let n = '';
let m = '';

do{
  n = +prompt('Now you can calculate the sum of numbers between N and M.\n Enter first number N.');
} while (isNaN(n) || !Number.isInteger(n) || n === 0);

do{
  m= +prompt('Enter second number M.');
} while (isNaN(m) || !Number.isInteger(m) || m === 0);

let minNumber = Math.min(n, m);
let maxNumber = Math.max(n, m);

const skipEvenNumbers = confirm('Do you want to sum without even numbers?');
  
let sum = 0;

for (let i = minNumber; i <= maxNumber; i++) {
   if (skipEvenNumbers && i % 2 == 0) {
      continue;
   } 
   sum += i;
}

alert(`Sum from ${minNumber} to ${maxNumber} is ${sum}`);

