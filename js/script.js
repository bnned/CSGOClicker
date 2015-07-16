var moneyPs = 0;
var moneyPsMultiplier = 1;
var money = 0;
var manualMultiplier = 0;
var fps = 30;
var manualTradeVis = false;

var items = {marketBot: 1000, autoBump: 5};

document.getElementById("trade").onclick = function() {
  manualTrade();
  manualTradeVisCheck();
}

document.getElementById("buyMarketBot").onclick = function() {
  if (money >= items.marketBot) {
    money -= items.marketBot;
    items.marketBot *= 1.1;
    items.marketBot = roundMoney(items.marketBot);
    moneyPs += 1;
    updateMoney();
  }
}

document.getElementById("buyAutoBump").onclick = function() {
  if (money >= items.autoBump) {
    money -= items.autoBump;
    items.autoBump *= 1.1;
    items.autoBump = roundMoney(items.autoBump);
    moneyPs += 0.1;
    updateMoney();
  }
}


function roundMoney(num) {
  return Math.ceil(num * 100) / 100;
}

function itemCheck() {
/*
  var marketBot = {
    name: "Market Bot",
    price: 1000,
    description: "Very basic marketbot that you found online for cheap."
  };

  var autoBump = {
    name:"Trade Auto Bumper",
    price: 5,
    description:"Now you can sleep while your trades bump."
  };
  */

  if (money >= items.marketBot) {
    document.getElementById("buyMarketBot").style.display = 'block';
  } else if (money < items.marketBot) {
    document.getElementById("buyMarketBot").style.display = 'none';
  }

  if (money >= items.autoBump) {
    document.getElementById("buyAutoBump").style.display = 'block';
  } else if (money < items.autoBump) {
    document.getElementById("buyAutoBump").style.display = 'none';
  }


}


/*==========================================================================
Manual Trade
================================================================= */

function manualTrade() {
  manualTradeVis = false;
  money += 1 + (1 * manualMultiplier);
  updateMoney();
}

function manualTradeVisCheck() {
  if (manualTradeVis === true) {
    document.getElementById("trade").style.display = 'block';
  } else if (manualTradeVis === false) {
    document.getElementById("trade").style.display = 'none';
  }
}

function foundTrade() {
  var prob = Math.random();
  if (prob >= 0.5) {
    manualTradeVis = true;
  }
}


/*==========================================================================

================================================================= */

function updatePrices() {
  document.getElementById("price01").innerHTML = "Cost: $" + items.autoBump.toFixed(2);
  document.getElementById("price02").innerHTML = "Cost: $" + items.marketBot.toFixed(2);
}



/*==========================================================================

================================================================= */

function updateMoney() {
  document.getElementById("moneyTotal").innerHTML = "$" + money.toFixed(2);
  document.getElementById("moneyPs").innerHTML = "$" + moneyPs.toFixed(2) + " /s";
}


function moneyGain() {
  money += (moneyPs * moneyPsMultiplier) / (1000 / fps);
}

setInterval(function() {
  itemCheck();
  updatePrices();
  moneyGain();
  updateMoney();
}, 1000 / fps);


setInterval( function() {
  foundTrade();
  manualTradeVisCheck();
}, 500);
