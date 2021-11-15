const interval = 50; //ms

async function getRandomChinese(length) {
  const time = length * interval;
  let chineseWord = '';

  for (let i = 0; i < length; i++) {
    const symbol = new Promise((resolve) => {
      setTimeout(() => {
        const sign = Date.now().toString().substr(-5);
        resolve(String.fromCharCode(sign));
      }, time)
    });
    chineseWord += await symbol;;
  }
  return chineseWord;
};

console.log(getRandomChinese(4));

