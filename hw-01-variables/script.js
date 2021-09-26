let priceMarker = 15.678;
let priceNotebook = 123.965;
let priceInk = 90.2345;

const maxPrice = Math.max(priceMarker, priceNotebook, priceInk);
console.log(`Maximum price: ${maxPrice}`);

const minPrice = Math.min(priceMarker, priceNotebook, priceInk);
console.log(`Minimum price: ${minPrice}`);

const totalCost = priceMarker + priceNotebook + priceInk;
console.log(`Total cost: ${totalCost}`);

const roundedTotalCost = Math.floor(priceMarker) + Math.floor(priceNotebook) + Math.floor(priceInk);
console.log(`Rounded  total cost: ${roundedTotalCost}`);

const inHundredTotalCost = Math.round(totalCost/100) * 100;
console.log(`Total cost in hundred: ${inHundredTotalCost}`);

const isRoundedTotalCostEven = !(roundedTotalCost % 2);
console.log(`Rounded total cost is even: ${isRoundedTotalCostEven}`);

let paidMoney = 500;
const changeMoney = paidMoney - totalCost;
console.log(`Сhange money from ${paidMoney} UAH: ${changeMoney}`);

const averagePrice = +(totalCost / 3).toFixed(2);
console.log(`Average price: ${averagePrice}`);

let discount = Math.trunc(Math.random() * 100);
console.log(`Client lucky to have random discount: ${discount}%`);

const discountCost = +(discount * (totalCost/100)).toFixed(2);
const discountedCost = +(totalCost - discountCost).toFixed(2);
console.log(`Discounted cost: ${discountedCost}`);

const cost = +(totalCost/2).toFixed(2);
const netProfit = +(cost - discountCost).toFixed(2);
console.log(netProfit > 0 ? `Yeeah, net profit is: ${netProfit}` : `Oooh no, net profit is: ${netProfit}`);

document.writeln(
`<i><b>Максимальна ціна: ${maxPrice} <br>
Мінімальна ціна: ${minPrice} <br>
Вартість всіх товарів: ${totalCost} <br>
Округленна вартість всіх товарів: ${roundedTotalCost} <br>
Вартість товарів округлена до сотень: ${inHundredTotalCost} <br>
Округленна вартість всіх товарів парне число: ${isRoundedTotalCostEven} <br>
Сумa решти, при оплаті всіх товарів ${paidMoney} UAH: ${changeMoney} <br>
Cереднє значення цін: ${averagePrice} <br>
Випадкова знижка: ${discount}% <br>
Сума до оплати зі знижкою: ${discountedCost} <br>
Чистий прибуток: ${netProfit}</i></b>`
)