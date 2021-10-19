const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
   return parseFloat(this.tax * salary).toFixed(2);
};

function getMiddleTaxes() {
   return parseFloat(this.tax * this.middleSalary).toFixed(2);
};

function getTotalTaxes() {
   return parseFloat(this.tax * this.middleSalary * this.vacancies).toFixed(2);
};

function getMySalary(country) {
   setInterval(interval, 10000);
   function interval() {
      const mySalary = {};
      const minSalary = 1500;
      const maxSalary = 2000;

      mySalary.salary = parseFloat((Math.random() * (maxSalary - minSalary) + minSalary).toFixed(2));
      mySalary.taxes = parseFloat((country.tax * mySalary.salary).toFixed(2));
      mySalary.profit = parseFloat((mySalary.salary - mySalary.taxes).toFixed(2));

      return console.log(mySalary);
   }
};

console.log(`
1.Функція, яка рахує скільки податків ви заплатите як IT-спеціаліст:
в Україні з зарплати 15000.00 грн.: ${getMyTaxes.call(ukraine, 15000)} грн.
в Латвії з зарплати 15000.00 грн.: ${getMyTaxes.call(latvia, 15000)} грн.
в Литві з зарплати 15000.00 грн.:  ${getMyTaxes.call(litva, 15000)} грн.
`);

console.log(`
2.Функція, яка рахує скільки у середньому податків платять IT-спеціалісти: 
в Україні: ${getMiddleTaxes.call(ukraine)} грн.
в Латвії: ${getMiddleTaxes.call(latvia)} грн.
в Литві: ${getMiddleTaxes.call(litva)} грн.
`);

console.log(`
3.Функція, яка рахує, скільки всього податків платять IT-спеціалісти:
в Україні: ${getTotalTaxes.call(ukraine)} грн.
в Латвії: ${getTotalTaxes.call(latvia)} грн.
в Литві: ${getTotalTaxes.call(litva)} грн.
`);

console.log(`
4.Функція, яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
`);
getMySalary(ukraine)