var RANGES = [
  {
    "name": "NL10",
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
                "combos": "55+,AJo+,A3s+,KQs,T9s,KQo,KJs,QJs,JTs,KTs-K9s,QTs-Q9s",
                "color": "bg-orange-500"
              }
            ]
          },
          "HJ Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "55+,ATo+,A2s+,KQs,T9s,KJo+,KJs,QJs,J9s+,KTs-K9s,QTs-Q9s",
                "color": "bg-orange-500"
              }
            ]
          },
          "HJ vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-99,AK,A5s-A4s,KJs-KTs",
                "color": "bg-red-500"
              }
            ]
          },
          "CO Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "44+,A9o+,KTo+,QTo+,JTo+,A2s+,K4s+,Q7s+,J8s+,T8s+,98s",
                "color": "bg-orange-500"
              }
            ]
          },
          "CO vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-99,AK,A5s-A4s,KJs-KTs",
                "color": "bg-red-500"
              }
            ]
          },
          "CO vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-99,AK,A5s-A4s,KJs-KTs",
                "color": "bg-red-500"
              }
            ]
          },
          "CO vs BTN 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA-QQ,AQo:0.50,AK,KJs:0.50,ATs:0.50,A5s:0.50",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "JJ-22,AQo:0.50,AQs-AJs,ATs:0.51,A5s:0.51,KQs,JTs,T9s:0.50,98s:0.50,87s:0.50,76s:0.50,65s:0.50",
                "color": "bg-green-500"
              }
            ]
          },
          "CO vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA-QQ,AQo:0.50,AK,KJs:0.50,ATs:0.50,A5s:0.50",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "JJ-22,AQo:0.50,AQs-AJs,ATs:0.51,A5s:0.51,KQs,JTs,T9s:0.50,98s:0.50,87s:0.50,76s:0.50,65s:0.50",
                "color": "bg-green-500"
              }
            ]
          },
          "CO vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA-QQ,AQo:0.50,AK,KJs:0.50,ATs:0.50,A5s:0.50",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "JJ-22,AQo:0.50,AQs-AJs,ATs:0.51,A5s:0.51,KQs,JTs,T9s:0.50,98s:0.50,87s:0.50,76s:0.50,65s:0.50",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "22+,A4o+,K8o+,Q9o+,J9o+,T9o,A2s+,K2s+,Q3s+,J6s+,T6s+,96s+,86s+,75s+,65s,54s",
                "color": "bg-orange-500"
              }
            ]
          },
          "BTN vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-QQ,JJ-66:0.50,AKo,AQo:0.50,KQo:0.50,AKs-AQs,AJs-A8s:0.50,A5-A4s:0.50,KQs-KTs:0.50,QJs-QTs:0.50",
                "color": "bg-red-500"
              }
            ]
          },
          "BTN vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-QQ,JJ-66:0.50,AKo,AQo:0.50,KQo:0.50,AKs-AQs,AJs-A8s:0.50,A5-A4s:0.50,KQs-KTs:0.50,QJs-QTs:0.50",
                "color": "bg-red-500"
              }
            ]
          },
          "BTN vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-66,AKo-AQo,AJo:0.50,KQo:0.50,AKs-AQs,AJs-ATs,A9s-A8s:0.50,A5-A3s:0.50,KQs-K9s:0.50,QJs-QTs:0.50,Q9s,JTs:0.50,T9s:0.50",
                "color": "bg-red-500"
              }
            ]
          },
          "BTN vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA-JJ,AK,AQo-ATo:0.33,KQo:0.33,A6s:0.50,A3s:0.50,A2s",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "TT-22,AQo-AJo:0.67,KQo:0.67,AQs-A7s,A6s:0.51,A5s-A4s,A3s:0.51,KQs-K9s,QJs-Q9s,JTs-J9s,T9s,98s,87s,76s,65s",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA-JJ,AK,AQo-ATo:0.33,KQo:0.33,A6s:0.50,A3s:0.50,A2s",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "TT-22,AQo-AJo:0.67,KQo:0.67,AQs-A7s,A6s:0.51,A5s-A4s,A3s:0.51,KQs-K9s,QJs-Q9s,JTs-J9s,T9s,98s,87s,76s,65s",
                "color": "bg-green-500"
              }
            ]
          },
          "SB Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "22+,A4o+,K8o+,Q9o+,J9o+,T9o,A2s+,K2s+,Q3s+,J6s+,T6s+,96s+,86s+,75s+,65s,54s",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-99,AKo,AKs,KQs,A5s-A4s",
                "color": "bg-red-500"
              }
            ]
          },
          "SB vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-99,AKo,AKs,KQs,A5s-A4s",
                "color": "bg-red-500"
              }
            ]
          },
          "SB vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-77,AKo-AQo,AJo:0.50,KQo,AKs-A9s,A5s-A4s,KQs-KTs,QJs-QTs,JTs",
                "color": "bg-red-500"
              }
            ]
          },
          "SB vs BTN Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-55,AKo-AJo,KQo,AKs-A7s,A5s-A4s,KQs-K9s,QJs-QTs,JTs-J9s,T9s",
                "color": "bg-red-500"
              }
            ]
          },
          "SB vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA-JJ,TT:0.50,AK,AQo-ATo:0.50,AQs:0.50",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "TT:0.51,99-22,AQo-AJo:0.50,KQo,AQs:0.50,AJs-A3s,KQs-K9s,QJs-Q9s,JTs-J9s,T9s,98s,87s,76s,65s",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-QQ,AKo:0.50,AKs,A5s-A4s:0.50,KQs,QJs:0.50",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "JJ-22,AKo:0.50,AQo-ATo,KQo-KJo,QJo,AQs-A6s,A5s-A4s:0.51,A3s-A2s,KJs-K9s,QJs:0.51,QTs-Q9s,JTs-J9s,T9s-T8s,98s,87s,76s,65s,54s,43s",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-QQ,AKo:0.50,AKs,A5s-A4s:0.50,KQs,QJs:0.50",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "JJ-22,AKo:0.50,AQo-ATo,KQo-KJo,QJo,AQs-A6s,A5s-A4s:0.51,A3s-A2s,KJs-K9s,QJs:0.51,QTs-Q9s,JTs-J9s,T9s-T8s,98s,87s,76s,65s,54s,43s",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-JJ,TT:0.50,AKo,AQo:0.33,KQo-KJo:0.33,AKs-AQs,A6s-A5s:0.50,KQs-KJs:0.50,QJs-QTs:0.50,Q9s-Q8s:0.33,JTs,J9s-J8s:0.33,T9s-T7s:0.33,97s:0.33,86s:0.33,76s:0.33",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "TT:0.51,99-22,AQo:0.67,AJo-A9o,KQo-KJo:0.67,KTo,QJo-QTo,JTo,AJs-A7s,A6s-A5s:0.51,A4s-A2s,KQs-KJs:0.51,KTs-K2s,QJs-QTs:0.51,Q9s-Q8s:0.68,J9s-J8s:0.68,T9s-T7s:0.68,98s,97s:0.68,87s,86s:0.68,76s:0.68,75s,65s,54s,43s",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs BTN Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-99,88-55:0.33,AKo-AQo,AJo:0.33,KQo:0.33,AJs+,ATs:0.33,KQs,KJs:0.33,A5s,A4s,JTs,J9s,T9s-T8s,76s:0.33,65s:0.33,54s:0.33",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "88-55:0.68,44-22,AJo:0.67,ATo-A4o,KQo:0.67,KJo-K9o,QJo-Q9o,JTo-J9o,T9o,ATs:0.68,A9s-A6s,A3s-A2s,KJs:0.68,KTs-K2s,QJs-Q2s,J8s-J6s,T7s-T6s,98s-96s,87s-86s,76s:0.68,75s,65s:0.68,64s,54s:0.68,53s,43s",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs SB Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA-TT,99-88:0.50,AKo-AQo,A6o:0.50,A2o:0.50,KQo:0.33,K4o:0.50,Q6o:0.50,J8o:0.50,J7o:0.50,T7o:0.50,ATs+,A5s-A3s,KQs-KTs,QJs:0.50,JTs:0.50,J2s:0.50,T9s:0.50,T5s-T2s:0.50,98s:0.50,93s:0.50,87s:0.50,76s:0.50,65s:0.50,54s:0.50",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "99-88:0.51,77-22,AJo-A7o,A6o:0.50,A5o-A3o,A2o:0.50,KQo:0.67,KJo-K8o,QJo-Q8o,JTo-J9o,J8o:0.50,T9o-T8o,98o,A9s-A6s,A3s-A2s,K9s-K2s,QJs:0.51,QTs-Q2s,JTs:0.51,J9s-J6s,T9s:0.51,T8s-T6s,98:0.51,97s-96s,87s:0.51,86s-85s,76s:0.51,75s-74s,65s:0.51,64s,54s:0.51,53s,43s",
                "color": "bg-green-500"
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