// Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір.Квадрати мають розташовуватись по 5 в ряд.
// Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

function generateBlocks() {
  const mainBlock = document.createElement('div');
  document.body.append(mainBlock);
  mainBlock.classList.add('main_block');

  function randomColor() {
    const randomRGB = () => Math.floor(Math.random() * 256);
    return 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const block = document.createElement('div');
      mainBlock.append(block);
      block.classList.add('block');
      block.style.backgroundColor = randomColor();
    }
  }
};

generateBlocks();


