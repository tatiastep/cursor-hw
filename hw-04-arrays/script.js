const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// №1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
const getPairs = (students) => {
   const male = students.filter(student => student[student.length - 1] !== 'а');
   const female = students.filter(student => student[student.length - 1] === 'а');
   const pairs = male.map((student, i) => [male[i], female[i]]);
   return pairs;
};

// №2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
const joinPairsWithThemes = (pairs, themes) => {
   const joinedPairs = pairs.map(student => student.join(' i '));
   const pairsWithThemes = joinedPairs.map((pair, i) => [pair, themes[i]]);
   return pairsWithThemes;
};

// №3 Зіставте оцінки (marks) зі студентом (students).
const addMarks = (students, marks) => students.map((student, i) => [student, marks[i]]);

// №4 Поставте кожній парі випадкову оцінку (від 1 до 5) за проєкт (тут функція буде не чистою, але не повинна мутувати масив)
const addRandomMarks = (pairsWithThemes, minMark = 1, maxMark = 5) => {
   const addMarks = pairsWithThemes.map((pairs) =>
      [...pairs, Math.floor(Math.random() * (maxMark - minMark + 1) + minMark)]);
   return addMarks;
};

const pairs = getPairs(students);
const pairsWithThemes = joinPairsWithThemes(pairs, themes);
const gradedStudents = addMarks(students, marks);
const gradedPairsWithThemes = addRandomMarks(pairsWithThemes);

console.log(`Arrays before:`);
console.log(students);
console.log(themes);
console.log(marks);

console.log(`Homework:`);
console.log(pairs);
console.log(pairsWithThemes);
console.log(gradedStudents);
console.log(gradedPairsWithThemes);