var money = 0;
var tradeMultiplier = 1;




function trade() {
    money = money + (1 * tradeMultiplier);

  return money;
}

function moneyUpdate() {
  document.getElementById("moneyTotal").innerHTML = "$" + money;
}

function buy() {
if (money >= 50) {
  tradeMultiplier = 2;
  return tradeMultiplier;
}
}
