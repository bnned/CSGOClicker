var moneyPs = 0;
var moneyPsMultiplier = 1;
var money = 0;
var manualMultiplier = 0;
var fps = 30;

document.getElementById("trade").onclick = manualTrade;
document.getElementById("buyMarketBot").onclick = function() {
  if (money >= 100) {
    money -= 100;
    moneyPs += 1;
    updateMoney();
  }
};

var items = [marketBot];

var marketBot = {
  name:"Market Bot",
  price:1000,
  description:"Very basic marketbot that you found online for cheap."
};

function itemCheck() {
  if (money >= 100) {
    document.getElementById("buyMarketBot").style.display = 'block';
  } else if (money < 100) {
    document.getElementById("buyMarketBot").style.display = 'none';
  }
}

function manualTrade() {
  money += 1 + (1 * manualMultiplier);
  updateMoney();
}

function moneyGain() {
  money += (moneyPs * moneyPsMultiplier) / (1000 / fps);
}

function updateMoney() {
  document.getElementById("moneyTotal").innerHTML = "$" + money.toFixed(2);
  document.getElementById("moneyPs").innerHTML = "$" + moneyPs.toFixed(2) + " /s";
}

setInterval(function() {
  itemCheck();
  moneyGain();
  updateMoney();
}, 1000 / fps);
