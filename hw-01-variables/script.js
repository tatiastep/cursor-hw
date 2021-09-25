document.write("<h2>Base</h2>")
let priceMarker = 15.678;
let priceNotebook = 123.965;
let priceInk = 90.2345;

const maxPrice = Math.max(priceMarker, priceNotebook, priceInk);
document.write("Maximum price: " + maxPrice + "<br>");

const minPrice = Math.min(priceMarker, priceNotebook, priceInk);
document.write("Minimum price: " + minPrice + "<br>");

const totalCost = priceMarker + priceNotebook + priceInk;
document.write("Total cost: " + totalCost + "<br>");

const roundedTotalCost = Math.floor(priceMarker) + Math.floor(priceNotebook) + Math.floor(priceInk);
document.write("Rounded  total cost: " + roundedTotalCost + "<br>");

const inHundredTotalCost = Math.round(totalCost/100) * 100;
document.write("Total cost in hundred: " + inHundredTotalCost + "<br>");

const isRoundedTotalCostEven = !(roundedTotalCost % 2);
document.write("Rounded total cost is even: " + isRoundedTotalCostEven + "<br>");

let paidMoney = 500;
const changeMoney = paidMoney - totalCost;
document.write("Сhange money from " + paidMoney + " UAH: " + changeMoney + "<br>");

const averagePrice = +(totalCost / 3).toFixed(2)
document.write("Average price: " + averagePrice + "<br>");

let discount = Math.trunc(Math.random() * 100);
document.write("Client lucky to have random discount: " + discount + " % <br>");

const discountCost = +(discount * (totalCost/100)).toFixed(2);
const discountedCost = +(totalCost - discountCost).toFixed(2);
document.write("Discounted cost: " + discountedCost + "<br>");

const cost = +(totalCost/2).toFixed(2);
const netProfit = +(cost - discountCost).toFixed(2);
if (netProfit > 0) {
   document.write("Yeeah, net profit is: " + netProfit + "<br>");
} else {
   document.write("Oooh no, net profit is: " + netProfit + "<br>");
}

document.write(`<h2>Advanced</h2>
<i><b>Максимальна ціна: ${maxPrice} <br>
Мінімальна ціна: ${minPrice} <br>
Вартість всіх товарів: ${totalCost} <br>
Округленна вартість всіх товарів: ${roundedTotalCost} <br>
Вартість товарів округлена до сотень: ${inHundredTotalCost} <br>
Округленна вартість всіх товарів парне число: ${isRoundedTotalCostEven} <br>
Сумa решти, при оплаті всіх товарів ${paidMoney} UAH: ${changeMoney} <br>
Cереднє значення цін: ${averagePrice} <br>
Випадкова знижка: ${discount}% <br>
Сума до оплати зі знижкою: ${discountedCost} <br>
чистий прибуток: ${netProfit}</i></b>`)