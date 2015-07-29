/*==========================================================================
Useful Functions
========================================================================= */

function get(dis) {
  return document.getElementById(dis);
}

function roundUp(num) {
  return Math.ceil(num * 100) / 100;
}

function round(amount) {
  return Math.round(amount);
}

/*==========================================================================
Game
========================================================================= */


var moneyPs = 0;
var moneyPsMultiplier = 1;
var money = 0;
var manualMultiplier = 0;
var fps = 30;

var itemPrice = {marketBot: 100, autoBump: 5};

var itemCount = {marketBot: 0, autoBump: 0};

get("trade").onclick = function() {
  manualTrade();
}

get("buyMarketBot").onclick = function() {
  if (money >= itemPrice.marketBot) {
    money -= itemPrice.marketBot;
    itemPrice.marketBot = roundUp(itemPrice.marketBot * 1.1);
    moneyPs += 1;
    itemCount.marketBot += 1;
    updateMoney();
  }
}

get("buyAutoBump").onclick = function() {
  if (money >= itemPrice.autoBump) {
    money -= itemPrice.autoBump;
    itemPrice.autoBump = roundUp(itemPrice.autoBump * 1.1);
    moneyPs += .01;
    itemCount.autoBump += 1;
    updateMoney();
  }
}





function itemCheck() {

  if ((itemCount.marketBot > 0) || (money >= itemPrice.marketBot)) {
    get("buyMarketBot").style.display = 'block';
  } else {
    get("buyMarketBot").style.display = 'none';
  }

  if ((itemCount.autoBump > 0) || (money >= itemPrice.autoBump)) {
    get("buyAutoBump").style.display = 'block';
  } else {
    get("buyAutoBump").style.display = 'none';
  }


}


/*==========================================================================
Manual Trade
========================================================================= */

function manualTrade() {
  money += 0.1 + (1 * manualMultiplier);
}

/*==========================================================================

========================================================================= */

function updatePrices() {
  get("price01").innerHTML = "Cost: $" + itemPrice.autoBump;
  get("price02").innerHTML = "Cost: $" + itemPrice.marketBot;
}

function updateItemAmount() {
  get("autoBumpCount").innerHTML = itemCount.autoBump;
  get("marketBotCount").innerHTML = itemCount.marketBot;
}

function updateCount() {

}


/*==========================================================================
Canvas
========================================================================= */

function drawCanvasMain() {
  var canvasMain = get("canvasMain");
  var ctx = canvasMain.getContext("2d");
  canvasMain.width = 500;
  canvasMain.height = 500;
  ctx.fillRect(50, 50, 100, 100);
}



/*==========================================================================

========================================================================= */

function updateMoney() {
  get("moneyTotal").innerHTML = "$" + money;
  get("moneyPs").innerHTML = "$" + moneyPs + " /s";
}



function moneyGain() {
  money += (moneyPs * moneyPsMultiplier) / (1000 / fps);
}

setInterval(function() {
  itemCheck();
  updatePrices();
  updateItemAmount();
  updateMoney();
  moneyGain();
}, 1000 / fps);



drawCanvasMain();
