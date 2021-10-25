'use strict';

class Student {
   constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.allMarks = [5, 4, 4, 5];
      this.isDismissed = false;
   }

   getInfo() {
      return `Студент ${this.course}го курсу ВНЗ ${this.university} ${this.fullName}`;
   }

   get marks() {
      return this.isDismissed ? null : this.allMarks;
   }

   set marks(mark) {
      return this.isDismissed ? null : this.allMarks.push(mark);
   }

   getAverageMark() {
      return this.isDismissed
         ? null
         : this.allMarks.reduce((acc, mark) => acc + mark, 0) / this.allMarks.length;
   }

   dismiss() {
      this.isDismissed = true;
      return `Студент ${this.fullName} відрахований`;
   }

   recover() {
      this.isDismissed = false;
      return `Студент ${this.fullName} поновлений`;
   }
};

const student = new Student('Харківський національний університет будівництва та архітектури', '2', 'Михайло Поліщук');


class BudgetStudent extends Student {
   scholarship = 1400;
   constructor(university, course, fullName) {
      super(university, course, fullName);
      this.allMarks = [];
      this.isDismissed = false;
      setInterval(() => {
         console.log(this.getScholarship());
      }, 30000);
   }
   getScholarship() {
      if (!this.isDismissed && this.getAverageMark() >= 4) {
         return `Ви отримали ${this.scholarship} грн.стипендії`;
      } else {
         return `Ви не можете отримати стипендії`;
      }
   }
};

const budgetStudent = new BudgetStudent('Харківський національний університет радіоелектроніки', '1', 'Василь Бондар');

console.log(`
Student
Інформаця про студента: ${student.getInfo()}
Оцінки: ${student.marks}
Поставлено оцінку: ${student.marks = 5}
Оцінки: ${student.marks}
Середній бал: ${student.getAverageMark()}
${student.dismiss()}
Оцінки: ${student.marks}
Поставлено оцінку: ${student.marks = 2}
Оцінки: ${student.marks}
${student.recover()}
Оцінки: ${student.marks}
Поставлено оцінку: ${student.marks = 3}
Оцінки: ${student.marks}
`);

console.log(`
BudgetStudent
Інформаця про студента: ${budgetStudent.getInfo()}
Поставлено оцінку: ${budgetStudent.marks = 4}
Середній бал: ${budgetStudent.getAverageMark()}
${budgetStudent.fullName}, ${budgetStudent.getScholarship()}
Поставлено оцінку: ${budgetStudent.marks = 1}
Середній бал: ${budgetStudent.getAverageMark()}
${budgetStudent.fullName}, ${budgetStudent.getScholarship()}
${budgetStudent.dismiss()}
${budgetStudent.fullName}, ${budgetStudent.getScholarship()}
Нижче можете отримати оновлені дані по стипендії студента ${budgetStudent.fullName} через 30 секунд:
`);