const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
   return this.tax * salary;
};

function getMiddleTaxes() {
   return this.tax * this.middleSalary;
};

function getTotalTaxes() {
   return this.tax * this.middleSalary * this.vacancies;
};

function getMySalary() {
   const mySalary = {};
   const minSalary = 1500;
   const maxSalary = 2000;

   mySalary.salary = Math.floor(Math.random() * (maxSalary - minSalary) + minSalary);
   mySalary.taxes = this.tax * mySalary.salary;
   mySalary.profit = mySalary.salary - mySalary.taxes;

   return mySalary;
};

const mySalaryLog = setInterval(() => console.log(getMySalary.call(litva)), 10000);
setTimeout(() => clearInterval(mySalaryLog), 100000);

console.log(`
1.Функція, яка рахує скільки податків ви заплатите як IT-спеціаліст:
в Україні з зарплати 15000 грн.: ${getMyTaxes.call(ukraine, 15000)} грн.
в Латвії з зарплати 15000 грн.: ${getMyTaxes.call(latvia, 15000)} грн.
в Литві з зарплати 15000 грн.:  ${getMyTaxes.call(litva, 15000)} грн.
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
