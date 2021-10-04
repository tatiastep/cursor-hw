//1
const getMaxDigit = (number) => {
   const digits = number.toString().split(''); 
   const maxDigit = Math.max(...digits);
   return maxDigit;
}

//2
const getExponentiation = (number, exponent) => {
   if (exponent === 0) {
      return 1;
   }
   let result = 1;
   for (let i = 1; i <= Math.abs(exponent); i++) {
      result *= number;
   }
   if (exponent > 0) {
      return result;
   }
   if (exponent < 0)
      return 1 / result;
}

//3
const getCapitalizedName = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();  
   
//4
const getSalaryAfterTax = (salary, tax = 19.5) => salary * (100 - 19.5) / 100;

//5
const getRandomNumber = (startNumber, endNumber) => Math.floor(startNumber + Math.random() * ((endNumber + 1) - startNumber));

//6
const countLetter = (letter, word) => {
   const countLetter = letter.toLowerCase();    
   const wordToCount = word.toLowerCase();        
   let counter = 0;
   for (let i = 0; i < wordToCount.length; i++) 
      if (countLetter === wordToCount.charAt(i)) {
         counter++;
      } 
      return counter;
}
 
//7
const convertCurrency = (money) => {
   let convertedSum = 0;
   const value = parseInt(money);
   if ((money.toUpperCase().trim()).endsWith('$')) {
      convertedSum = value * 25;
      return convertedSum + " грн."
   } else if ((money.toUpperCase().trim()).endsWith('UAH')) {
      convertedSum = value / 25;
      return convertedSum + "$"
   } else {
      return "Enter only UAH or $!"
   }
}

//8
const getRandomPassword = (number = 8) => isNaN(number) !== 0 ? Math.trunc(Math.random() * 10 ** (+number) ) : "Put number, please";

//9
const deleteLetters = (letter, sentence) => {
   const sentenseToChek = sentence.toLowerCase();
   const letterToDelete = letter.toLowerCase();
   const deleted = sentenseToChek.split(letterToDelete).join('');
   return deleted;     
}

//10
const isPalyndrom = (string) => {
   const stringInitial = string.trim().toLowerCase();
   const stringReverse = stringInitial.split('').reverse().join('');
   for (let i = 0; i < stringInitial.length; i++) {
      let result = stringInitial[i] === stringReverse[i];
      return result;
   }
}

document.writeln(`
Функція №1 - <i>getMaxDigit</i>(1736): ${getMaxDigit(1736)} </br>
Функція №2 - <i>getExponentiation</i>(2, -3): ${getExponentiation(2, -3)} </br>
Функція №3 - <i>getCapitalizedName</i>('вЛаД'): ${getCapitalizedName('вЛаД')} </br>
Функція №4 - <i>getSalaryAfterTax</i>(1000): ${getSalaryAfterTax(1000)} </br>
Функція №5 - <i>getRandomNumber</i>(3, 10): ${getRandomNumber(3, 10)} </br>
Функція №6 - <i>countLetter</i>('c', 'Асталавіста'): ${countLetter('с', 'Асталавіста')} </br>
Функція №7 - <i>convertCurrency</i>('100$'): ${convertCurrency('100$')} </br>
Функція №8 - <i>getRandomPassword</i>(): ${getRandomPassword()} </br>
Функція №9 - <i>deleteLetters</i>('а', 'Атлантида'): ${deleteLetters('а', 'Атлантида')} </br>
Функція №10 - <i>isPalyndrom</i>('Я несу гусеня'): ${isPalyndrom('Я несу гусеня')} </br>
`)