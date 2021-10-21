'use strict';

class Student {
   constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = [5, 4, 4, 5];
   }

   getInfo() {
      return `Студент ${this.course}го курсу в ${this.university}, ${this.fullName}`;
   }

   get getMarks() {
      return this.marks;
   }

   set setMarks(mark) {
      return this.marks !== null
         ? this.marks.push(mark)
         : this.marks;
   }

   getAverageMark() {
      return this.marks !== null
         ? this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length
         : this.marks;
   }

   dismiss() {
      this.marks = null;
      return `Студент ${this.fullName} відрахований`;
   }

   recover() {
      this.marks = [];
      return `Студент ${this.fullName} поновлений`;
   }
};

const student = new Student('Харківський національний університет будівництва та архітектури', '2', 'Михайло Поліщук');


class BudgetStudent extends Student {
   scholarship = 1400;
   constructor(university, course, fullName) {
      super(university, course, fullName);
      this.marks = [];
      setInterval(() => {
         console.log(this.getScholarship());
      }, 30000);
   }
   getScholarship() {
      if (this.marks !== null && this.getAverageMark() >= 4) {
         return `Ви отримали ${this.scholarship} грн.стипендії`;
      } else {
         return `Ви не можете отримати стипендії`;
      }
   }

}

const budgetStudent = new BudgetStudent('Харківський національний університет радіоелектроніки', '1', 'Василь Бондар');

console.log(`
Student
Інформаця про студента: ${student.getInfo()}
Оцінки: ${student.getMarks}
Поставлено нову оцінку: ${student.setMarks = 5}
Оцінки: ${student.getMarks}
Середній бал: ${student.getAverageMark()}
${student.dismiss()}
Оцінки: ${student.getMarks}
Поставлено нову оцінку: ${student.setMarks = 2}
Оцінки: ${student.getMarks}
${student.recover()}
Оцінки: ${student.getMarks}
Поставлено нову оцінку: ${student.setMarks = 5}
Поставлено нову оцінку: ${student.setMarks = 4}
Оцінки: ${student.getMarks}
`);

console.log(`
BudgetStudent
Інформаця про студента: ${budgetStudent.getInfo()}
Оцінки: ${budgetStudent.getMarks}
${budgetStudent.fullName}, ${budgetStudent.getScholarship()}
Поставлено нову оцінку: ${budgetStudent.setMarks = 4}
Середній бал: ${budgetStudent.getAverageMark()}
${budgetStudent.fullName}, ${budgetStudent.getScholarship()}
Поставлено нову оцінку: ${budgetStudent.setMarks = 1}
Середній бал: ${budgetStudent.getAverageMark()}
${budgetStudent.fullName}, ${budgetStudent.getScholarship()}
${budgetStudent.dismiss()}
${budgetStudent.fullName}, ${budgetStudent.getScholarship()}

Студент ${budgetStudent.fullName} нижче можете отримати оновлені дані по стипендії через 30 секунд:
`);
