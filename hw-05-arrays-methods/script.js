// 1 - Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
const getRandomArray = (length, min, max) =>
   [...new Array(length)]
   .map(() => Math.round(Math.random() * (max - min + 1) + min));


// 2 - Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getModa = (...numbers) => {
   const intNumbers = numbers.filter(num => Number.isInteger(num));
   let mode = 0;
   let counter = 0;
   for (let i = 0; i < intNumbers.length; i++) {
      let matchCounter = 0;
      for (let j = 0; j < intNumbers.length; j++) {
         if (intNumbers[i] === intNumbers[j]) {
            matchCounter++;
         }
      }
      if (matchCounter > counter) {
         mode = intNumbers[i];
         counter = matchCounter;
      }
   }
   return mode;
};


// 3 - Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getAverage = (...numbers) => {
   const intNumbers = numbers.filter(num => Number.isInteger(num))
   const average = intNumbers.reduce((acc, num) => acc + num, 0) / intNumbers.length;
   return average;
};


// 4 - Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getMedian = (...numbers) => {
   const sortedNumbers = [...numbers].filter(num => Number.isInteger(num)).sort((a, b) => a - b);
   const length = sortedNumbers.length;
   const median = length % 2 === 0
      ? (sortedNumbers[length / 2 - 1] + sortedNumbers[length / 2]) / 2
      : sortedNumbers[Math.floor(length / 2)];
   return median;
};


// 5 - Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = (...numbers) => numbers.filter((num) => num % 2 !== 0);


// 6 - Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumbers = (...numbers) => {
   let counter = 0;
   numbers.forEach((num) => num > 0 ? counter += 1 : counter += 0);
   return counter;
};


// 7 - Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (...numbers) => numbers.filter(num => num % 5 === 0);


// 8 - Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
const replaceBadWords = (string) => {
   const badWords = ['shit', 'fuck', 'ass'];
   let words = string.split(' ');
   badWords.forEach(badWord =>
      words = words.map((word) => word.replace(badWord, '*' .repeat(badWord.length)))
      );
   return words.join(' ');
};

// 9 - Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
const divideByThree = (word) =>
   (word.length < 3)
   ? word
   : word.toLowerCase().trim().match(/.{1,3}/g);


const randomArray = getRandomArray(15, 1, 100);
const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
const mode = getModa(6, 2, 55, 55, 55, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
const median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
const evenNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6);
const positiveNumbers = countPositiveNumbers(1, -2, 3, -4, -5, 6);
const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
const replacedBadWords = replaceBadWords("Are you fucking kidding? Holy shit! Get your ass in my office!");
const dividedByThree = divideByThree("Commander");

console.log(randomArray);
console.log(average);
console.log(mode);
console.log(median);
console.log(evenNumbers);
console.log(positiveNumbers);
console.log(dividedByFive);
console.log(replacedBadWords);
console.log(dividedByThree);
