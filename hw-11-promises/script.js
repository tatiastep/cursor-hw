const interval = 50; //ms

async function getRandomChinese(length) {
  const time = length * interval;
  let result = '';
  try {
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
  } catch (err) {
    console.log("Error: " + err.message);
  }
};

getRandomChinese(4).then((data) => console.log(data));
