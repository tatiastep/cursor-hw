const interval = 50; //ms

async function getRandomChinese(length) {
  const time = length * interval;
  let result = '';

  while (length) {
    const randomChinese = new Promise((resolve) => {
      setTimeout(() => {
        const sign = Date.now().toString().substr(-5);
        resolve(String.fromCharCode(sign));
      }, time)
    });
    result += await randomChinese;
    length--;
  }
  return result;
};

console.log(getRandomChinese(4));
