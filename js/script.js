// CSGOClicker - Case CSGOClicker
//money, inventory, jackpot
var itemCounter = 0;
var fps = 30;

var money = 7.50;
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

var caseDiscount = 0;
var keyDiscount = 0;

var operationCases = {
  case1: {name: "Weapon Case 1", price: 5.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT"},
  case2: {name: "Operation Phoenix Case", price: 0.06, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg"}
}

// cases
var cases = {
  case1: {
    milspec: {
      weap1: {
        name: "MP7 | Skulls",
        price: 0.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957ODDZDFO_-O6nYeDg8j4MqnWkyUC7ZYp07iT94j3jVXsqkE-Y2qhJYKcJwA_aA7ZrFC6wLvqgcDt78ud1zI97Xw9NqWl"
      },
      weap2: {
        name: "AUG | Wings",
        price: 0.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PXNcClK6c6lq4GekMj4OrzZglRd6dd2j6fEpNik0Vbh-RJvNz2nINTAJgM9Y1CG_lK2lL_q0cPtvJqbySAyuCQq-z-DyC4dac1H"
      },
      weap3: {
        name: "SG 553 | Ultraviolet",
        price: 0.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppEl3rGSptmjigfn_0dqZTigdoDAdQ4_YV3XrlnoyOi-gpXv7p7OzyR9-n51Wu8Hu6Y"
      }
    },
    restricted: {
      weap1: {
        name: "Glock-18 | Dragon Tattoo",
        price: 4.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dS9D69O4q4eHmPT_DLfYkWNF18lwmO7Eu4mh2lXj-RJtajjxJoWcIQ83Y13X-QO2ye_ojJ61u8yfynUwvXYq4XbD30vgIiQpgfY"
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
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTitH_si_k4-0m_7zO6_ummpD78A_0rzApNrw3FayqUs-YjqgIoWccVVvZAzQqVfqwr_u0JDpup3LynFhuT5iuyj9I0M0JQ"
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
  },
  case2: {
    milspec: {
      weap1: {
        name: "UMP-45 | Corporal",
        price: 0.09,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLbUkmJE5fp9i_vG8MKn3Qbj-UJrZWD6dYOVewQ5YVnR8lDtyO29jJLqvMvMyicxuyRz7HmIgVXp1kQqOE8Q"
      },
      weap2: {
        name: "Negev | Terrain",
        price: 0.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18l4jeHVyoD0mlOx5Uo_ZTr1I47HclM4MwvZ_ljtwejnjcC_6Zyan3Fq6XEl5irdzhGz0E1SLrs4EJsmc8Q"
      },
      weap3: {
        name: "Tec-9 | Sandstorm",
        price: 0.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTck29Y_chOhujT8om7jgaw_0RuNm7yJYeTIA4_MwqE81S7l-rtgJW_6p_MyHI27HQg7HmLlgv330__9v-fTw"
      },
      weap4: {
        name: "MAG-7 | Heaven Guard",
        price: 0.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj4OrzZglRd6dd2j6fE9Nyl2lG1qkI6amH3cYSSelA7aAnZ-VXtkOfvhJDqvJ7BnXJluyIi-z-DyFkJt659"
      }
    },
    restricted: {
      weap1: {
        name: "MAC-10 | Heat",
        price: 0.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLfYkWNF18lwmO7Eu9n031W2-RJuamvxcNSUcQY7aVyD-ALslO_qgcO_75XJzSM36XF35CvD30vgHA390Fw"
      },
      weap2: {
        name: "SG 553 | Pulse",
        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLPr7Vn35c18lwmO7Eu9Sh0Fbk_xE9Ym37LI7EJgY7Ml_ZqQK6lLi-18W76JybwXZluykqtnvD30vgXWzJUu8"
      },
      weap3: {
        name: "FAMAS | Sergeant",
        price: 0.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLPr7Vn35c18lwmO7Eu9Sh0Fbk_xE9Ym37LI7EJgY7Ml_ZqQK6lLi-18W76JybwXZluykqtnvD30vgXWzJUu8"
      },
      weap3: {
        name: "USP-S | Guardian",
        price: 0.64,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jxP77Wl2VF18l4jeHVyoD0mlOx5UdtZT_1JIHGIQNoMA2C_1PslO65h5Tpvc_AwXZmuiMr5CnZmhfm0hpSLrs4U9WKdHc"
      }
    },
    classified: {
      weap1: {
        name: "AK-47 | Redline",
        price: 4.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEm1Rd6dd2j6eQ9N2t2wK3-ENsZ23wcIKRdQE2NwyD_FK_kLq9gJDu7p_KyyRr7nNw-z-DyIFJbNUz"
      },
      weap2: {
        name: "P90 | Trigon",
        price: 2.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460mvLwOq7cqWdQ-sJ0xOvD8Iim21ftqhE-a2qlItCQcwY5aV6C-VS-lb_nh5C5us_LmnRis3Y8pSGK3Ot8Ex8"
      },
      weap3: {
        name: "Nova | Antique",
        price: 2.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0924gImagvLLP7LWnn9u5MRjjeyPpt-s2VHm-xE6ZWCnJdeTcQZvM1jV_1Dole68h8DtvZTPnXJhsnUm4WGdwUK2icMtfw"
      },
    },
    covert: {
      weap1: {
        name: "AWP | Asiimov",
        price: 31.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOzAot-jiQa3-hBqYzvzLdSVJlQ3NQvR-FfsxL3qh5e7vM6bzSA26Sg8pSGKJUPeNtY"
      },
      weap2: {
        name: "AUG | Chameleon",
        price: 2.24,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWdY781lteXA54vwxlWw-hduNW_xcIeRegc3YlmE8gS8wrvv1MS86s-dzSdk6yYj5HzYyRKpwUYb8NvXBjQ"
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

function beatboy() {
  money = 5000;
  inventoryMax = 200;
}

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
     var randNum = Math.random().toFixed(3); //rounded to 3 places to make it slightly easier to get certain rarities
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
       //console.log(r);
       skinsArray = Object.keys(cases[currentCase][r]);

       randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];

       identifier = cases[currentCase][r][randSkin];

       //console.log(identifier.name);
       //console.log(identifier.price);
       //console.log(identifier.img);
       inventory["item" + itemCounter] = itemDisp(identifier.name, identifier.price, identifier.img);
       drawItem(inventory["item" + itemCounter], rarity);

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
       //console.log(temp);
       return temp;
     }

     skinChoose(rarity);

}

function drawItem(array, rarity) {
    var name = array[0];
    var price = "$" + array[1].toFixed(2);
    var img = array[2] + "/70fx70f";

    $(".inventoryContainer").append('<div class="inventoryItem ' + rarity + '" id="'+ 'item' + itemCounter +'"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
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
    var price = (operationCases[currentCase]["price"] - caseDiscount) + (keyPrice - keyDiscount);
    if (price >= 0 && money >= price) {
      money -= price;
      randSkin();
    } else if (price < 0 && money >= price) {
      randSkin();
    }
  }
});



$("#unboxButton").click(function() {
  $('.modalWindow').toggle();
});

$("#acceptButton").click(function() {
  money += 0.15;
});

$("#caseTab").click(function() {
  if ($(".caseContainer").css('display') == 'none') {
    $(this).toggleClass("active");
    $("#upgradeTab").removeClass("active");
    $("#inventoryTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".inventoryContainer").hide();
    $(".caseContainer").show();
  }
});

$("#inventoryTab").click(function() {
  if ($(".inventoryContainer").css('display') == 'none') {
    $(this).toggleClass("active");
    $("#upgradeTab").removeClass("active");
    $("#caseTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".inventoryContainer").show();
    $(".caseContainer").hide();
  }
});

$("#upgradeTab").click(function() {
  if ($(".upgradeContainer").css('display') == 'none') {
    $(this).addClass("active");
    $("#caseTab").removeClass("active");
    $("#inventoryTab").removeClass("active");
    $(".upgradeContainer").show();
    $(".inventoryContainer").hide();
    $(".caseContainer").hide();
  }
});

$('.settings').click(function() {
  $('.settingsList').toggleClass("hidden");
});

$('#popupCheckbox').change(function() {
  if (this.checked) {
    popup = false;
  } else {
    popup = true;
  }
});

function caseInfo() {
  $('#caseDisplayImage').attr("src", operationCases[currentCase]["img"] + "/240fx182f");
  $('#caseName').html(operationCases[currentCase]["name"]);
  $('#casePrice').html("Case Price: $" + (operationCases[currentCase]["price"] - caseDiscount).toFixed(2) + "  |");
  $('#keyPrice').html("Key Price: $" + (keyPrice - keyDiscount).toFixed(2));
}



function update() {
  $('#money').html("$" + money.toFixed(2));
  $('#inventorySpace').html(inventoryCurrent + "/" + inventoryMax);
}

/*===============UPGRADES===============*/

$(document).on("click", ".upgrade", function() {
  var name = upgrades[this.id]["name"];
  var desc = upgrades[this.id]["desc"];
  var price = upgrades[this.id]["price"];
  var cp = upgrades[this.id]["cp"];
  var kp = upgrades[this.id]["kp"];
  var is = upgrades[this.id]["is"];
  var amount = upgrades[this.id]["amount"];
  var vis = upgrades[this.id]["vis"];

  if (money >= price) {
    money -= price;
    keyDiscount += kp;
    caseDiscount += cp;
    inventoryMax += is;
    amount += 1;
    visibility = 0;
    $(this).remove();
  }
  caseInfo();
});


var upgrades = {
  upgrade1: {name: "Beginner Package", desc: "2¢ off keys and cases. Oh, and one more inventory Spot.", price: 25, cp: 0.02, kp: 0.02, is: 1, amount: 0, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/150fx150f", vis: 1},
  upgrade2: {name: "Inventory Space", desc: "Inventory Space: +2", price: 45, cp: 0.00, kp: 0.00, is: 2, amount: 0, img: "https://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGAr7BMx-94b6MohOf-Xwsn7-USVDXgHhOG1zPDeLmsxwRtYpItIUb2wskZ6I0FWp9DdsKkOtQslw/100fx100f", vis: 1},
  upgrade3: {name: "Inventory Space II", desc: "Inventory Space: +5", price: 75, cp: 0.00, kp: 0.00, is: 5, amount: 0, img: "https://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGAr7BMx-94b6MohOf-Xwsn7-USVDXgHhOG1zPDeLmsxwRtYpItIUb2wskZ6I0FWp9DdsKkOtQslw/100fx100f", vis: 1}
};

function drawUpgrades() {
  for (var upgrade in upgrades) {
    if (upgrades.hasOwnProperty(upgrade)) {
    $(".upgradeContainer").append('<div class="upgrade" id="' + upgrade + '"> <div class="upgradePicture"> <img src="' + upgrades[upgrade]["img"] + '" id="upgradePicture"></div> <div class="upgradeInfo"> <div class="upgradeName">' + upgrades[upgrade]["name"] + '</div> <div class="upgradeDesc">' + upgrades[upgrade]["desc"] + '</div> <div class="upgradePrice">' + "$" + upgrades[upgrade]["price"] + '</div> </div> </div>');
    }
  }
}


function buyUpgrade(id) {
  var thisId = id;
  var name = upgrades[id]["name"];
  var desc = upgrades[id]["desc"];
  var price = upgrades[id]["price"];
  var cp = upgrades[id]["cp"];
  var kp = upgrades[id]["kp"];
  var is = upgrades[id]["is"];
  var amount = upgrades[id]["amount"];
  var vis = upgrades[id]["vis"]

  if (money >= price) {
    money -= price;
    keyDiscount += kp;
    caseDiscount += cp;
    inventoryMax += is;
    amount += 1;
    visibility = 0;
    $(thisId).remove();
    //console.log(id);
  }
  caseInfo();
}

/*===============CASES===============*/
function drawCases() {
  for (var crate in operationCases) {
    if (operationCases.hasOwnProperty(crate)) {
    $(".caseContainer").append('<div class="case" id="' + crate + '"> <div class="casePicture"> <img src="' + operationCases[crate]["img"] + '" id="casePicture"></div> <div class="caseInfo"> <div class="caseTitle">' + operationCases[crate]["name"] + '</div> <div class="caseValue">Value: ' + "$" + operationCases[crate]["price"].toFixed(2) + '</div> </div> </div>');
    }
  }
}

$(document).on('click', '.case', function() {
  currentCase = this.id;
  caseInfo();
});

/*===============VISUAL===============*/

function backgroundCheck() {
  $('.display').width($(window).width() - 575);
}

$(window).on('resize', function(){
    backgroundCheck();
});

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

function init() {
  caseInfo();
  backgroundCheck();
  drawCases()
  drawUpgrades()
}
init();
