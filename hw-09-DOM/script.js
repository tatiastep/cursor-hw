function generateBlocksInterval() {
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
      mainBlock.appendChild(block);
      block.classList.add('block');
      block.style.backgroundColor = randomColor();
    }
  }

  setInterval(() => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.style.backgroundColor = randomColor())
  }, 1000)
};

generateBlocksInterval();


