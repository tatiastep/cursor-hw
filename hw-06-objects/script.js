const students = [{
      name: "Tanya",
      course: 3,
      subjects: {
         math: [4, 4, 3, 4],
         algorithms: [3, 3, 3, 4, 4, 4],
         data_science: [5, 5, 3, 4],
      },
   },
   {
      name: "Victor",
      course: 4,
      subjects: {
         physics: [5, 5, 5, 3],
         economics: [2, 3, 3, 3, 3, 5],
         geometry: [5, 5, 2, 3, 5],
      },
   },
   {
      name: "Anton",
      course: 2,
      subjects: {
         statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
         english: [5, 3],
         cosmology: [5, 5, 5, 5],
      },
   },
];

// 1 - Створіть функцію яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
const getSubjects = (student) =>
   Object
   .keys(student.subjects)
   .map((subject) =>
      subject
      .charAt(0).toUpperCase() + subject.slice(1).toLowerCase()
      .replace('_', " "));


// 2 - Створіть функцію яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. 
function getAverageMark(student) {
   const marksOfSubjects = Object.values(student.subjects);
   const allMarks = [].concat(...marksOfSubjects);
   const averageMark = (allMarks.reduce((total, mark) => total + mark, 0) / allMarks.length).toFixed(2);
   return averageMark;
};


// 3 - Створіть функцію яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
function getStudentInfo(student) {
   const {
      name,
      course
   } = student;
   const studentInfo = {
      course,
      name,
      averageMark: getAverageMark(student),
   };
   return studentInfo;
};


// 4 - Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
const getStudentsNames = (students) => students.map(student => student.name).sort();


// 5 - Створіть функцію яка повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = (students) => {
   const bestAverageOfStudents = Math.max(...students.map(student => getAverageMark(student)))
   let bestStudent = '';
   for (let i in students) {
      if (+getAverageMark(students[i]) === bestAverageOfStudents) {
         bestStudent = students[i].name;
      }
   }
   return bestStudent;
};


// Створіть функцію яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(word) {
   const letters = word.split('');
   const countedLetters = {};
   letters.forEach(letter => {
      if (!countedLetters[letter]) {
         countedLetters[letter] = 1;
      } else {
         countedLetters[letter] += 1;
      }
   });
   return countedLetters;
};

const subjectsOfStudent = getSubjects(students[0]);
const averageMark = getAverageMark(students[0]);
const studentInfo = getStudentInfo(students[0]);
const studentsNames = getStudentsNames(students);
const bestStudent = getBestStudent(students);
const calculatedLetters = calculateWordLetters("тест");

console.log(subjectsOfStudent);
console.log(averageMark);
console.log(studentInfo);
console.log(studentsNames);
console.log(bestStudent);
console.log(calculatedLetters);