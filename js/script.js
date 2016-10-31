// CSGOCLICKER

var Game = {
  'variables': {
    'currentCase': 1
    'rarity': {
      'base': {
        'bs': 0,
        'ww': 0,
        'ft': 0,
        'mw': 0,
        'fn': 0,
        'stattrak': 0.3 // 30% chance
      },
      'case': {
        'milspec': 1, // base chance
        'restricted': 0.15, // 15% chance
        'classified': 0.05, // 5% chance
        'covert': 0.025, // 2.5% chance
        'knife': 0.005 // .5% chance
      },
      'capsule': {
        'milspec': 1, // base chance
        'restricted': 0.15, // 15% chance
        'classified': 0.05, // 5% chance
        'covert': 0.025, // 2.5% chance
        'knife': 0.005 // .5% chance
      },
      'drop': {
        'milspec': 1, // base chance
        'restricted': 0.15, // 15% chance
        'classified': 0.05, // 5% chance
        'covert': 0.025, // 2.5% chance
      }
    }
  },
  'player': {
    'money': 0,
    'itemCounter': 0,
    'maxItems': 50,
    'items': [],
    'upgrades': []
  },
  'jackpot': {
    'pot': {
      'player': {
        'tickets': 0,
        'items': []
      },
      'bots': {
        'bot1': {
          'tickets': 234,
          'items': []
        }
        // 'bot2' and so on, programatically generate, wipe before start of next pot
      },
      'potItems': {

      }
    }
  },
  'settings': {
    'popup': true
  }
}

// LOGIC

/* Random Skin Logic
  - have to check if
      - drop skin
      - sticker
      - souvenir package
      - case skin
      - operation skin
