// CSGOClicker - Case CSGOClicker
//money, inventory, jackpot
var itemCounter = 0;
var fps = 15;

var money = 7.50;
var currentCase = "case2";




/*=========================Inventory============================*/
//In inventory: weap skins
//Hidden: money


//sorting: by money, rarity
var popup = true;

var inventory = {};
var jackpotInventory = {};

var inventoryMax = 250;
var inventoryCurrent = 0;

var keyPrice = 2.50;

var caseDiscount = 0;
var keyDiscount = 0;

var operationCases = {
  case1: {name: "Weapon Case 1", price: 5.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT"},
  case2: {name: "Operation Phoenix Case", price: 0.06, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg"}
}

var knives = {
  regular: {
    knife1: {name: "★ Bayonet", price: 141.56, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaKQZ53P3NZXMXvYmykdLSxqWkZ7-HkjMIvpIj3u2Y84733gzh_RU_MG_zIYLEdQ45fxiOrdJh0ExF"},
    knife2: {name: "★ Bayonet | Blue Steel", price: 128.62, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-GkvP9JrbummpD78A_37vEp4rz3w21_hBrNWD7dteSeg8_M1jSrFK5wrrr18Xpu5TAwHNmsj5iuyhFiVGqLA"},
    knife3: {name: "★ Bayonet | Boreal Forest", price: 89.78, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWdY781lteXA54vwxgCxqBE6Nzv0IIbBdQU6ZAuC-Vm6wu68hMe46MzIzCE26SQk7S3YzECpwUYbTEk7wBI"},
    knife4: {name: "★ Bayonet | Case Hardened", price: 134.99, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-GkvP9JrbummpD78A_j7DEoo2njFHl_kM5Zz_1I9OUI1dtYw3U_1nskOvuhMS7vM_AnXdr7z5iuyiOIPCcdg"},
    knife5: {name: "★ Bayonet | Crimson Web", price: 194.21, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4yCkP_gDLfQhGxUppwj3r-Rpd3zjAy38xFsMGn0I9LGcA49Zw2B_VO5wL_r1Ja-vJrMySB9-n51NRRkGyg"},
    knife6: {name: "★ Bayonet | Fade", price: 316.54, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gDLfQhGxUppBwib3Hod6n2ADnqUdkMW30cYKRdwVtMlrV-gK5yLi71JXpu5XBzHd9-n51Ga5qFJk"},
    knife7: {name: "★ Bayonet | Forest DDPAT", price: 87.77, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
    knife8: {name: "★ Bayonet | Night", price: 145.72, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-HnvD8J4Tdl3lW7Ysg2-uTpN2iiVLmrkM6YW3zJYeUcQY7aV3XqwO3wrvvhZ-96Z7Nzic3pGB8sk5ZbSKb"},
    knife9: {name: "★ Bayonet | Safari Mesh", price: 64.71, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj4OrzZglRd6dd2j6fHpY-kigPlrRduYmmhI4LHdgRqMw7X8lO7wuvqg8O77szAmHtq7iEn-z-DyIB9jWZF"},
    knife10: {name: "★ Bayonet | Scorched", price: 77.54, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0m_7zO6_ummpD78A_3-qXrNqnjAPtqUVpNjvxJIOWdQE-MFDY_Qfvkr-6jZ7uv5vInyE17z5iuyhdvxrhyA"},
    knife11: {name: "★ Bayonet | Slaughter", price: 276.21, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-HnvD8J4Tdl3lW7Ysj2LqVpdqh2wLm-UNoNmH0cdeQIVM9N1HZ_QXtx-fu0Z64uMnAyHRrpGB8stNTCQHv"},
    knife12: {name: "★ Bayonet | Stained", price: 104.88, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0m_7zO6_ummpD78A_3r-RrNWti1Dl8kc6ammlIoPEJ1U_YQuDqwTvyejrgcS4vpnKySQwuj5iuyhwZ4qAMQ"},
    knife13: {name: "★ Bayonet | Urban Masked", price: 94.19, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLfYkWNF18lwmO7Eu9SkiwCw-RJsZTrxcI7GcAE_MFqC_AXrxby8gZHqvM6bySZg7CMgtyrD30vgFNz3E8k"},
    knife14: {name: "★ Flip Knife", price: 69.08, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dzFL_JKzloaIx6ejYO6GzzlTucAj072W99-liQfm-hJsZGvyIdLEJw5tNA2E5BHgluDLhNCe"},
    knife15: {name: "★ Flip Knife | Blue Steel", price: 80.65, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j4OrzZglRd6dd2j6eVrNnwjlfi8kE6Nzr2IYeWcQdrZVjX_Fi5wOvt0Z-075TAyXBkuHMh-z-DyBuzAXuO"},
    knife16: {name: "★ Flip Knife | Boreal Forest", price: 62.77, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18l4jeHVyoD0mlOx5Rdoa277LIOUdwY5MF7U81O7krzuhJa8vM-fnSMxvyVxtCqPnEC3hktSLrs4hATUWUc"},
    knife17: {name: "★ Flip Knife | Case Hardened", price: 92.51, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j4OrzZglRd6dd2j6eQodmt0VDgrUBqZWrwJIKccg48ZQ7T_AS5l-nqh5e1uJrBnHAw63J2-z-DyM8HtRGF"},
    knife18: {name: "★ Flip Knife | Crimson Web", price: 152.21, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqPv9NLPFqWdQ-sJ0xOyR94_20VHlr0NsZzulcobEJAY5MAqD-VXvx-7m1pC6uZnByncw7yY8pSGKow-GEME"},
    knife19: {name: "★ Flip Knife | Fade", price: 198.77, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD7eOwlYSOqPv9NLPFqWdQ-sJ0xLGQpIqtjQy1rUE5Y2n1I4PGcgI5MFGD-wS3l-7r18TpucyanHpg6CE8pSGKbZ02GvY"},
    knife20: {name: "★ Flip Knife | Forest DDPAT", price: 60.79, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j4OrzZglRd6dd2j6eZrd7x2QXm-xZrNmz2LI-Tewc8YFHQ-AW4wOa71J687pXByHJm6SNz-z-DyNsSWDE9"},
    knife21: {name: "★ Flip Knife | Safari Mesh", price: 43.42, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTck29Y_chOhujT8om72VXkr0E4Z2r3J9CRIQ9tNArWq1S_lOrug8Xv7sjJwXVruyUl5XqOmQv330_24dUqqg"},
    knife22: {name: "★ Flip Knife | Scorched", price: 59.27, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLP7LWnn9u5MRjjeyP84jzjVHl-hdtYm37co6Udw48N1zT8gLowLi705e7uZrIziFku3EisGGdwUJi_yOknw"},
    knife23: {name: "★ Flip Knife | Slaughter", price: 162.55, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOskYKZlsj4OrzZglRd6dd2j6eUoNij31K2_UZoZGynLITGdgM8MwvZ_FC2wbruhZfq6snOnHVluykg-z-DyJrKkz-J"},
    knife24: {name: "★ Flip Knife | Stained", price: 65.38, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLP7LWnn9u5MRjjeyP8NX03gHj_RJlYWGiJYfDIQU5ZlmC-VG8l-y9g5C5v5Sdm3Bq6CUi5mGdwUJLmy-O2g"},
    knife25: {name: "★ Flip Knife | Urban Masked", price: 50.91, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWZU7Mxkh9bN9J7yjRrh_hduZT_ydYGccgRqM13Xq1Xolbrt1sC6vp_JzCBh7ygj53vfnR3kn1gSOdeWAw8q"},
    knife26: {name: "★ Gut Knife", price: 55.75, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dihWoo2ywdPbx6Cna--IwTtUsMBwjLuZodit2wXm_ERrZWHwctKTcQVvZlHOug_pU950d94"},
    knife27: {name: "★ Gut Knife | Blue Steel", price: 64.09, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPv9NLPFqWdQ-sJ0xLnEodz3igSx-BY-Zj2mJ9LAc1Q3Y13Y_1Lrwrvr0MW7uZifwCBlv3E8pSGKHolYdI0"},
    knife28: {name: "★ Gut Knife | Boreal Forest", price: 49.63, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5Mx2gv3--Y3nj1H6qUFkMm2gctSUcQJtNVCCr1TqkO3m056-6M_JnSRnuicn4njZmB3iiQYMMLJLcEs9NA"},
    knife29: {name: "★ Gut Knife | Case Hardened", price: 72.55, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO-Qod2i2wOy_EdpYW_7LIDBclI6aVHV-Fm_lOe-gJG5vpvKyHYwv3M8pSGKIGsDSZw"},
    knife30: {name: "★ Gut Knife | Crimson Web", price: 99.91, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0m_7zO6_ummpD78A_2LiW9Nuj0VGw-0JvYj2hJdKWI1NoZAnU-gPtyOzo0ZK4u52bm3Bh7j5iuyiVfFD71A"},
    knife31: {name: "★ Gut Knife | Fade", price: 111.98, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxD09q3kIW0m_7zO6_ummpD78A_3OyZrI-n2wPk_RY9NTrwINOSdQc9MlrW_gfqlbu9jJK4uJmYwCBlvT5iuyhGHAgcYg"},
    knife32: {name: "★ Gut Knife | Forest DDPAT", price: 49.82, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPv9NLPFqWdQ-sJ0xLGUoIqji1Xi-UVkZTr7coWTd1M7YVuE-Va3k-7o15LvuJyYwXRmsnE8pSGKxxB-nH8"},
    knife33: {name: "★ Gut Knife | Night", price: 71.38, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPv9NLPFqWdQ-sJ0xOzE9t73igDk_xJoYG-hItKSdlA_aAvX-AO2ybjohZW0vMybynM273U8pSGKrp7Yw2U"},
    knife34: {name: "★ Gut Knife | Safari Mesh", price: 41.23, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLfYkWNF18lwmO7Eu9nz3Qyw_ERrN271JYKdIFc-YlmC_1m5l7i5hMS87p7Nz3c3uHMm4X7D30vgVFLgw28"},
    knife35: {name: "★ Gut Knife | Scorched", price: 48.25, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj4OrzZglRd6dd2j6eXoNv0jgLg_RVpZ2_zJIadclQ7Ml2F_Vi_wu3rhJbp7pnOyntk7HQk-z-DyOfOL3QM"},
    knife36: {name: "★ Gut Knife | Slaughter", price: 87.38, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPv9NLPFqWdQ-sJ0xOqSotjz0FHj-hVvY2mmIIWQc1Q4aViC_FO6x7q-g5K56J6dnCNju3Q8pSGKFg_49QU"},
    knife37: {name: "★ Gut Knife | Stained", price: 58.29, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j4OrzZglRd6dd2j6eS89n32AHjqERtYz-gIIKVcVA7ZQzT81a3l-rnh8C5vZycm3Rq7ihw-z-DyB1e9elV"},
    knife38: {name: "★ Gut Knife | Urban Masked", price: 82.99, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXummJW4NFOhujT8om73wWy_0ttYmH7LICVcFI9M1zYrFK7lO7shcTov5ScmiAw63Mls33fygv330-gpCcFhQ"},
    knife39: {name: "★ Karambit", price: 235.14, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3ejxQ7dG0nZTFz_WgaurTwzMA6ZFz0-qW99mn0Qzk_EJoYWylJtSXe1c9aAnSq1C8l_Cv28F7-X3KYA"},
    knife40: {name: "★ Karambit | Blue Steel", price: 242.57, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_um25V4dB8teXA54vwxgLmqhFtYT-nIYecJgI3Z1DZ_FfqyLvqhpK-tJSbnSY2vSBx43eLn0epwUYbMQqd_ig"},
    knife41: {name: "★ Karambit | Boreal Forest", price: 169.55, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7Nnf7dtOce1Q3M13T-Fa7xejs0MXt753AnXJruiMn7C6LnBC1h0tIO-1um7XAHtmw6SCz"},
    knife42: {name: "★ Karambit | Case Hardened", price: 262.32, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_ummJW4NFOhujT8om73Qay8kFuaj3xLYCVJAM7ZF-B8li9kOfm1sW6u5SfyHNru3Im7SvUlwv330-EAAozoQ"},
    knife43: {name: "★ Karambit | Crimson Web", price: 290.66, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITck29Y_chOhujT8om7iwLn_Ec4NWrwdoDDIFNtZlHT-QW6xOzmgZ_t6pTNznUyvnQg7Crclwv330__CL9_dg"},
    knife44: {name: "★ Karambit | Fade", price: 423.98, img: "http://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhscxbDDKJXSMo79TfqCCM318tqU9-iyLcHO1u6qtHPMrYkMIxLGsOBDqWEMFqu7x5sgvRZKsHY9iLu2HvvbmpbCRbrqGwa2LjQGA46XOw"},
    knife45: {name: "★ Karambit | Forest DDPAT", price: 156.76, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_ummJW4NFOhujT8om73Fex-BdsN2z6I9eUdg4_Nw7UqQXtyLu81p7vvZrIznZr7iQr53fenQv3309FzuO8KA"},
    knife46: {name: "★ Karambit | Night", price: 202.01, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8teXA54vwxgbtrRVqNm_xJdKXcQVqMg7W_lDtl7vq1pe4753KynJqsnZ25n_alxapwUYbStGwX0o"},
    knife47: {name: "★ Karambit | Safari Mesh", price: 130.10, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6qkE4Zzqgco-cdwJsaF3XqVm_yL-70JG-7ZyamycyvXNz5SndzkG21wYMMLI7nV07EA"},
    knife48: {name: "★ Karambit | Scorched", price: 123.80, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRrm_UdrNW77cdKWdAY7Z1DRrlG9yey80JO7ucudyXY3uXIlt3uMzRe1n1gSOZd2wXJa"},
    knife49: {name: "★ Karambit | Slaughter", price: 392.98, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2IbrummJW4NFOhujT8om70Azg_kQ6MTygdYKXJw9qMlnX_Fa3ye28gpC-vZSdynYxviZztyncmwv330_7Rx0jNA"},
    knife50: {name: "★ Karambit | Stained", price: 219.07, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWdY781lteXA54vwxgHg8xVtYj_7LNXBIw9qZgyE-Fi_xLy7gJXovZqcynNq7iIqtHndykGpwUYbOEO3hhM"},
    knife51: {name: "★ Karambit | Urban Masked", price: 152.99, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp9g-7J4bP5iUazrl04YG-nJdXDegc2Y1uBrlG6x-2-gZTq6p6YwSZq6CFzsynZlhS30B9PcKUx0vKbTggh"},
    knife52: {name: "★ M9 Bayonet", price: 159.66, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3fGR97t2vm46Og7mlMu6ExzsI7ZVy0rGWrN7w3VDh_RY9Y22nd4fDdAE4NFzUrFjqlL3tm9bi6x2aUKuH"},
    knife53: {name: "★ M9 Bayonet | Blue Steel", price: 180.07, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRd4cJ5ntbN9J7yjRq3rUI5Mjz2dobBdgRtYQvS_FTrlOno1MLo78nIy3Jk73Jz4i7VzhHln1gSOQ4y0ztq"},
    knife54: {name: "★ M9 Bayonet | Boreal Forest", price: 95.33, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoD8j1yglB89IT6mOoaSdlc5MFHWq1m5xL_qgsO67cnIzydr6yYl7X3ZmkO1gk1LOuFp16eACQLJZSfpy04"},
    knife55: {name: "★ M9 Bayonet | Case Hardened", price: 168.24, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRd4cJ5ntbN9J7yjRrj_hE6NjqlLNOccgE9MljVqAC8wOzqhJ60tc_BnXZqsigrs3bdmRO-n1gSObDaDdZj"},
    knife56: {name: "★ M9 Bayonet | Crimson Web", price: 187.66, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWZU7Mxkh9bN9J7yjRqwrxVvMGDyI9KSdgQ-Z1HV_VfsyLu-hZe1tMzJnHFgv3IitHmLzhO0n1gSOc4nk3bB"},
    knife57: {name: "★ M9 Bayonet | Fade", price: 361.49, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lteXA54vwxgLi-0FrNWqiI4CWIw5sYQnY81m3xLjs18LouZjNwXc3uCF27SuOy0SpwUYbghNKfR8"},
    knife58: {name: "★ M9 Bayonet | Forest DDPAT", price: 79.83, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRc7cF4n-T--Y3nj1H6_0RtYD32IY_BIwY4aA3R-VLrxue90Ja_tZ6fmHpn7CNwtCuPzBzhiQYMMLJQizr10Q"},
    knife59: {name: "★ M9 Bayonet | Night", price: 182.58, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRd4cJ5ntbN9J7yjRrhqhA-MTygIILEcwRvYgzVr1S9yefv1pHtvsjMwSMy7CghtCrflxK2n1gSORdzljmC"},
    knife60: {name: "★ M9 Bayonet | Safari Mesh", price: 87.65, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp9g-7J4bP5iUazrl1tY2H6ItWSIQU-Y1DX_Vjsx-jnjZ657Z_LwCdm6HEl4nzbnBLlhxEfcKUx0rp-zgq-"},
    knife61: {name: "★ M9 Bayonet | Scorched", price: 97.36, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5Mx2gv3--Y3nj1H6qUttYz-mcoKTdg83Z1HX_FG4l7jt1pG8vZ7AwXJm6HVw4nfZzBDm1AYMMLItqjyW3w"},
    knife62: {name: "★ M9 Bayonet | Slaughter", price: 342.88, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rd4cJ5ntbN9J7yjRrh-BVlZW3ydoTHdABsZ13Y_Qe5xue6gMC-vp-amntr6yQq4XfUzhTin1gSOZHog2Kf"},
    knife63: {name: "★ M9 Bayonet | Stained", price: 122.12, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5Mx2gv3--Y3nj1H6rkdsajvyLIKQcAY9YQ7Trwfvxe_ugp7uuJ7AzHdl7iZ05XnayUSygwYMMLKw8Vd9_Q"},
    knife64: {name: "★ M9 Bayonet | Urban Masked", price: 80.60, img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teTE8YXghWu4qgE7Nnf7cYCXcA9tZ1DZ_QO3x-7sjZS7ucidwSM26XZ07HbczRO_hxoZPeA8m7XAHsJxu2aY"}
  },
  chroma: {},
  huntsman: {},
  butterfly: {},
  shadow: {},
  falchion: {},
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
       if (r === "knife") {
         var knifeCase = "";
         if (currentCase === "c") {
           knifeCase = "chroma";
         } else if (currentCase === "sds") {
           knifeCase = "huntsman";
         } else if (currentCase === "sds") {
           knifeCase = "butterfly";
         } else if (currentCase === "sds") {
           knifeCase = "shadow";
         } else if (currentCase === "sds") {
           knifeCase = "falchion";
         } else {
           knifeCase = "regular";
         }

         skinsArray = Object.keys(knives[knifeCase]);

         randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];

         identifier = knives["regular"][randSkin];

         //console.log(identifier.name);
         //console.log(identifier.price);
         //console.log(identifier.img);
         var toEncode = "knives['" + knifeCase + "']" + "['" + randSkin + "']";
         inventory["item" + itemCounter] = window.btoa(toEncode);

         drawItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);

         if (popup) {
           modalDraw(identifier.name, identifier.img);
           $('.modalWindow').toggle();
         }

       } else {
         //console.log(r);
         skinsArray = Object.keys(cases[currentCase][r]);

         randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];

         identifier = cases[currentCase][r][randSkin];

         //console.log(identifier.name);
         //console.log(identifier.price);
         //console.log(identifier.img);
         var toEncode = "cases['" + currentCase + "']" + "['" + r + "']" + "['" + randSkin + "']";
         //console.log(toEncode);
         inventory["item" + itemCounter] = window.btoa(toEncode);
         //console.log(cases[currentCase][r][randSkin]);

         drawItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);

         if (popup) {
           modalDraw(identifier.name, identifier.img);
           $('.modalWindow').toggle();
         }


       }

       inventoryCurrent += 1;
       itemCounter += 1;
     }

     skinChoose(rarity);

}

function itemDisp(name, price, img) {
  var temp = [];

  temp.push(name, price, img);
  //console.log(temp);
  return temp;
}

function drawItem(array, rarity) {
    var name = array[0];
    var price = "$" + array[1].toFixed(2);
    var img = array[2] + "/70fx70f";

    $(".inventoryContainer").append('<div class="inventoryItem ' + rarity + '" id="'+ 'item' + itemCounter +'"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
}

function inventoryClear() {
  inventory = {};
  $('.inventoryContainer').html("");
}

function drawInventory() {
  // I know this is cancer dont hate please
  var keys = Object.keys(inventory);

  for (var i = 0; i < keys.length; i++) {
    var rarity = atob(inventory[keys[i]]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
    if (rarity === "regular") {
      rarity = "knife";
    }
    var item = eval(atob(inventory[keys[i]]));
    var name = item["name"];
    var price = "$" + item["price"].toFixed(2);
    var img = item["img"] + "/70fx70f";

    $(".inventoryContainer").append('<div class="inventoryItem ' + rarity + '" id="'+ keys[i] +'"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
  }
}




/*===============CLICKS===============*/

$(".inventoryContainer").on("click", ".inventoryItem", function() {
  if (inventory[this.id]) {
    var item = eval(atob(inventory[this.id]));
    //console.log(item);
    inventoryCurrent -= 1;
    money += (item['price']);
    //console.log(item['price']);
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

/*===============TABS===============*/

$("#caseTab").click(function() {
  if ($(".caseContainer").css('display') == 'none') {
    $(this).toggleClass("active");
    $("#jackpotTab").removeClass("active");
    $("#upgradeTab").removeClass("active");
    $("#inventoryTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".jackpotRightContainer").hide();
    $(".inventoryContainer").hide();
    $(".caseContainer").show();
    if ($(".unboxing").css('display') !== 'block') {
      $(".unboxing").show();
      $(".jackpot").hide();
    }
  }
});

$("#inventoryTab").click(function() {
  if ($(".inventoryContainer").css('display') == 'none') {
    $(this).toggleClass("active");
    $("#jackpotTab").removeClass("active");
    $("#upgradeTab").removeClass("active");
    $("#caseTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".jackpotRightContainer").hide();
    $(".inventoryContainer").show();
    $(".caseContainer").hide();
    if ($(".unboxing").css('display') !== 'block') {
      $(".unboxing").show();
      $(".jackpot").hide();
    }
  }
});

$("#upgradeTab").click(function() {
  if ($(".upgradeContainer").css('display') == 'none') {
    $(this).addClass("active");
    $("#jackpotTab").removeClass("active");
    $("#caseTab").removeClass("active");
    $("#inventoryTab").removeClass("active");
    $(".upgradeContainer").show();
    $(".jackpotRightContainer").hide();
    $(".inventoryContainer").hide();
    $(".caseContainer").hide();
    if ($(".unboxing").css('display') !== 'block') {
      $(".unboxing").show();
      $(".jackpot").hide();
    }
  }
});

$("#jackpotTab").click(function() {
  if (jackpotUnlocked) {
    if ($(".jackpotRightContainer").css('display') == 'none') {
      drawSwapInventory();
      $(this).addClass("active");
      $("#upgradeTab").removeClass("active");
      $("#caseTab").removeClass("active");
      $("#inventoryTab").removeClass("active");
      $(".upgradeContainer").hide();
      $(".jackpotRightContainer").show();
      $(".inventoryContainer").hide();
      $(".caseContainer").hide();

      if ($(".unboxing").css('display') == 'block') {
        $(".unboxing").hide();
        $(".jackpot").show();
      }
    }
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

$(".clearGameState").click(function() {
  clearGameState();
});

/*===============DOM MANIP===============*/

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

function modalDraw(name, img) {
  $("#modalImage").attr("src", img + "/360fx360f");
  $("#modalSkinName").html(name);
}

/*===============UPGRADES===============*/

$(".upgradeContainer").on("click", ".upgrade", function() {
  var name = upgrades[this.id]["name"];
  var desc = upgrades[this.id]["desc"];
  var price = upgrades[this.id]["price"];
  var cp = upgrades[this.id]["cp"];
  var kp = upgrades[this.id]["kp"];
  var is = upgrades[this.id]["is"];

  if (money >= price) {
    money -= price;
    keyDiscount += kp;
    caseDiscount += cp;
    inventoryMax += is;
    upgradesPurchased.push(this.id);
    $(this).remove();
  }
  caseInfo();
});


var upgrades = {
  upgrade1: {name: "Beginner Package", desc: "2¢ off keys and cases. Oh, and one more inventory Spot.", price: 25, cp: 0.02, kp: 0.02, is: 1, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/150fx150f"},
  upgrade2: {name: "Inventory Space", desc: "Inventory Space: +2", price: 45, cp: 0.00, kp: 0.00, is: 2, img: "https://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGAr7BMx-94b6MohOf-Xwsn7-USVDXgHhOG1zPDeLmsxwRtYpItIUb2wskZ6I0FWp9DdsKkOtQslw/100fx100f"},
  upgrade3: {name: "Inventory Space II", desc: "Inventory Space: +5", price: 75, cp: 0.00, kp: 0.00, is: 5, img: "https://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGAr7BMx-94b6MohOf-Xwsn7-USVDXgHhOG1zPDeLmsxwRtYpItIUb2wskZ6I0FWp9DdsKkOtQslw/100fx100f"},
  upgrade4: {name: "Inventory Space II", desc: "Inventory Space: +5", price: 75, cp: 0.00, kp: 0.00, is: 5, img: "https://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGAr7BMx-94b6MohOf-Xwsn7-USVDXgHhOG1zPDeLmsxwRtYpItIUb2wskZ6I0FWp9DdsKkOtQslw/100fx100f"}
};

var upgradesPurchased = [];

function drawUpgrades() {
  if (upgradesPurchased.length) {
    //console.log("full");
    for (var upgrade in upgrades) {
      if (upgrades.hasOwnProperty(upgrade)) {
        //console.log(upgrade);
        if (upgradesPurchased.indexOf(upgrade) < 0) {
          $(".upgradeContainer").append('<div class="upgrade" id="' + upgrade + '"> <div class="upgradePicture"> <img src="' + upgrades[upgrade]["img"] + '" id="upgradePicture"></div> <div class="upgradeInfo"> <div class="upgradeName">' + upgrades[upgrade]["name"] + '</div> <div class="upgradeDesc">' + upgrades[upgrade]["desc"] + '</div> <div class="upgradePrice">' + "$" + upgrades[upgrade]["price"] + '</div> </div> </div>');
        } else {
          buyUpgrade(upgrade);
        }
      }
    }
  } else {
    //console.log("empty");
    for (var upgrade in upgrades) {
      if (upgrades.hasOwnProperty(upgrade)) {
        $(".upgradeContainer").append('<div class="upgrade" id="' + upgrade + '"> <div class="upgradePicture"> <img src="' + upgrades[upgrade]["img"] + '" id="upgradePicture"></div> <div class="upgradeInfo"> <div class="upgradeName">' + upgrades[upgrade]["name"] + '</div> <div class="upgradeDesc">' + upgrades[upgrade]["desc"] + '</div> <div class="upgradePrice">' + "$" + upgrades[upgrade]["price"] + '</div> </div> </div>');
      }
    }
  }

}


function buyUpgrade(id) {
  var cp = upgrades[id]["cp"];
  var kp = upgrades[id]["kp"];
  var is = upgrades[id]["is"];

  keyDiscount += kp;
  caseDiscount += cp;
  inventoryMax += is;

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

$(".caseContainer").on('click', '.case', function() {
  currentCase = this.id;
  caseInfo();
});


/*===============JACKPOT===============*/
var jackpotUnlocked = true;
var swapSkins = 0;
var maxSwapSkins = 6;
var swapSkinsValue = 0;
var jackpotSelectedInventory = {};

$(".jackpotRightPlayer").on("click", ".inventorySwapItem", function() {
  if (Object.keys(jackpotInventory).length < maxSwapSkins) {
    if (inventory[this.id]) {
      var item = eval(atob(inventory[this.id]));
      //console.log(item);
      jackpotInventory[this.id] = inventory[this.id];
      drawSwappedItem(item.name, item.price, item.img, this.id);
      swapSkins += 1;
      swapSkinsValue += item.price;
      updateSwapInfo();
      //delete inventory[this.id];
      $(this).remove();
    }
  }
});

$(".jackpotRightToBet").on("click", ".swappedItem", function() {
  if (inventoryCurrent <= inventoryMax) {
    if (jackpotInventory[this.id]) {
      var item = eval(atob(jackpotInventory[this.id]));
      console.log(item);
      inventory[this.id] = jackpotInventory[this.id];
      drawJackpotSwapItem(item.name, item.price, item.img, this.id);
      swapSkins -= 1;
      swapSkinsValue -= item.price;
      updateSwapInfo();
      delete jackpotInventory[this.id];
      $(this).remove();
    }
  }
});

$(".jackpotRightStartButton").click(function() {
  if (Object.keys(jackpotInventory).length <= maxSwapSkins && swapSkins > 0) {
    $(".depositorContainer").html("");
    inventoryCurrent -= Object.keys(jackpotInventory).length;
    jackpotStart();
  }
});

function drawJackpotSwapItem(name, price, img, id) {
      var keys = Object.keys(inventory);
      var rarity = atob(inventory[id]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
      if (rarity === "regular") {
        rarity = "knife";
      }

      var name = name;
      var price = "$" + price.toFixed(2);
      var img = img + "/70fx70f";

      $(".jackpotRightPlayer").append('<div class="inventorySwapItem ' + rarity + '" id="' + id +'"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
}

function drawSwappedItem(name, price, img, id) {
      var keys = Object.keys(inventory);
      var rarity = atob(inventory[id]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
      if (rarity === "regular") {
        rarity = "knife";
      }

      var name = name;
      var price = "$" + price.toFixed(2);
      var img = img + "/70fx70f";

      $(".jackpotRightToBet").append('<div class="swappedItem ' + rarity + '" id="' + id +'"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
}

function drawSwapInventory() {
  $(".jackpotRightPlayer").html("");
  // I know this is cancer dont hate please
  var keys = Object.keys(inventory);

  for (var i = 0; i < keys.length; i++) {
    var rarity = atob(inventory[keys[i]]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
    if (rarity === "regular") {
      rarity = "knife";
    }
    var item = eval(atob(inventory[keys[i]]));
    var name = item["name"];
    var price = "$" + item["price"].toFixed(2);
    var img = item["img"] + "/70fx70f";

    $(".jackpotRightPlayer").append('<div class="inventorySwapItem ' + rarity + '" id="'+ keys[i] +'"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
  }
}

function updateSwapInfo() {
  $(".jackpotRightValueTotal").html("$" + swapSkinsValue.toFixed(2))
  $(".jackpotRightSkinsTotal").html(swapSkins + "/" + maxSwapSkins);
}



//{name: "", difficulty: 1, profilePic: ""},
var jackpotAI = {
  bot1: ["jGal | CaseClicker.com (diff1)", 1, "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/e8/e8223f8e92870322f6100154d32098769bbcea46_medium.jpg"],
  bot2: ["diff2", 2, "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/db/db165c0b3816930a3a15a5141aa79e096413987e_medium.jpg"],
  bot3: ["diff3", 3, "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/4f/4fc3c7352bec0f8a27b243738092f31c8248713c_medium.jpg"],
  bot4: ["diff4", 4, "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/4a/4aefa6617bfbef16bd13a9a3bb7ca62bf2544d11_medium.jpg"],
  bot5: ["diff5", 5, "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/d9/d9c62d9327e7f2a06d3db00295c99f839180d8a7_medium.jpg"],
  bot6: ["diff6", 6, "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/37/3782e8773ba4931601b972f3288aa0f0c9909030_medium.jpg"],
  //bot7: ["Platinum (diff7)", 7, "http://i.imgur.com/BzuCWzL.png"],
  //bot8: ["Loaf God (diff8)", 8, "http://i.imgur.com/Iu2Vkgl.png"],
  //bot9: ["diff9", 9, "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/c1/c160d49f7a842f408051bbada040b7d154bbcaf5_medium.jpg"]
};


var jackpotAiDifficulty1 = {
  1: {freq: 0.20, milspec: 0.950, restricted: 0.975, classified: 0.998, covert: 0.999},
  2: {freq: 0.30, milspec: 0.750, restricted: 0.900, classified: 0.998, covert: 0.999},
  3: {freq: 0.35, milspec: 0.500, restricted: 0.600, classified: 0.950, covert: 0.999},
  4: {freq: 0.40, milspec: 0.350, restricted: 0.500, classified: 0.950, covert: 0.999},
  5: {freq: 0.50, milspec: 0.200, restricted: 0.400, classified: 0.600, covert: 0.800},
  6: {freq: 0.05, milspec: 0.150, restricted: 0.200, classified: 0.950, covert: 0.400},
  7: {freq: 0.05 ,milspec: 0.050, restricted: 0.150, classified: 0.950, covert: 0.350},
  8: {freq: 0.05, milspec: 0.025, restricted: 0.090, classified: 0.350, covert: 0.250},
  9: {freq: 0.05, milspec: 0.005, restricted: 0.010, classified: 0.015, covert: 0.050}
};


var jackpotAiDifficulty2 = {
  1: ["milspec"],
  2: ["milspec", "restricted"],
  3: ["milspec", "restricted", "classified"],
  4: ["milspec", "restricted", "classified", "covert"],
  5: ["milspec", "restricted", "classified", "covert", "knife"],
  6: ["restricted", "classified", "covert", "knife"],
  7: ["classified", "covert", "knife"],
  8: ["covert", "knife"],
  9: ["knife"]
};
/*
function drawJPInventory() {
  // I know this is cancer dont hate please
  var keys = Object.keys(inventory);

  for (var i = 0; i < keys.length; i++) {
    var rarity = atob(inventory[keys[i]]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
    if (rarity === "regular") {
      rarity = "knife";
    }
    var item = eval(atob(inventory[keys[i]]));
    var name = item["name"];
    var price = "$" + item["price"].toFixed(2);
    var img = item["img"] + "/70fx70f";

    $(".jpPlayerItemsContainer").append('<div class="jpPlayerItem ' + rarity + '" id="'+ keys[i] +'"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
  }
}
*/
function inventoryReDraw() {
  $(".jackpotRightPlayer").html("");
  $(".inventoryContainer").html("");
  $(".jackpotRightToBet").html("");
  drawInventory();
  drawSwapInventory();
}

function jackpotStart() {
  $(".jackpotRightToBet").html("");
  $(".winnerIs").html("");
  var skins = 0;
  var maxSkins = 60;
  var pot = {};
  var players = [];
  var botTickets = {
    bot1: 0,
    bot2: 0,
    bot3: 0,
    bot4: 0,
    bot5: 0,
    bot6: 0,
    bot7: 0,
    bot8: 0,
    bot9: 0
  };
  var playerTickets = 0;
  var totalTickets = 0;
  var jackpotItemCounter = 0;
  var jackpotTimerCounter = 10;
  var depositTicker = 0;
  var AIKeys = Object.keys(jackpotAI);

  for (var skin in jackpotInventory) {
    if (jackpotInventory.hasOwnProperty(skin)) {
      if (inventory.hasOwnProperty(skin)) {
        var item = eval(atob(jackpotInventory[skin]));
        playerTickets += item.price * 100;
        console.log(skin);
        pot[skin] = jackpotInventory[skin];
        skins += 1;
        console.log(skins);
        delete inventory[skin];
      } else {
        //delete jackpotInventory[skin];
      }
    }
  }
  jackpotInventory = {};

  totalTickets += playerTickets;

  function drawPlayerDepositor(playerName, playerValue, playerImg) {
    $(".depositorContainer").append('<div class="jackpotDepositor"> <div class="depositorInfo"><img src="' + playerImg + '" class="depositorProPic"> <div class="depositorName">' + playerName + '</div> <div class="depositorValue" id="depositValue">$'+ playerValue +'</div> <div class="depositorSkinContainer" id="playerDeposit"> </div> </div> </div>');

    var keys = Object.keys(pot);

    for (var i = 0; i < keys.length; i++) {
      var rarity = atob(pot[keys[i]]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
      if (rarity === "regular") {
        rarity = "knife";
      }
      var item = eval(atob(pot[keys[i]]));
      var name = item["name"];
      var price = item["price"].toFixed(2);
      var img = item["img"] + "/70fx70f";

      $("#playerDeposit").append('<div class="depositorSkin ' + rarity + '" id="'+ keys[i] +'"><div class="itemPrice">$' + price + '</div> <img src=' + img + '> </div>');
    }

  }
  drawPlayerDepositor("Player1 (You)", (playerTickets / 100).toFixed(2), "http://i.imgur.com/ICK2lr1.jpg");

  console.log(playerTickets);
  console.log(totalTickets);
  console.log(pot);

  var jackpotTimer = setInterval(function() {
    $(".jackpotCountDown").html(jackpotTimerCounter);
    if (jackpotTimerCounter > 0) {
      if (skins < maxSkins) {
        jackpotAISkinDraw();
      } else {
        jackpotPickWinner();
        clearInterval(jackpotTimer);
      }
      jackpotTimerCounter -= 1;
    } else {
      jackpotPickWinner();
      clearInterval(jackpotTimer);
    }

    //console.log(jackpotTimerCounter);
    //console.log("Skins:" + skins);
  }, 1000);

  function jackpotAISkinDraw() {
    if (Math.random() > 0.65) {
      if (AIKeys.length > 0) {
        if (maxSkins - skins <= 10) {
          jackpotRandSkin();
          //skins += Math.round(Math.random() * (maxSkins - skins));
        } else {
          jackpotRandSkin();
        }
      } else {
        console.log("empty!");
      }
    }

    function jackpotRandSkin() {
      var skinsArray = [];
      var randSkin = "";
      var randNum = Math.random().toFixed(3); //rounded to 3 places to make it slightly easier to get certain rarities
      var numSkins = Math.ceil(Math.random() * 6);
      var identifier;

      //console.log(AIKeys);

      var randomBot = AIKeys[Math.floor(AIKeys.length * Math.random())];

      //console.log(randomBot);

      var botName = jackpotAI[randomBot][0];
      var botDiff = jackpotAI[randomBot][1];
      var botImg = jackpotAI[randomBot][2];


      players.push(randomBot);
      //console.log(botName);
      //console.log(jackpotAiDifficulty2[botDiff]);

      //sticks with same bot for the duration of # of skins they have, new rarity for each skin


      function skinChoose() {
        var rarity = jackpotAiDifficulty2[botDiff][Math.floor(jackpotAiDifficulty2[botDiff].length * Math.random())];

        if (rarity === "knife") {
          //var knifeCase = Object.keys(knives)[Math.floor(Math.random() * Object.keys(knives).length)];
          var knifeCase = "regular";

          skinsArray = Object.keys(knives[knifeCase]);
          randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];
          identifier = knives[knifeCase][randSkin];

          //console.log(identifier.name);
          //console.log(identifier.price * 100);
          botTickets[randomBot] += Math.round(identifier.price * 100);
          totalTickets += Math.round(identifier.price * 100);
          var toEncode = "knives['" + knifeCase + "']" + "['" + randSkin + "']";
          //console.log(toEncode);
          pot["item" + itemCounter] = window.btoa(toEncode);

          //drawItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);
          drawBotItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);
        } else {

          skinsArray = Object.keys(cases[currentCase][rarity]);
          randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];
          identifier = cases[currentCase][rarity][randSkin];

          botTickets[randomBot] += Math.round(identifier.price * 100);
          totalTickets += Math.round(identifier.price * 100);

          var toEncode = "cases['" + currentCase + "']" + "['" + rarity + "']" + "['" + randSkin + "']";
          //console.log(toEncode);
          pot["item" + itemCounter] = window.btoa(toEncode);
          //console.log(cases[currentCase][rarity][randSkin]);

          drawBotItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);

        }
        skins += 1;
        jackpotItemCounter += 1;
        itemCounter += 1;
      }

      function drawBotItem(array, rarity) {
          var name = array[0];
          var price = "$" + array[1].toFixed(2);
          var img = array[2] + "/70fx70f";
          var rarity = rarity;
          var botSelector = "deposit" + depositTicker;

          $('#' + botSelector).append('<div class="depositorSkin ' + rarity + '"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
          //console.log(randomBot);
      }

      var depositValueVar = "depositValue" + depositTicker;
      function drawDepositor(botName, botDrawPrice, botImg) {
        var depositorProPic = botImg;
        var depositorName = botName;

        $(".depositorContainer").append('<div class="jackpotDepositor"> <div class="depositorInfo"><img src="' + depositorProPic + '" class="depositorProPic"> <div class="depositorName">' + depositorName + '</div> <div class="depositorValue" id="depositValue'+ depositTicker + '"></div> <div class="depositorSkinContainer" id="deposit' + depositTicker + '"> </div> </div> </div>');
      }
      drawDepositor(botName, botDrawPrice, botImg);

      for (var i = 0; i < numSkins; i++) {
        skinChoose();
      }


      var botDrawPrice = botTickets[randomBot] / 100;
      //console.log(depositValueVar);
      $("#" + depositValueVar).html("$" + botDrawPrice);
      depositTicker += 1;

      AIKeys.splice(AIKeys.indexOf(randomBot), 1);
    }

  }

  function jackpotPickWinner() {
    var ticketAdder = 0;
    var randTicket = Math.round(Math.random() * totalTickets);
    console.log("Random Ticket: " + randTicket);
    console.log("Player Tickets: " + playerTickets);
    console.log("Player Tickets: " + totalTickets);

    if (randTicket <= playerTickets && randTicket > 0) {
      $(".winnerIs").html("You Win!");
      console.log("You Win!!!!!");
      inventoryCurrent += Object.keys(pot).length;
      $.extend(inventory, pot);

    } else {
      ticketAdder += playerTickets;
      for (var i = 0; i < players.length; i++) {
        var botTicketsOwned = botTickets[players[i]];
        if (randTicket <= (botTicketsOwned + ticketAdder) && randTicket > ticketAdder) {
          $(".winnerIs").html("Winner is: " + players[i]);
          console.log(players[i] + " is the winner!");
          itemCounter -= jackpotItemCounter;
          break;
        } else {
          ticketAdder += botTicketsOwned;
        }
      }
    }
    swapSkinsValue = 0;
    swapSkins = 0;
    inventoryReDraw();
    updateSwapInfo();
    $(".jackpotCountDown").html("00");
    //console.log(botTickets);
    //console.log(pot);
    saveGameState();
  }
}


/*===============VISUAL===============*/

function backgroundCheck() {
  $('.display').width($(window).width() - 575);
}

$(window).on('resize', function(){
    backgroundCheck();
});

var test = {hey: 0};
var arrayTest = ["gay", "fart"];
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

setInterval(function() {
  saveGameState();
}, 30000);

/*===============COOKIES===============*/
function saveGameState() {
  var string = {
    "money": money,
    "inventory": inventory,
    "itemCounter": itemCounter,
    "currentCase": currentCase,
    "upgradesPurchased": upgradesPurchased

  };

  localStorage.setItem("savegame", JSON.stringify(string));
  console.log("Game Saved.");
}

function loadGameState() {
  if (localStorage.getItem("savegame") !== null) {
    inventoryClear();
    var saveGame = JSON.parse(localStorage.getItem("savegame"));
    //console.log(saveGame);

    money = saveGame["money"];
    inventory = saveGame["inventory"];
    inventoryCurrent = Object.keys(inventory).length;
    itemCounter = saveGame["itemCounter"];
    currentCase = saveGame["currentCase"];
    upgradesPurchased = saveGame["upgradesPurchased"];

    drawInventory();
    console.log("Game Save found. Successfully loaded.");
  } else {
    console.log("No save game detected.")
  }

}

function clearGameState() {
  localStorage.removeItem("savegame");
  console.log("Game save deleted!");
  location.reload();
}

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
  loadGameState();
  caseInfo();
  backgroundCheck();
  drawCases()
  drawUpgrades()
}
init();
