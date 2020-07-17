var RANGES = [
  {
    "name": "z50",
    "deeps": [
      {
        "name": "100bb",
        "seats": [
          {
            "name": "BB",
            "style": "top: 75px; left: 0px;",
            "styleTitle": "top: 85px; left: 12px;"
          },
          {
            "name": "SB",
            "style": "top: 150px; left: 56px;",
            "styleTitle": "top: 160px; left: 69px;"
          },
          {
            "name": "BTN",
            "style": "top: 150px; right: 56px;",
            "styleTitle": "top: 160px; right: 64px;"
          },
          {
            "name": "CO",
            "style": "top: 75px; left: 248px;",
            "styleTitle": "top: 85px; left: 260px;"
          },
          {
            "name": "HJ",
            "style": "top: 0px; right: 56px;",
            "styleTitle": "top: 10px; right: 69px;"
          },
          {
            "name": "LJ",
            "style": "top: 0px; left: 56px;",
            "styleTitle": "top: 10px; left: 70px;"
          }
        ],
        "ranges": {
          "LJ Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "77+,A3s+,K8s+,Q9s+,JTs,9Ts,ATo+,KQo",
                "color": "bg-yellow-600"
              }
            ]
          },
          "LJ vs BTN 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA-KK,AKs",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "QQ-99,AQs,KQs,AKo",
                "color": "bg-green-600"
              }
            ]
          },
          "LJ vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,AKs",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "KK-88,AQs-AJs,KQs,AKo",
                "color": "bg-green-600"
              }
            ]
          },
          "HJ Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "55+,A2s+,K7s+,Q9s+,J9s+,T9s,ATo+,KJo+,QJo",
                "color": "bg-yellow-600"
              }
            ]
          },
          "HJ vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AJs+,KQs,99+,AQo+",
                "color": "bg-red-600"
              }
            ]
          },
          "CO Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "44+,A2s+,K4s+,Q6s+,J8s+,T8s+,98s,A8o+,KTo+,QTo+,JTo",
                "color": "bg-yellow-600"
              }
            ]
          },
          "CO vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AJs+,KQs,A5s,99+,AQo+",
                "color": "bg-red-600"
              }
            ]
          },
          "CO vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "ATs+,KJs+,A5s,88+,AQo+",
                "color": "bg-red-600"
              }
            ]
          },
          "CO vs BTN 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA-QQ,AK,AQo,KJs",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "JJ-22,AQs-ATs,KQs,QJs,JTs",
                "color": "bg-green-600"
              }
            ]
          },
          "CO vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA-KK,AKs",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "QQ-66,AQs-ATs,KJs+,QJs,JTs,AQo+",
                "color": "bg-green-600"
              }
            ]
          },
          "BTN Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "22+,A2s+,K2s+,Q3s+,J5s+,T6s+,96s+,86s+,75s+,65s,54s,A4o+,K8o+,Q9o+,J9o+,T9o",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BTN vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "ATs+,KJs+,A5s,99+,AQo+",
                "color": "bg-red-600"
              }
            ]
          },
          "BTN vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "ATs+,KJs+,A5s,88+,AQo+",
                "color": "bg-red-600"
              }
            ]
          },
          "BTN vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "A8s+,KTs+,QTs+,JTs,A5s-A4s,77+,AJo+,KQo",
                "color": "bg-red-600"
              }
            ]
          },
          "BTN vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "JJ+,AK",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "AQs-A8s,A5s-A4s,K9s+,QTs+,J9s+,T8s+,98s,87s,76s,TT-22,AQo-AJo,KQo",
                "color": "bg-green-600"
              }
            ]
          },
          "SB Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "22+,A2s+,K2s+,Q2s+,J4s+,T6s+,96s+,85s+,75s+,64s+,53s+,A4o+,K8o+,Q9o+,J9o+,T9o",
                "color": "bg-yellow-600"
              }
            ]
          },
          "SB vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "99+,AJs+,A5s-A4s,KQs,QJs,AKo",
                "color": "bg-red-600"
              }
            ]
          },
          "SB vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "88+,ATs+,A5s-A4s,KJs+,QJs,AQo+",
                "color": "bg-red-600"
              }
            ]
          },
          "SB vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "77+,A9s+,A5s-A4s,KJs+,QTs+,JTs,AQo+,KQo",
                "color": "bg-red-600"
              }
            ]
          },
          "SB vs BTN Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "55+,A7s+,A5s-A4s,KTs+,QTs+,JTs,T9s,AJo+,KQo",
                "color": "bg-red-600"
              }
            ]
          },
          "SB vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "TT+,AK,AQs",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "AJs-A7s,A5s,K9s+,QTs+,J9s+,T8s+,98s,99-22,AQo-AJo,KQo",
                "color": "bg-green-600"
              }
            ]
          },
          "BB vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "QQ+,AK,KQs,QJs,A5s",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "AQo-ATo,KJo+,JJ-22,AQs-A6s,A4-A2s,KJs-K9s,QTs-Q9s,J9s+,T8s+,97s+,86s+,76s,65s,54s,43s",
                "color": "bg-green-600"
              }
            ]
          },
          "BB vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "JJ+,AK,AQs,KQs,QJs,A5s",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "AQo-ATo,KJo+,QJo,TT-22,AJs-A6s,A4-A2s,KJs-K8s,QTs-Q8s,J8s+,T8s+,97s+,86s+,75s+,64s+,54s,43s",
                "color": "bg-green-600"
              }
            ]
          },
          "BB vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "TT+,AQs+,A5s,AKo,KJs+,QTs+,JTs",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "AQo-A9o,KTo+,QTo+,JTo,99-22,AJs-A6s,A4-A2s,KTs-K2s,Q9s-Q6s,J9s-J7s,T9s-T7s,98s,96s+,86s+,75s+,64s+,53s+,43s",
                "color": "bg-green-600"
              }
            ]
          },
          "BB vs BTN Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "99+,AJs+,KQs,A5s-A4s,T8s+,J9s+,AQo+",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "ATs-A6s,A3s-A2s,KJs-K2s,Q3s+,J8s-J6s,T7s-T6s,96s+,85s+,74s+,63s+,53s+,43s,88-22,AJo-A7o,A5o,K9o+,Q9o+,J9o+,T9o",
                "color": "bg-green-600"
              }
            ]
          },
          "BB vs SB Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "TT+,AJs+,KJs+,A5s-A4s,AQo+,T8o,87o,73s,84s,95s",
                "color": "bg-red-600"
              },
              {
                "name": "Call",
                "combos": "ATs-A6s,A3s-A2s,KTs-K2s,Q2s+,JTs-J4s,T9s-T6s,96s+,85s+,74s+,63s+,53s+,43s,99-22,AJo-A2o,K8o+,Q8o+,J9o+,T9o,98o",
                "color": "bg-green-600"
              }
            ]
          }
        }
      }
    ]
  },
  {
    "name": "Simple",
    "deeps": [
      {
        "name": "100bb",
        "seats": [
          {
            "name": "BB",
            "style": "top: 75px; left: 0px;",
            "styleTitle": "top: 85px; left: 12px;"
          },
          {
            "name": "SB",
            "style": "top: 150px; left: 56px;",
            "styleTitle": "top: 160px; left: 69px;"
          },
          {
            "name": "BTN",
            "style": "top: 150px; right: 56px;",
            "styleTitle": "top: 160px; right: 64px;"
          },
          {
            "name": "CO",
            "style": "top: 75px; left: 248px;",
            "styleTitle": "top: 85px; left: 260px;"
          },
          {
            "name": "HJ",
            "style": "top: 0px; right: 56px;",
            "styleTitle": "top: 10px; right: 69px;"
          },
          {
            "name": "LJ",
            "style": "top: 0px; left: 56px;",
            "styleTitle": "top: 10px; left: 70px;"
          }
        ],
        "ranges": {
          "LJ Open": {
            "categories": [
              {
                "name": "Go",
                "combos": "AK,AA,KK,QQ:0.5",
                "color": "bg-red-600"
              },
              {
                "name": "4bet",
                "combos": "KJs,A5s,AQo",
                "color": "bg-pink-600"
              },
              {
                "name": "vsLP",
                "combos": "AJs:0.5",
                "color": "bg-orange-400"
              },
              {
                "name": "Flat",
                "combos": "AQs,AJs:0.5,ATs,KQs,QQ:0.5,JJ-TT",
                "color": "bg-green-600"
              },
              {
                "name": "vsLP",
                "combos": "99,KTs",
                "color": "bg-teal-400"
              },
              {
                "name": "IP",
                "combos": "88-77",
                "color": "bg-blue-600"
              },
              {
                "name": "Open",
                "combos": "AJo,KQo,66-55,A9s-A6s,A4s-A3s,K9s,Q9s+,JTs,T9s,87s,76s",
                "color": "bg-gray-600"
              }
            ]
          },
          "LJ vs BTN 3bet": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "LJ vs BB 3bet": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "HJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "HJ vs LJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "CO Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "CO vs LJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "CO vs HJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "CO vs BTN 3bet": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "CO vs BB 3bet": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BTN Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BTN vs LJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BTN vs HJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BTN vs CO Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BTN vs BB 3bet": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "SB Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "SB vs LJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "SB vs HJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "SB vs CO Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "SB vs BTN Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "SB vs BB 3bet": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BB vs LJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BB vs HJ Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BB vs CO Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BB vs BTN Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          },
          "BB vs SB Open": {
            "categories": [
              {
                "name": "New",
                "combos": "",
                "color": "bg-yellow-600"
              }
            ]
          }
        }
      }
    ]
  }
];

var ACTIONS = {
    "RFI": ["Open"],
    "IP": ["Open", "3bet", "4bet"],
    "OOP": ["Open", "3bet"]
}

var POSITIONS = {
    "BTN": 0,
    "CO": 1,
    "HJ": 2,
    "LJ": 3,
    "MP": 4,
    "UTG+1": 5,
    "UTG": 6,
    "BB": 7,
    "SB": 8
}