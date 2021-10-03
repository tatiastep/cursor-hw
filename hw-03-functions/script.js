//1
const getMaxDigit = (number) => {
   let digits = number.toString().split(''); 
   let maxDigit = Math.max(...digits);
   return maxDigit;
}

//2
const getExponentiation = (number, exponent) => {
   let result = 1;
   for (let i = 1; i <= exponent; i++) {
      result *= number;
   }
   return result;
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
   let value = parseInt(money);
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
   let stringInitial = string.trim().toLowerCase();
   let stringReverse = stringInitial.split('').reverse().join('');
   for (let i = 0; i < stringInitial.length; i++) {
      let result = stringInitial[i] === stringReverse[i];
      return result;
   }
}

document.writeln(`
Функція №1 - <i>getMaxDigit(1736)</i> : ${getMaxDigit(1736)} </br>
Функція №2 - <i>getExponentiation(3, 3)</i> : ${getExponentiation(3, 3)} </br>
Функція №3 - <i>getCapitalizedName('вЛаД')</i> : ${getCapitalizedName('вЛаД')} </br>
Функція №4 - <i>getSalaryAfterTax(1000)</i> : ${getSalaryAfterTax(1000)} </br>
Функція №5 - <i>getRandomNumber(3, 10)</i> : ${getRandomNumber(3, 10)} </br>
Функція №6 - <i>countLetter('c', 'Асталавіста')</i> : ${countLetter('с', 'Асталавіста')} </br>
Функція №7 - <i>convertCurrency('100$')</i> : ${convertCurrency('100$')} </br>
Функція №8 - <i>getRandomPassword(6)</i> : ${getRandomPassword(6)} </br>
Функція №9 - <i>deleteLetters('а', 'Атлантида')</i> : ${deleteLetters('а', 'Атлантида')} </br>
Функція №10 - <i>isPalyndrom('Я несу гусеня')</i> : ${isPalyndrom('Я несу гусеня')} </br>
`)