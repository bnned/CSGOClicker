// CSGOCLICKER

var Game = {
  'variables': {
    'containerTypes': {
      'case': {
        'ST': true,
        'wears': ['milspec', 'restricted', 'classified', 'covert', 'knife']
      },
      'capsule': {
        'ST': false,
        'wears': ['normal', 'holo', 'foil']
      },
      'souvenirPackage': {
        'ST': false,
        'wears': ['consumer', 'industrial', 'milspec', 'restricted', 'classified', 'covert']
      },
      'gameDrop': {
        'ST': false,
        'wears': ['consumer', 'industrial', 'milspec', 'restricted', 'classified', 'covert']
      }
    },
    'caseTypes': {[
      // enter json data from scraper here, key is case name and json obj as data. fix if needed.
    ]},
    'rarity': {
      'base': {
        // based on wear value, look up values later, kappa sorry
        /*
        0.44 – 1.00 - Battle-Scarred does bs really have 60% chance? Fuck it for now it does
        0.37 – 0.44 - Well-Worn
        0.15 – 0.37 - Field Tested
        0.07 – 0.15 - Minimal Wear
        0.00 – 0.07 - Factory New
        */
        'bs': 1,
        'ww': 0.44,
        'ft': 0.37,
        'mw': 0.15,
        'fn': 0.07,
        'stattrak': 0.09 // 9% chance
      },
      'quality': {
        'consumer': 0, // base chance
        'industrial': 0, // base chance
        'milspec': 1, // base chance
        'normal': 0, // base chance
        'restricted': 0.15, // 15% chance
        'holo': 0, // base chance
        'classified': 0.05, // 5% chance
        'foil': 0, // base chance
        'covert': 0.025, // 2.5% chance
        'knife': 0.005 // .5% chance
      }
    }
  },
  'player': {
    'money': 0,
    'itemCounter': 0,
    'maxItems': 50,
    'items': [],
    'upgrades': [],
    'stats': {
      'moneySpent': 0,
      'moneyBet': 0,
      'moneyWon': 0,
      'caseStats': {
        'casesOpened': 0,
        'knivesOpened': 0,
        'percentStattrak': 0,
      }
    }
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

*/

function typeCheck() {
  if (Game.) {

  }
}
