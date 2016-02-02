// CSGOClicker - Case CSGOClicker
//money, inventory, jackpot
var itemCounter = 0;
var fps = 1000 / 30;

var money = 200.00;
var currentCase = "case1";




/*=========================Inventory============================*/
//In inventory: weap skins
//Hidden: money


//sorting: by money, rarity
var popup = true;

var inventory = {};

var inventoryMax = 15;
var inventoryCurrent = 0;

var keyPrice = 2.50;

var casePrice = {
  case1: 5.00
};

var caseNames = {
  case1: "Weapon Case 1"
}

// cases
var cases = {
  case1: {
    milspec: {
      weap1: {
        name: "MP7 | Skulls",
        price: 0.78,
        img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957ODDZDFO_-O6nYeDg8j4MqnWkyUC7ZYp07iT94j3jVXsqkE-Y2qhJYKcJwA_aA7ZrFC6wLvqgcDt78ud1zI97Xw9NqWl"
      },
      weap2: {
        name: "AUG | Wings",
        price: 0.62,
        img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PXNcClK6c6lq4GekMj4OrzZglRd6dd2j6fEpNik0Vbh-RJvNz2nINTAJgM9Y1CG_lK2lL_q0cPtvJqbySAyuCQq-z-DyC4dac1H"
      },
      weap3: {
        name: "SG 553 | Ultraviolet",
        price: 0.78,
        img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppEl3rGSptmjigfn_0dqZTigdoDAdQ4_YV3XrlnoyOi-gpXv7p7OzyR9-n51Wu8Hu6Y"
      }
    },
    restricted: {
      weap1: {
        name: "Glock-18 | Dragon Tattoo",
        price: 4.95,
        img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dS9D69O4q4eHmPT_DLfYkWNF18lwmO7Eu4mh2lXj-RJtajjxJoWcIQ83Y13X-QO2ye_ojJ61u8yfynUwvXYq4XbD30vgIiQpgfY"
      },
      weap2: {
        name: "USP-S | Dark Water",
        price: 4.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q5qOleX1DL_QhGBu5Mx2gv3--Y3nj1H6qhc4ZGn6doTAIAA2YlDV-Qe3xO7n0cLqtc7Ly3djuXQlsCmPlhy1hAYMMLLPDZXOFA"
      },
      weap3: {
        name: "M4A1-S | Dark Water",
        price: 5.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-RkvXmMoTVl3la18l4jeHVyoD0mlOx5RVoa23wIo7EdgE2N12F-lPqwLzm0ZPpvpXIz3FmvnZ34n_YmhW01xtSLrs4m_P9LyY"
      }
    },
    classified: {
      weap1: {
        name: "AK-47 | Case Hardened",
        price: 28.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg8j4MqnWkyUIusYpjriToImhjQHg_EZkN2r0cY-RdAI3Z1jT-gS3kO_njZW_7pjB1zI97T2FIK3X"
      },
      weap2: {
        name: "Desert Eagle | Hypnotic",
        price: 11.78,
        img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTitH_si_k4-0m_7zO6_ummpD78A_0rzApNrw3FayqUs-YjqgIoWccVVvZAzQqVfqwr_u0JDpup3LynFhuT5iuyj9I0M0JQ"
      }
    },
    covert: {
      weap1: {
        name: "AWP | Lightning Strike",
        price: 48.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7P_BdjVW4tW4k7-KgOfLP7LWnn9u5MRjjeyPptuj2Qzt_0JsYDymJNDAIQ8-MA7U_1i3w-bphpO1v56bmHBk7yMksWGdwUJq4NI0lg"
      }
    },
    knife: {
      weap1: {
        name: "★ Gut Knife | Safari Mesh",
        price: 63.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLbUkmJE5fp9i_vG8MLx2QSy_BdpZmmlcoWVdQdvYV2G-1bvw-zv18O96MzByCA27nYrtyqPgVXp1t9T3ex9"
      }
    }
  }
};

/*===============STATISTICS===============*/
var totalMoneySpent = 0;
var totalCasesOpened = 0;
var totalBluesOpened = 0;
var totalPurplesOpened = 0;
var totalPinksOpened = 0;
var totalRedsOpened = 0;
var totalKnivesOpened = 0;


/*===============LOGIC===============*/


//cases -> case# -> rarity  -> weaponname, price, img
//cases -> case1 -> milspec -> weap1.name

//blues = 70%, purple = 20%, pink = 5%, red = 2.50%, knife = 0.50%

var rarityValue = {
  milspec: 0.75,
  restricted: 0.92,
  classified: 0.97,
  covert: 0.995,
};

function randSkin() {
     var skinsArray = [];
     var randSkin = "";
     var randNum = Math.random();
     var rarity = "";
     var identifier;

     if (randNum <= rarityValue.milspec) {
       rarity = "milspec";
     } else if (randNum >= rarityValue.milspec && randNum <= rarityValue.restricted) {
       rarity = "restricted";
     } else if (randNum >= rarityValue.restricted && randNum <= rarityValue.classified) {
       rarity = "classified";
     } else if (randNum >= rarityValue.classified && randNum <= rarityValue.covert) {
       rarity = "covert";
     } else {
       rarity = "knife";
     }

     function skinChoose(r) {
       console.log(r);
       skinsArray = Object.keys(cases[currentCase][r]);

       randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];

       identifier = cases[currentCase][r][randSkin];

       console.log(identifier.name);
       console.log(identifier.price);
       console.log(identifier.img);
       inventory["item" + itemCounter] = itemDisp(identifier.name, identifier.price, identifier.img);
       drawItem(inventory["item" + itemCounter]);

       if (popup) {
         modalDraw();
         $('.modalWindow').toggle();
       }

       inventoryCurrent += 1;
       itemCounter += 1;
     }

     function itemDisp(name, price, img) {
       var temp = [];

       temp.push(name, price, img);
       console.log(temp);
       return temp;
     }

     skinChoose(rarity);

}

function drawItem(array) {
    var name = array[0];
    var price = "$" + array[1];
    var img = array[2] + "/70fx70f";

    $(".inventoryContainer").append('<div class="inventoryItem" id="'+ 'item' + itemCounter +'"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
}

function modalDraw() {
  $("#modalImage").attr("src", inventory["item" + itemCounter][2] + "/360fx360f");
  $("#modalSkinName").html(inventory["item" + itemCounter][0]);
}

/*===============CLICKS===============*/

$(document).on("click", ".inventoryItem", function() {
  if (inventory[this.id]) {
    inventoryCurrent -= 1;
    money += inventory[this.id][1];
    delete inventory[this.id];
    $(this).remove();
  }
});


$("#case").click(function() {
  if (inventoryCurrent < inventoryMax) {
    if (money >= casePrice[currentCase] + keyPrice) {
      money -= casePrice[currentCase] + keyPrice;
      randSkin();
    }
  }
});

$("#inventoryButton").click(function() {
  if ($(".inventoryContainer").css('display') == 'none') {
    $(".upgradeContainer").toggle();
    $(".inventoryContainer").toggle();
  }
});

$("#unboxButton").click(function() {
  $('.modalWindow').toggle();
});

$("#acceptButton").click(function() {
  money += 0.15;
});

$("#upgradeButton").click(function() {
  if ($(".upgradeContainer").css('display') == 'none') {
    $(".upgradeContainer").toggle();
    $(".inventoryContainer").toggle();
  }
});

function caseInfo() {
  $('#caseName').html(caseNames[currentCase]);
  $('#casePrice').html("Case Price: $" + casePrice[currentCase].toFixed(2) + "  |");
  $('#keyPrice').html("Key Price: $" + keyPrice.toFixed(2));
}

function init() {
  caseInfo();
}

init();

function update() {
  $('#money').html("$" + money.toFixed(2));
  $('#inventorySpace').html(inventoryCurrent + "/" + inventoryMax);
}

/*===============TICKERS===============*/

setInterval(function() {
  update();
}, 1000 / fps);

setTimeout(function() {
  $("#notif").toggleClass("hidden");
  setTimeout(function() {
    $("#notif").toggleClass("hidden");
  }, 5000);
}, 1500);

/*===============CANVAS===============*/

/*
// "+1" popups
var canvas = document.getElementById("drawing");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - $('.right').width();
canvas.height = window.innerHeight;


var tt = [];
function makeToolTip(element, ) {

}
*/


/*
$("#case").click(function() {
  var randX = Math.floor(Math.random() * 240);
  var randY = Math.floor(Math.random() * 180);
  var text = "+ $" + moneyPC;
  var alpha = 1.0;
  var interval = setInterval(function () {
    ctx.save();
    canvas.width = canvas.width;
    ctx.fillStyle = "rgba(255, 0, 0, " + alpha + ")";
    ctx.font = "20px Georgia";
    ctx.fillText(text, randX, randY);
    alpha -= 0.05;
    if (alpha < 0) {
      canvas.width = canvas.width;
      clear(interval);

    }
    ctx.restore();
  }, 50);
});
*/


/*
var fps = 1000 / 60;
var degrees = 0;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - $('.right').width();
canvas.height = window.innerHeight;

function drawBackground() {
  var image = new Image();
  image.onload = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(degrees * Math.PI / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);
    ctx.restore();

    degrees += 0.1;
    setTimeout(drawBackground, fps);
    //requestFrameAnimation(drawBackground);
  }
   image.src = "images/sunburst.png";
}

function drawCase() {
  var image = new Image();
  image.onload = function() {
    ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.height / 2);
  }
  image.src = "images/case.png";
}

function drawOrder() {
  drawBackground();
}

drawOrder();
*/
