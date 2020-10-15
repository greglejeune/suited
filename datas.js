var RANGES = [
  {
    "name": "CG v1",
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
                "combos": "AA,KK,QQ,JJ,TT,99,88,77,66:0.25,AK,AQ,AJ,AT,A9s,A8s,A7s,A6s,A5s,A4s,A3s,A2s,KQ,KJ,KTs,KTo:0.25,K9s,K8s,K7s:0.25,K6s:0.25,K5s:0.25,QJs,QJo:0.25,QTs,Q9s,JTs,J9s:0.06,T9s:0.5,98s:0.06,87s:0.06,76s:0.06,65s:0.06,54s:0.06",
                "color": "bg-orange-500"
              }
            ]
          },
          "LJ vs BTN 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK,QQ,JJ:0.75,TT:0.75,99:0.25,AKs,AKo:0.75,AQo:0.75,AJs:0.5,ATs:0.5,KQs:0.75,KJs,KTs:0.25,QJs:0.25,76s",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "JJ:0.25,TT:0.25,99:0.25,88:0.25,77:0.25,66:0.25,55:0.25,44,33,22,AKo:0.25,AQs,AJs:0.5,KQs:0.25,KTs:0.75,JTs:0.25,T9s:0.25,87s:0.5,65s,54s",
                "color": "bg-green-500"
              }
            ]
          },
          "LJ vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK:0.75,QQ:0.25,88:0.25,AKs:0.75,AKo:0.25,AQo:0.5,AJs:0.25,ATs:0.25,A5s:0.25,KQs:0.25,KJs:0.5,KTs:0.25,K9s:0.25",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "KK:0.25,QQ:0.75,JJ,TT,99,88:0.5,77:0.5,66:0.5,55,44,33,22,AKs:0.25,AKo:0.75,AQs,AQo:0.25,AJs:0.75,ATs:0.75,A5s:0.75,KQs:0.75,KJs:0.5,KTs:0.75,QJs,QTs:0.5,JTs,J9s:0.25,T9s:0.5,98s,87s,76s,65s,54s",
                "color": "bg-green-500"
              }
            ]
          },
          "LJ vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK:0.75,QQ:0.25,88:0.25,AKs:0.75,AKo:0.25,AQo:0.5,AJs:0.25,ATs:0.25,A5s:0.25,KQs:0.25,KJs:0.5,KTs:0.25,K9s:0.25",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "KK:0.25,QQ:0.75,JJ,TT,99,88:0.5,77:0.5,66:0.5,55,44,33,22,AKs:0.25,AKo:0.75,AQs,AQo:0.25,AJs:0.75,ATs:0.75,A5s:0.75,KQs:0.75,KJs:0.5,KTs:0.75,QJs,QTs:0.5,JTs,J9s:0.25,T9s:0.5,98s,87s,76s,65s,54s",
                "color": "bg-green-500"
              }
            ]
          },
          "HJ Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA,KK,QQ,JJ,TT,99,88,77,66,55:0.75,44:0.25,33:0.25,22:0.25,AK,AQ,AJ,AT,A9s,A9o:0.25,A8s,A7s,A6s,A5s,A4s,A3s,A2s,KQ,KJ,KT,K9s,K8s,K7s,K6s,K5s:0.75,QJ,QTs,QTo:0.5,Q9s,Q8s:0.5,JTs,JTo:0.12,J9s,T9s,T8s:0.5,98s:0.5,87s:0.5,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-orange-500"
              }
            ]
          },
          "HJ vs BTN 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK,QQ,JJ:0.75,TT:0.75,99:0.25,AKs,AKo:0.75,AQo:0.75,AJs:0.5,ATs:0.5,KQs:0.75,KJs,KTs:0.25,QJs:0.25,76s",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "JJ:0.25,TT:0.25,99:0.25,88:0.25,77:0.25,66:0.25,55:0.25,44,33,22,AKo:0.25,AQs,AJs:0.5,KQs:0.25,KTs:0.75,JTs:0.25,T9s:0.25,87s:0.5,65s,54s",
                "color": "bg-green-500"
              }
            ]
          },
          "HJ vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK:0.75,QQ:0.25,88:0.25,AKs:0.75,AKo:0.25,AQo:0.5,AJs:0.25,ATs:0.25,A5s:0.25,KQs:0.25,KJs:0.5,KTs:0.25,K9s:0.25",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "KK:0.25,QQ:0.75,JJ,TT,99,88:0.5,77:0.5,66:0.5,55,44,33,22,AKs:0.25,AKo:0.75,AQs,AQo:0.25,AJs:0.75,ATs:0.75,A5s:0.75,KQs:0.75,KJs:0.5,KTs:0.75,QJs,QTs:0.5,JTs,J9s:0.25,T9s:0.5,98s,87s,76s,65s,54s",
                "color": "bg-green-500"
              }
            ]
          },
          "HJ vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK:0.75,QQ:0.25,88:0.25,AKs:0.75,AKo:0.25,AQo:0.5,AJs:0.25,ATs:0.25,A5s:0.25,KQs:0.25,KJs:0.5,KTs:0.25,K9s:0.25",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "KK:0.25,QQ:0.75,JJ,TT,99,88:0.5,77:0.5,66:0.5,55,44,33,22,AKs:0.25,AKo:0.75,AQs,AQo:0.25,AJs:0.75,ATs:0.75,A5s:0.75,KQs:0.75,KJs:0.5,KTs:0.75,QJs,QTs:0.5,JTs,J9s:0.25,T9s:0.5,98s,87s,76s,65s,54s",
                "color": "bg-green-500"
              }
            ]
          },
          "CO Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA,KK,QQ,JJ,TT,99,88,77,66,55,44,33:0.25,22:0.12,AK,AQ,AJ,AT,A9,A8s,A8o:0.5,A7s,A6s,A5s,A5o:0.5,A4s,A3s,A2s,KQ,KJ,KT,K9s,K9o:0.12,K8s,K7s,K6s,K5s,K4s,K3s:0.75,QJ,QT,Q9s,Q8s,Q7s,Q6s,Q5s,Q4s:0.25,JT,J9s,J8s,T9s,T8s,T7s:0.25,98s,97s,87s:0.75,76s:0.5,65s:0.5,54s:0.5",
                "color": "bg-orange-500"
              }
            ]
          },
          "CO vs BTN 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK,QQ,JJ,TT:0.75,99:0.5,88:0.5,AK,AQo,ATs:0.5,A9s:0.5,A8s:0.25,A5s:0.25,KQs:0.25,KJs:0.75,KTs:0.5,K9s:0.25,QJs:0.5,JTs:0.5",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "TT:0.25,99:0.5,88:0.5,77:0.5,66:0.5,55:0.5,AQs,AJs,ATs:0.5,A5s:0.25,KQs:0.75,KJs:0.25,KTs:0.5,QJs:0.5,QTs:0.5,JTs:0.5,J9s:0.25,T9s:0.25,T8s:0.25,98s:0.25,87s:0.33,76s,65s",
                "color": "bg-green-500"
              }
            ]
          },
          "CO vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK:0.75,QQ:0.25,JJ:0.25,AKs,AKo:0.25,AQo:0.5,AJo:0.25,ATs:0.25,A5s:0.25,KQo:0.25,KTs:0.25,JTs:0.25",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "KK:0.25,QQ:0.75,JJ:0.75,TT,99,88,77,66:0.5,55:0.25,44:0.25,33:0.5,22:0.5,AKo:0.75,AQs,AQo:0.5,AJs,ATs:0.75,A9s:0.5,A5s:0.75,A4s,A3s:0.5,KQs,KQo:0.25,KJs,KTs:0.75,K9s:0.5,QJs,QTs,JTs:0.75,J9s,T9s,T8s:0.5,98s:0.25,87s:0.66,76s,65s,54s",
                "color": "bg-green-500"
              }
            ]
          },
          "CO vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK:0.75,QQ:0.25,JJ:0.25,AKs,AKo:0.25,AQo:0.5,AJo:0.25,ATs:0.25,A5s:0.25,KQo:0.25,KTs:0.25,JTs:0.25",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "KK:0.25,QQ:0.75,JJ:0.75,TT,99,88,77,66:0.5,55:0.25,44:0.25,33:0.5,22:0.5,AKo:0.75,AQs,AQo:0.5,AJs,ATs:0.75,A9s:0.5,A5s:0.75,A4s,A3s:0.5,KQs,KQo:0.25,KJs,KTs:0.75,K9s:0.5,QJs,QTs,JTs:0.75,J9s,T9s,T8s:0.5,98s:0.25,87s:0.66,76s,65s,54s",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA,KK,QQ,JJ,TT,99,88,77,66,55,44,33,22,AK,AQ,AJ,AT,A9,A8,A7,A6,A5,A4,A3s,A2s,KQ,KJ,KT,K9,K8,K7s,K6s,K5s,K4s,K3s,K2s,QJ,QT,Q9,Q8s,Q7s,Q6s,Q5s,Q4s,Q3s,Q2s:0.25,JT,J9,J8s,J8o:0.5,J7s,J6s,J5s,J4s:0.25,T9,T8s,T8o:0.75,T7s,T6s,98s,98o:0.5,97s,96s,87s,86s,76s,75s,65s,54s",
                "color": "bg-orange-500"
              }
            ]
          },
          "BTN vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ:0.75,JJ:0.5,TT:0.25,99:0.25,88:0.25,77:0.25,AK,AQs:0.75,AQo:0.25,AJ:0.25,A9s:0.5,A8s:0.75,A7s:0.25,A5s:0.5,A4s:0.5,A3s:0.5,KQ:0.5,KJs:0.5,KJo:0.25,KTs:0.25,K9s:0.5,K5s:0.25,QJs:0.5,QTs:0.5,JTs:0.5,T9s:0.25,87s:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "QQ:0.25,JJ:0.5,TT:0.75,99:0.75,88:0.75,77:0.75,66:0.75,55:0.25,44:0.25,33:0.25,22:0.25,AQs:0.25,AQo:0.75,AJs:0.75,ATs,A9s:0.5,A8s:0.25,A5s:0.5,A4s:0.5,A3s:0.5,KQ:0.5,KJs:0.5,KTs:0.75,K9s:0.25,QJs:0.5,QTs:0.5,JTs:0.5,T9s:0.25,87s:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ:0.75,JJ:0.5,TT:0.25,99:0.25,88:0.25,77:0.25,AK,AQs:0.75,AQo:0.25,AJ:0.25,A9s:0.5,A8s:0.75,A7s:0.25,A5s:0.5,A4s:0.5,A3s:0.5,KQ:0.5,KJs:0.5,KJo:0.25,KTs:0.25,K9s:0.5,K5s:0.25,QJs:0.5,QTs:0.5,JTs:0.5,T9s:0.25,87s:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "QQ:0.25,JJ:0.5,TT:0.75,99:0.75,88:0.75,77:0.75,66:0.75,55:0.25,44:0.25,33:0.25,22:0.25,AQs:0.25,AQo:0.75,AJs:0.75,ATs,A9s:0.5,A8s:0.25,A5s:0.5,A4s:0.5,A3s:0.5,KQ:0.5,KJs:0.5,KTs:0.75,K9s:0.25,QJs:0.5,QTs:0.5,JTs:0.5,T9s:0.25,87s:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ,JJ,TT:0.75,99:0.5,88:0.5,77:0.5,66:0.5,55:0.25,44:0.25,AK,AQs,AQo:0.75,AJs:0.5,AJo,ATs:0.5,ATo:0.75,A9s:0.5,A8s:0.75,A7s:0.5,A5s:0.75,A4s:0.75,A3s:0.75,KQ:0.75,KJs:0.75,KJo:0.5,KTs:0.5,K9s:0.5,QJs:0.75,QJo:0.5,QTs:0.5,Q9s:0.75,JTs:0.75,T9s:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "TT:0.25,99:0.5,88:0.5,77:0.5,66:0.5,55:0.25,44:0.25,AQo:0.25,AJs:0.5,ATs:0.5,A9s:0.5,A8s:0.25,A7s:0.5,A5s:0.25,A4s:0.25,A3s:0.25,KQ:0.25,KJ:0.25,KTs:0.5,K9s:0.5,QJs:0.25,QTs:0.5,JTs:0.25,T9s:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK,QQ:0.75,JJ:0.5,TT:0.5,88:0.25,AKs,AKo:0.5,AQo:0.25,AJo:0.25,ATo:0.5,A9s:0.25,A8s:0.5,KQo:0.25,KJo:0.25,Q9s:0.25,J9s:0.25,T8s:0.25,87s:0.25,65s:0.25",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "QQ:0.25,JJ:0.5,TT:0.5,99,88:0.75,77,66,55,44:0.5,33:0.5,22:0.5,AKo:0.5,AQs,AQo:0.75,AJs,AJo:0.75,ATs,A9s:0.75,A8s:0.5,A7s:0.5,A5s,A4s,A3s,KQs,KQo:0.75,KJs,KJo:0.25,KTs,K9s,K8s:0.5,K6s:0.5,QJs,QTs,Q9s:0.75,JTs,J9s:0.75,J8s:0.5,T9s,T8s:0.75,98s,97s:0.5,87s:0.75,86s:0.5,76s,65s:0.75",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK,QQ:0.75,JJ:0.5,88:0.25,66:0.25,AKs,AKo:0.75,AQo:0.5,AJo:0.5,ATo:0.25,A8s:0.25,A7s:0.25,A6s:0.25,KQo:0.25,KJo:0.25,K9s:0.25,98s:0.25",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "QQ:0.25,JJ:0.5,TT,99,88:0.75,77,66:0.75,55,44:0.75,33:0.5,22:0.25,AKo:0.25,AQs,AQo:0.5,AJs,AJo:0.5,ATs,ATo:0.25,A9s,A8s:0.75,A7s:0.75,A6s:0.75,A5s,A4s,A3s,A2s:0.5,KQs,KQo:0.75,KJs,KJo:0.25,KTs,K9s:0.75,K8s:0.5,K7s:0.25,K6s:0.5,K5s:0.25,QJs,QTs,Q9s,JTs,J9s,J8s:0.5,T9s,T8s,98s:0.75,97s:0.25,87s,76s,65s,54s",
                "color": "bg-green-500"
              }
            ]
          },
          "SB Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA,KK,QQ,JJ,TT,99,88,77,66,55,44,33,22,AK,AQ,AJ,AT,A9,A8,A7,A6,A5,A4,A3s,A2s,KQ,KJ,KT,K9,K8,K7s,K6s,K5s,K4s,K3s,K2s,QJ,QT,Q9,Q8s,Q7s,Q6s,Q5s,Q4s,Q3s,Q2s:0.5,JT,J9,J8s,J8o:0.25,J7s,J6s,J5s,J4s:0.5,T9,T8s,T8o:0.5,T7s,T6s,98s,98o:0.75,97s,96s,87s,87o:0.5,86s,85s,76s,75s,65s,64s,54s",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ,JJ,TT,99:0.5,88:0.5,77:0.25,AK,AQs,AQo:0.5,AJs,ATs,A5s:0.75,A4s:0.25,KQs,KJs,KTs:0.75,QJs,QTs:0.75,JTs:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs HJ Open": {
            "categories": [
              {
                "name": "3bet*",
                "combos": "AA,KK,QQ,JJ,TT,99:0.5,88:0.5,77:0.25,AK,AQs,AQo:0.5,AJs,ATs,A5s:0.75,A4s:0.25,KQs,KJs,KTs:0.75,QJs,QTs:0.75,JTs:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs CO Open": {
            "categories": [
              {
                "name": "3bet*",
                "combos": "AA,KK,QQ,JJ,TT,99:0.5,88:0.5,77:0.25,AK,AQs,AQo:0.5,AJs,ATs,A5s:0.75,A4s:0.25,KQs,KJs,KTs:0.75,QJs,QTs:0.75,JTs:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs BTN Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ,JJ,TT,99,88,77,66,55,AK,AQ,AJ,ATs,ATo:0.25,A9s,A8s,A7s:0.75,A5s,A4s,A3s:0.5,KQ,KJs,KJo:0.5,KTs,KTo:0.25,K9s,K8s:0.25,QJs,QTs,Q9s,JTs,J9s,T9s,T8s:0.75,98s:0.25,87s:0.5,76s:0.5,65s:0.25",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA,KK,QQ,JJ,TT,AK,AQs,AQo:0.5,AJo,ATo:0.5,A4s:0.5,A2s:0.5,KQo:0.5,KJs:0.25,KJo:0.5,KT:0.25,Q9s:0.25,J9s:0.25,J8s:0.25,T9s:0.25,98s:0.5,76s:0.25",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "99,88,77,66,55,44,33,22:0.5,AQo:0.5,AJs,ATs,ATo:0.5,A9s,A8s,A7s,A6s,A5s:0.75,A4s:0.5,A3s:0.75,A2s:0.5,KQs,KQo:0.5,KJs:0.75,KJo:0.5,KTs:0.75,KTo:0.25,K9s,K8s,K7s,K6s,K5s:0.5,QJs,QJo:0.5,QTs,Q9s:0.75,JTs,J9s:0.75,J8s:0.75,T9s:0.75,T8s,T7s:0.5,98s:0.5,97s:0.5,87s:0.5,76s:0.75,65s:0.5,54s:0.5",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ,JJ:0.5,AKs,AKo:0.75,AQs,AJs:0.5,ATs:0.5,A8s:0.25,A7s:0.25,A6s:0.25,A5s:0.25,A4s:0.25,KQs,KJs:0.75,KTs:0.25,K7s:0.25,K6s:0.25,K5s:0.25,QJs,QTs:0.5,Q9s:0.25,JTs:0.25,J9s:0.25,J8s:0.25,T9s:0.25,T8s:0.25,98s:0.25,87s:0.25,86s:0.25,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "JJ:0.5,TT,99,88,77,66,55,44,33,22,AKo:0.25,AQo,AJs:0.5,AJo,ATs:0.5,ATo,A9s,A8s:0.75,A7s:0.75,A6s:0.75,A5s:0.75,A4s:0.75,A3s,A2s,KQo,KJs:0.25,KJo,KTs:0.75,KTo:0.25,K9s,K8s,K7s:0.75,K6s:0.75,K5s:0.75,K4s,K3s:0.75,K2s:0.5,QJo:0.5,QT:0.5,Q9s:0.75,Q8s,Q7s:0.5,Q6s:0.5,Q5s:0.5,JTs:0.75,J9s:0.75,J8s:0.75,T9s:0.75,T8s:0.75,T7s,98s:0.75,97s,96s,87s:0.75,86s:0.75,85s:0.5,76s:0.75,75s,74s:0.5,65s:0.75,64s,63s:0.5,54s:0.75,53s,52s:0.5,43s,42s:0.5",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ,JJ:0.75,TT:0.25,77:0.25,AK,AQs,AQo:0.25,AJs:0.5,ATs:0.5,A8s:0.25,A7s:0.25,A6s:0.25,A5s:0.25,A4s:0.25,A3s:0.25,KQs,KJs,KTs:0.75,K7s:0.25,K6s:0.25,K5s:0.25,K4s:0.25,QJs,QTs:0.75,Q9s:0.5,Q8s:0.5,JTs:0.75,J9s:0.5,T9s:0.25,T7s:0.25,97s:0.25,87s:0.25,76s:0.25,75s:0.25,65s:0.25,64s:0.25,54s:0.25",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "JJ:0.25,TT:0.75,99,88,77:0.75,66,55,44,33,22,AQo:0.75,AJs:0.5,AJo,ATs:0.5,ATo,A9s,A9o:0.5,A8s:0.75,A7s:0.75,A6s:0.75,A5s:0.75,A4s:0.75,A3s:0.75,A2s,KQo,KJo,KTs:0.25,KTo:0.5,K9s,K8s,K7s:0.75,K6s:0.75,K5s:0.75,K4s:0.75,K3s,K2s,QJo,QTs:0.25,QTo:0.5,Q9s:0.5,Q8s:0.5,Q7s:0.75,Q6s:0.75,Q5s:0.5,Q4s:0.5,JTs:0.25,JTo:0.5,J9s:0.5,J8s,J7s:0.5,T9s:0.75,T8s,T7s:0.75,98s,97s:0.75,96s,87s:0.75,86s,85s,76s:0.75,75s:0.75,74s,65s:0.75,64s:0.75,54s:0.75,53s,52s:0.5,43s,42s:0.5",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ,JJ,TT:0.75,99:0.25,88:0.13,77:0.13,66:0.13,AK,AQs,AQo:0.5,AJs,AJo:0.13,ATs:0.5,ATo:0.13,A9s:0.5,A8s:0.25,A7s:0.13,A6s:0.13,A5s:0.75,A4s:0.5,KQs,KQo:0.13,KJs:0.75,KJo:0.13,KTs,KTo:0.13,K9s:0.25,K7s:0.13,K6s:0.13,K5s:0.13,K4s:0.13,QJs,QJo:0.13,QTs,QTo:0.13,Q9s:0.5,Q8s:0.13,Q6s:0.13,Q5s:0.13,JTs,J9s:0.5,J8s:0.13,J7s:0.13,T9s:0.5,T8s:0.13,T7s:0.13,98s:0.13,97s:0.13,87s:0.25,86s:0.13,76s:0.25,75s:0.13,65s:0.5,64s:0.13,54s:0.5",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "TT:0.25,99:0.75,88:0.87,77:0.87,66:0.87,55,44,33,22,AQo:0.5,AJo:0.87,ATs:0.5,ATo:0.87,A9s:0.5,A9o,A8s:0.75,A8o:0.25,A7s:0.87,A6s:0.87,A5:0.25,A4s:0.5,A3s,A2s,KQo:0.87,KJs:0.25,KJo:0.87,KTo:0.87,K9s:0.75,K8s,K7s:0.87,K6s:0.87,K5s:0.87,K4s:0.87,K3s,K2s,QJo:0.87,QTo:0.87,Q9s:0.5,Q8s:0.87,Q7s,Q6s:0.87,Q5s:0.87,Q4s,Q3s:0.5,Q2s:0.5,J9s:0.5,J8s:0.87,J7s:0.87,J6s:0.5,J5s:0.5,T9s:0.5,T9o:0.25,T8s:0.87,T7s:0.87,98s:0.87,97s:0.87,96s,87s:0.75,86s:0.87,85s,76s:0.75,75s:0.87,74s,65s:0.5,64s:0.87,63s:0.5,54s:0.5,53s,52s:0.5,43s,42s:0.5",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs BTN Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ,JJ,TT,99,88:0.5,77:0.25,AK,AQ,AJs,AJo:0.5,ATs,ATo:0.13,A9s:0.25,A8s:0.5,A8o:0.13,A7s:0.5,A7o:0.13,A6s:0.25,A5s,A4:0.5,A3s:0.25,KQs,KQo:0.5,KJs,KJo:0.25,KTs,KTo:0.5,K9s:0.75,K8s:0.25,K7s:0.13,K6s:0.25,QJs,QJo:0.25,QTs,QTo:0.25,Q9s:0.75,Q8s:0.13,JTs,JTo:0.25,J9s,J9o:0.25,J8s:0.25,J7s:0.5,J5s:0.13,T9s,T9o:0.13,T8s:0.75,T7s:0.25,T6s:0.13,98s:0.75,97s:0.13,87s,76s:0.75,65s:0.5,54s:0.5",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "88:0.5,77:0.75,66:0.87,55,44,33,22,AJo:0.5,ATo:0.87,A9s:0.75,A9o,A8s:0.5,A8o:0.87,A7s:0.5,A7o:0.87,A6s:0.75,A6o:0.5,A5,A4:0.5,A3s:0.75,A2s,KQo:0.5,KJo:0.75,KTo:0.5,K9s:0.25,K9o,K8s:0.75,K7s:0.87,K6s:0.75,K5s,K4s,K3s,K2s,QJo:0.75,QTo:0.75,Q9s:0.25,Q9o,Q8s:0.87,Q7s,Q6s,Q5s,Q4s,Q3s,Q2s,JTo:0.75,J9o:0.75,J8s:0.75,J7s:0.5,J6s,J5s:0.87,J4s,J3s,J2s:0.87,T9o:0.87,T8s:0.25,T8o:0.5,T7s:0.75,T6s:0.87,98s:0.25,98o:0.5,97s:0.87,96s,87o:0.5,86s,85s,76s:0.25,75s,74s,65s:0.5,64s,63s,54s:0.5,53s,52s,43s,42s:0.75,32s:0.25",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs SB Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA,KK,QQ,JJ,TT,99:0.87,88:0.5,77:0.25,66:0.25,AK,AQ,AJs,AJo:0.5,ATs,A9s:0.25,A8o:0.14,A7:0.25,A6o:0.5,A5s,A4s,A3s:0.75,A3o:0.5,A2s:0.25,A2o:0.5,KQs,KQo:0.5,KJs,KJo:0.14,KTs,K9s:0.5,K9o:0.25,K8:0.25,K7:0.5,K6s:0.5,K6o:0.25,K5:0.25,QJs,QTs:0.75,Q9o:0.25,Q8o:0.5,JTs,J9s:0.5,J9o:0.25,J8o:0.5,J5s:0.25,J4s:0.25,J3s:0.25,J2s:0.25,T9s,T9o:0.25,T8s:0.25,T8o:0.5,T7o:0.5,T6s:0.25,T5s:0.5,T4s:0.5,T3s:0.5,T2s:0.5,98s,87s:0.75,76s:0.75,65s:0.75,54s",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "99:0.13,88:0.5,77:0.75,66:0.75,55,44,33,22,AJo:0.5,ATo,A9s:0.75,A9o,A8s,A8o:0.86,A7:0.75,A6s,A6o:0.5,A5o,A4o,A3s:0.25,A3o:0.5,A2s:0.75,A2o:0.5,KQo:0.5,KJo:0.86,KTo,K9s:0.5,K9o:0.75,K8:0.75,K7:0.5,K6s:0.5,K6o:0.75,K5s:0.75,K5o:0.25,K4s,K3s,K2s,QJo,QTs:0.25,QTo,Q9s,Q9o:0.75,Q8s,Q8o:0.5,Q7s,Q6s,Q5s,Q4s,Q3s,Q2s,JTo,J9s:0.5,J9o:0.75,J8s,J8o:0.5,J7s,J6s,J5s:0.75,J4s:0.75,J3s:0.75,J2s:0.75,T9o:0.75,T8s:0.75,T8o:0.5,T7s,T7o:0.5,T6s:0.75,T5s:0.5,T4s:0.5,T3s:0.5,T2s:0.5,98o,97s,97o:0.5,96s,95s,94s:0.87,93s:0.87,87s:0.25,87o,86s,85s,84s,76s:0.25,76o:0.5,75s,74s,73s,65s:0.25,65o:0.5,64s,63s,54o:0.5,53s,52s,43s,42s,32s",
                "color": "bg-green-500"
              }
            ]
          }
        },
        "links": []
      }
    ]
  },
  {
    "name": "CG v2",
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
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:1.0,A8s:1.0,A7s:1.0,A6s:1.0,A5s:1.0,A4s:1.0,A3s:1.0,A2s:0.14,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:1.0,K8s:0.7,K7s:0.21,K6s:0.24,K5s:0.35,AQo:1.0,KQo:1.0,QQ:1.0,QJs:1.0,QTs:1.0,Q9s:1.0,AJo:1.0,KJo:1.0,QJo:0.43,JJ:1.0,JTs:1.0,J9s:0.32,ATo:1.0,KTo:0.25,QTo:0.07,TT:1.0,T9s:0.85,99:1.0,98s:0.09,88:1.0,87s:0.17,77:1.0,76s:0.22,66:0.6,65s:0.22,55:0.2,54s:0.23,44:0.12,33:0.09,22:0.11",
                "color": "bg-orange-500"
              }
            ]
          },
          "LJ vs HJ 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AQs:0.3,AJs:0.58,ATs:0.29,A5s:0.16,AKo:0.7,KK:1.0,KQs:0.72,KJs:0.52,KTs:0.11,AQo:0.26,QQ:0.77,JJ:0.58,TT:0.31,99:0.15",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AQs:0.69,AJs:0.41,ATs:0.19,A5s:0.2,A4s:0.11,AKo:0.29,KQs:0.27,KJs:0.35,KTs:0.1,QQ:0.23,QJs:0.09,JJ:0.41,JTs:0.24,J9s:0.06,TT:0.38,T9s:0.21,99:0.34,98s:1.0,88:0.26,87s:1.0,77:0.24,76s:1.0,66:0.37,65s:1.0,55:0.72,54s:1.0,44:1.0,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "LJ vs CO 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AQs:0.32,AJs:0.64,ATs:0.28,A5s:0.08,AKo:0.75,KK:1.0,KQs:0.73,KJs:0.6,KTs:0.1,AQo:0.43,QQ:0.84,JJ:0.67,TT:0.41,99:0.18",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AQs:0.68,AJs:0.35,ATs:0.18,A5s:0.18,A4s:0.09,AKo:0.24,KQs:0.26,KJs:0.35,KTs:0.11,QQ:0.15,QJs:0.09,JJ:0.32,JTs:0.21,J9s:0.09,TT:0.38,T9s:0.19,99:0.31,98s:1.0,88:0.23,87s:0.86,77:0.21,76s:1.0,66:0.33,65s:1.0,55:0.63,54s:1.0,44:1.0,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "LJ vs BTN 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AJs:0.44,ATs:0.48,A5s:0.24,AKo:0.63,KK:1.0,KQs:0.42,KJs:0.61,KTs:0.45,AQo:0.47,QQ:0.55,JJ:0.45,TT:0.43,99:0.12,88:0.03",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AQs:1.0,AJs:0.55,ATs:0.51,A9s:0.15,A5s:0.39,A4s:0.25,AKo:0.37,KQs:0.57,KJs:0.38,KTs:0.29,QQ:0.44,QJs:0.24,QTs:0.17,JJ:0.54,JTs:0.36,TT:0.56,T9s:0.33,99:0.58,98s:1.0,88:0.47,87s:1.0,77:0.41,76s:1.0,66:0.62,65s:1.0,55:1.0,54s:1.0,44:1.0,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "LJ vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:0.72,AJs:0.21,ATs:0.13,A5s:0.28,A4s:0.14,AKo:0.21,KK:0.47,KQs:0.2,KJs:0.28,KTs:0.21,AQo:0.23,QQ:0.07,JJ:0.18,TT:0.1,99:0.13",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AKs:0.27,AQs:1.0,AJs:0.78,ATs:0.62,A5s:0.7,A4s:0.48,A3s:0.2,AKo:0.78,KK:0.52,KQs:0.79,KJs:0.71,KTs:0.54,AQo:0.13,QQ:0.92,QJs:0.89,QTs:0.34,JJ:0.81,JTs:0.65,J9s:0.03,TT:0.9,T9s:0.42,99:0.68,98s:1.0,88:0.52,87s:1.0,77:0.46,76s:1.0,66:0.66,65s:1.0,55:1.0,54s:1.0,44:1.0,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "LJ vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:0.64,AJs:0.11,ATs:0.13,A9s:0.18,A8s:0.1,A7s:0.04,A5s:0.12,A4s:0.23,A3s:0.19,AKo:0.25,KK:0.37,KJs:0.16,KTs:0.24,K9s:0.05,K6s:0.09,AQo:0.26,KQo:0.03,QQ:0.07,AJo:0.02,JJ:0.15,TT:0.04,99:0.11,88:0.07",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AKs:0.35,AQs:1.0,AJs:0.88,ATs:0.86,A9s:0.43,A8s:0.21,A7s:0.13,A5s:0.87,A4s:0.77,A3s:0.51,AKo:0.74,KK:0.62,KQs:1.0,KJs:0.83,KTs:0.75,K6s:0.06,AQo:0.31,QQ:0.92,QJs:1.0,QTs:0.87,JJ:0.85,JTs:1.0,TT:0.96,T9s:0.46,99:0.89,98s:0.42,88:0.79,87s:1.0,77:0.71,76s:1.0,66:0.6,65s:1.0,55:0.57,54s:1.0,44:1.0,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "HJ Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:1.0,A8s:1.0,A7s:1.0,A6s:1.0,A5s:1.0,A4s:1.0,A3s:1.0,A2s:1.0,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:1.0,K8s:1.0,K7s:1.0,K6s:0.79,K5s:0.6,AQo:1.0,KQo:1.0,QQ:1.0,QJs:1.0,QTs:1.0,Q9s:1.0,Q8s:0.55,AJo:1.0,KJo:1.0,QJo:1.0,JJ:1.0,JTs:1.0,J9s:1.0,J8s:0.07,ATo:1.0,KTo:0.93,QTo:0.57,JTo:0.26,TT:1.0,T9s:1.0,T8s:0.47,A9o:0.26,99:1.0,98s:0.62,88:1.0,87s:0.29,77:1.0,76s:0.26,66:1.0,65s:0.25,55:0.65,54s:0.3,44:0.23,33:0.19,22:0.2",
                "color": "bg-orange-500"
              }
            ]
          },
          "HJ vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A5s:1.0,A4s:0.41,A3s:0.08,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:0.11,AQo:0.94,KQo:0.56,QQ:1.0,QJs:0.91,JJ:1.0,TT:0.65,99:0.43,88:0.27,77:0.28,66:0.29,65s:0.12,55:0.14,54s:0.12,44:0.13,33:0.12,22:0.1",
                "color": "bg-orange-500"
              }
            ]
          },
          "HJ vs CO 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AJs:0.57,ATs:0.5,AKo:0.79,KK:1.0,KQs:0.73,KJs:0.72,KTs:0.51,AQo:0.79,QQ:0.96,JJ:0.76,TT:0.58,99:0.22,88:0.05",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AQs:1.0,AJs:0.42,ATs:0.3,A5s:0.2,A4s:0.09,AKo:0.2,KQs:0.27,KJs:0.27,KTs:0.35,AQo:0.05,QQ:0.03,QJs:0.17,QTs:0.1,JJ:0.24,JTs:0.33,J9s:0.07,TT:0.41,T9s:0.22,99:0.48,98s:0.24,88:0.36,87s:0.7,77:0.32,76s:1.0,66:0.29,65s:1.0,55:0.32,54s:1.0,44:0.95,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "HJ vs BTN 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AJs:0.28,ATs:0.63,A5s:0.21,AKo:0.73,KK:1.0,KQs:0.45,KJs:0.79,KTs:0.62,AQo:0.84,QQ:0.84,JJ:0.53,TT:0.5,99:0.28,88:0.2",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AQs:1.0,AJs:0.72,ATs:0.36,A9s:0.25,A5s:0.38,A4s:0.22,AKo:0.26,KQs:0.55,KJs:0.2,KTs:0.37,K9s:0.05,AQo:0.15,QQ:0.16,QJs:0.39,QTs:0.39,JJ:0.46,JTs:0.46,TT:0.5,T9s:0.32,99:0.7,98s:0.29,88:0.58,87s:0.96,77:0.5,76s:1.0,66:0.45,65s:1.0,55:0.46,54s:1.0,44:1.0,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "HJ vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:0.67,AJs:0.31,ATs:0.2,A5s:0.27,AKo:0.23,KK:0.55,KQs:0.25,KJs:0.32,KTs:0.19,K9s:0.18,AQo:0.43,QQ:0.12,AJo:0.02,JJ:0.29,TT:0.05,99:0.09,88:0.07",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AKs:0.32,AQs:1.0,AJs:0.68,ATs:0.8,A5s:0.72,A4s:0.57,A3s:0.3,AKo:0.76,KK:0.44,KQs:0.74,KJs:0.68,KTs:0.8,K6s:0.27,AQo:0.49,QQ:0.87,QJs:1.0,QTs:0.74,JJ:0.7,JTs:1.0,J9s:0.35,TT:0.94,T9s:0.5,99:0.9,98s:0.44,88:0.76,87s:1.0,77:0.62,76s:1.0,66:0.53,65s:1.0,55:0.47,54s:1.0,44:1.0,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "HJ vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:0.64,AJs:0.11,ATs:0.13,A9s:0.18,A8s:0.1,A7s:0.04,A5s:0.12,A4s:0.23,A3s:0.19,AKo:0.25,KK:0.37,KJs:0.16,KTs:0.24,K9s:0.05,K6s:0.09,AQo:0.26,KQo:0.03,QQ:0.07,AJo:0.02,JJ:0.15,TT:0.04,99:0.11,88:0.07",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AKs:0.35,AQs:1.0,AJs:0.88,ATs:0.86,A9s:0.43,A8s:0.21,A7s:0.13,A5s:0.87,A4s:0.77,A3s:0.51,AKo:0.74,KK:0.62,KQs:1.0,KJs:0.83,KTs:0.75,K6s:0.06,AQo:0.31,QQ:0.92,QJs:1.0,QTs:0.87,JJ:0.85,JTs:1.0,TT:0.96,T9s:0.46,99:0.89,98s:0.42,88:0.79,87s:1.0,77:0.71,76s:1.0,66:0.6,65s:1.0,55:0.57,54s:1.0,44:1.0,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "CO Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:1.0,A8s:1.0,A7s:1.0,A6s:1.0,A5s:1.0,A4s:1.0,A3s:1.0,A2s:1.0,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:1.0,K8s:1.0,K7s:1.0,K6s:1.0,K5s:1.0,K4s:1.0,K3s:0.63,AQo:1.0,KQo:1.0,QQ:1.0,QJs:1.0,QTs:1.0,Q9s:1.0,Q8s:1.0,Q7s:1.0,Q6s:1.0,AJo:1.0,KJo:1.0,QJo:1.0,JJ:1.0,JTs:1.0,J9s:1.0,J8s:1.0,J7s:0.32,ATo:1.0,KTo:1.0,QTo:1.0,JTo:1.0,TT:1.0,T9s:1.0,T8s:1.0,T7s:0.44,A9o:1.0,K9o:0.16,T9o:0.17,99:1.0,98s:1.0,97s:1.0,A8o:0.66,88:1.0,87s:1.0,86s:0.02,77:1.0,76s:0.48,66:1.0,65s:0.33,A5o:0.3,55:1.0,54s:0.35,44:1.0,33:0.42,22:0.42",
                "color": "bg-orange-500"
              }
            ]
          },
          "CO vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A5s:1.0,A4s:0.54,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,AQo:1.0,KQo:0.7,QQ:1.0,QJs:1.0,AJo:0.12,JJ:1.0,TT:0.85,99:0.46,88:0.29,77:0.29,66:0.33,65s:0.04,55:0.15,54s:0.11,44:0.14,33:0.12,22:0.1",
                "color": "bg-orange-500"
              }
            ]
          },
          "CO vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:0.61,A5s:0.94,A4s:0.7,A3s:0.19,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,AQo:1.0,KQo:0.96,QQ:1.0,QJs:1.0,QTs:0.28,AJo:0.66,JJ:1.0,JTs:0.15,TT:1.0,99:0.64,88:0.37,77:0.34,66:0.37,55:0.19,44:0.16,33:0.14,22:0.09",
                "color": "bg-orange-500"
              }
            ]
          },
          "CO vs BTN 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,ATs:0.5,A9s:0.24,A5s:0.19,AKo:0.89,KK:1.0,KQs:0.08,KJs:0.69,KTs:0.73,K9s:0.14,AQo:0.85,KQo:0.24,QQ:1.0,QJs:0.36,QTs:0.05,AJo:0.29,JJ:0.8,JTs:0.29,TT:0.69,99:0.3,88:0.3,77:0.14",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AQs:1.0,AJs:1.0,ATs:0.49,A9s:0.56,A8s:0.15,A5s:0.55,A4s:0.31,A3s:0.07,AKo:0.1,KQs:0.91,KJs:0.3,KTs:0.26,K9s:0.35,K6s:0.07,AQo:0.14,KQo:0.06,QJs:0.63,QTs:0.61,JJ:0.2,JTs:0.68,J9s:0.08,TT:0.31,T9s:0.4,T8s:0.07,99:0.69,98s:0.32,97s:0.05,88:0.69,87s:0.37,86s:1.0,77:0.75,76s:0.77,66:0.61,65s:1.0,55:0.43,54s:1.0,44:0.42,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "CO vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:0.97,ATs:0.29,A9s:0.16,A5s:0.16,AKo:0.29,KK:0.74,KJs:0.13,KTs:0.12,K9s:0.09,AQo:0.38,KQo:0.26,QQ:0.34,AJo:0.32,KJo:0.05,JJ:0.28,JTs:0.03,J9s:0.1,TT:0.18,T9s:0.1,99:0.05,88:0.1,77:0.04",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AKs:0.02,AQs:1.0,AJs:1.0,ATs:0.7,A9s:0.69,A5s:0.84,A4s:0.77,A3s:0.43,AKo:0.71,KK:0.26,KQs:1.0,KJs:0.86,KTs:0.88,K9s:0.41,K6s:0.32,AQo:0.61,KQo:0.24,QQ:0.65,QJs:1.0,QTs:1.0,AJo:0.11,JJ:0.72,JTs:0.96,J9s:0.75,TT:0.81,T9s:0.89,T8s:0.4,99:0.94,98s:0.4,88:0.9,87s:0.55,86s:1.0,77:0.95,76s:1.0,66:0.82,65s:1.0,55:0.49,54s:1.0,44:0.47,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "CO vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,ATs:0.15,A9s:0.2,A8s:0.22,A7s:0.1,A5s:0.11,A4s:0.14,AKo:0.33,KK:0.63,KTs:0.08,K9s:0.2,K6s:0.03,AQo:0.41,KQo:0.18,QQ:0.24,AJo:0.18,KJo:0.09,JJ:0.21,TT:0.04,T9s:0.08,99:0.04,88:0.09,77:0.08",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AQs:1.0,AJs:1.0,ATs:0.85,A9s:0.79,A8s:0.57,A7s:0.23,A5s:0.88,A4s:0.85,A3s:0.69,AKo:0.66,KK:0.36,KQs:1.0,KJs:1.0,KTs:0.91,K9s:0.47,K8s:0.04,K6s:0.33,AQo:0.58,KQo:0.36,QQ:0.75,QJs:1.0,QTs:1.0,AJo:0.08,JJ:0.78,JTs:1.0,J9s:0.62,TT:0.95,T9s:0.9,T8s:0.03,99:0.95,98s:0.19,88:0.9,87s:0.56,77:0.91,76s:1.0,66:0.82,65s:1.0,55:0.53,54s:1.0,44:0.43,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:1.0,A8s:1.0,A7s:1.0,A6s:1.0,A5s:1.0,A4s:1.0,A3s:1.0,A2s:1.0,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:1.0,K8s:1.0,K7s:1.0,K6s:1.0,K5s:1.0,K4s:1.0,K3s:1.0,K2s:1.0,AQo:1.0,KQo:1.0,QQ:1.0,QJs:1.0,QTs:1.0,Q9s:1.0,Q8s:1.0,Q7s:1.0,Q6s:1.0,Q5s:1.0,Q4s:1.0,Q3s:1.0,Q2s:0.17,AJo:1.0,KJo:1.0,QJo:1.0,JJ:1.0,JTs:1.0,J9s:1.0,J8s:1.0,J7s:1.0,J6s:1.0,J5s:1.0,J4s:0.35,ATo:1.0,KTo:1.0,QTo:1.0,JTo:1.0,TT:1.0,T9s:1.0,T8s:1.0,T7s:1.0,T6s:1.0,A9o:1.0,K9o:1.0,Q9o:1.0,J9o:1.0,T9o:1.0,99:1.0,98s:1.0,97s:1.0,96s:1.0,A8o:1.0,K8o:0.72,J8o:0.41,T8o:0.64,98o:0.45,88:1.0,87s:1.0,86s:1.0,A7o:1.0,77:1.0,76s:1.0,75s:1.0,A6o:1.0,66:1.0,65s:1.0,A5o:1.0,55:1.0,54s:0.96,A4o:1.0,44:1.0,33:1.0,22:1.0",
                "color": "bg-orange-500"
              }
            ]
          },
          "BTN vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:0.7,AJs:0.37,ATs:0.3,A9s:0.54,A8s:0.58,A7s:0.3,A5s:0.48,A4s:0.55,A3s:0.54,AKo:0.77,KK:1.0,KQs:0.34,KJs:0.33,KTs:0.4,K9s:0.45,K8s:0.03,K6s:0.17,K5s:0.11,AQo:0.37,KQo:0.67,QQ:0.77,QJs:0.59,QTs:0.54,Q9s:0.05,AJo:0.31,KJo:0.09,JJ:0.47,JTs:0.33,TT:0.4,T9s:0.39,99:0.27,88:0.28,77:0.3,76s:0.04,66:0.31,65s:0.18,55:0.14,54s:0.21,44:0.11,33:0.11,22:0.11",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "AQs:0.3,AJs:0.62,ATs:0.69,A9s:0.45,A8s:0.24,A7s:0.17,A6s:0.03,A5s:0.51,A4s:0.44,A3s:0.45,AKo:0.22,KQs:0.65,KJs:0.66,KTs:0.59,K9s:0.27,K6s:0.05,AQo:0.62,KQo:0.32,QQ:0.22,QJs:0.4,QTs:0.45,AJo:0.24,JJ:0.52,JTs:0.66,J9s:0.2,TT:0.59,T9s:0.56,T8s:0.06,99:0.72,98s:0.33,97s:0.03,88:0.71,87s:0.35,86s:0.1,77:0.69,76s:0.36,66:0.56,65s:0.34,55:0.38,54s:0.45,53s:0.05,44:0.3,33:0.27,22:0.35",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:0.8,AJs:0.27,ATs:0.2,A9s:0.6,A8s:0.68,A7s:0.66,A5s:0.44,A4s:0.56,A3s:0.6,AKo:0.88,KK:1.0,KQs:0.25,KJs:0.58,KTs:0.42,K9s:0.62,K8s:0.27,K6s:0.14,K5s:0.07,AQo:0.46,KQo:0.68,QQ:0.93,QJs:0.48,QTs:0.59,Q9s:0.66,AJo:0.69,KJo:0.11,QJo:0.15,JJ:0.54,JTs:0.37,ATo:0.12,TT:0.46,T9s:0.4,99:0.41,88:0.34,77:0.33,66:0.39,55:0.22,54s:0.04,44:0.17,33:0.14,22:0.11",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "AQs:0.19,AJs:0.72,ATs:0.79,A9s:0.39,A8s:0.3,A7s:0.28,A6s:0.13,A5s:0.55,A4s:0.43,A3s:0.39,A2s:0.02,AKo:0.11,KQs:0.74,KJs:0.41,KTs:0.57,K9s:0.37,K6s:0.03,AQo:0.53,KQo:0.32,QQ:0.06,QJs:0.51,QTs:0.4,Q9s:0.02,AJo:0.3,KJo:0.14,JJ:0.45,JTs:0.62,J9s:0.19,TT:0.54,T9s:0.51,T8s:0.02,99:0.58,98s:0.29,97s:0.02,88:0.65,87s:0.32,86s:0.06,77:0.66,76s:0.26,66:0.58,65s:0.2,55:0.38,54s:0.32,44:0.29,33:0.27,22:0.29",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:0.89,AJs:0.56,ATs:0.39,A9s:0.61,A8s:0.68,A7s:0.74,A6s:0.55,A5s:0.56,A4s:0.56,A3s:0.63,AKo:0.96,KK:1.0,KQs:0.63,KJs:0.69,KTs:0.6,K9s:0.64,K8s:0.15,K6s:0.17,AQo:0.64,KQo:0.67,QQ:1.0,QJs:0.48,QTs:0.43,Q9s:0.86,AJo:0.71,KJo:0.53,QJo:0.43,JJ:0.82,JTs:0.58,J9s:0.47,ATo:0.63,KTo:0.16,TT:0.62,T9s:0.49,99:0.55,88:0.49,77:0.47,66:0.49,55:0.39,44:0.2,33:0.18,22:0.14",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "AQs:0.11,AJs:0.43,ATs:0.61,A9s:0.38,A8s:0.31,A7s:0.25,A6s:0.17,A5s:0.44,A4s:0.43,A3s:0.34,AKo:0.03,KQs:0.36,KJs:0.3,KTs:0.39,K9s:0.35,K8s:0.1,K7s:0.08,K6s:0.1,AQo:0.35,KQo:0.33,QJs:0.51,QTs:0.57,Q9s:0.12,AJo:0.28,KJo:0.22,JJ:0.17,JTs:0.41,J9s:0.26,ATo:0.03,KTo:0.01,TT:0.37,T9s:0.46,T8s:0.07,99:0.44,98s:0.26,88:0.5,87s:0.23,77:0.51,76s:0.18,66:0.5,65s:0.09,55:0.41,54s:0.15,44:0.28,33:0.24,22:0.26",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN vs SB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:0.93,AKs:1.0,A9s:0.05,A8s:0.28,A7s:0.2,AKo:0.51,KK:1.0,K9s:0.04,AQo:0.26,KQo:0.2,QQ:0.62,Q9s:0.19,Q8s:0.04,AJo:0.3,KJo:0.37,QJo:0.03,JJ:0.43,J9s:0.16,ATo:0.4,KTo:0.03,QTo:0.01,TT:0.28,T9s:0.1,T8s:0.03,99:0.04,98s:0.03,88:0.13,87s:0.02,77:0.08,66:0.02",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AA:0.07,AQs:1.0,AJs:1.0,ATs:1.0,A9s:0.94,A8s:0.71,A7s:0.78,A6s:0.09,A5s:1.0,A4s:1.0,A3s:1.0,AKo:0.48,KQs:1.0,KJs:1.0,KTs:1.0,K9s:0.95,K8s:0.55,K7s:0.28,K6s:0.91,AQo:0.73,KQo:0.8,QQ:0.38,QJs:1.0,QTs:1.0,Q9s:0.8,AJo:0.69,KJo:0.37,JJ:0.56,JTs:1.0,J9s:0.83,J8s:0.63,ATo:0.21,JTo:0.09,TT:0.71,T9s:0.89,T8s:0.96,T7s:0.13,99:0.95,98s:0.96,97s:0.72,88:0.86,87s:0.97,86s:0.32,77:0.91,76s:1.0,66:0.97,65s:0.83,55:1.0,54s:0.96,44:1.0,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "BTN vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,A8s:0.17,A7s:0.21,A6s:0.27,AKo:0.64,KK:1.0,K9s:0.04,K5s:0.07,AQo:0.35,KQo:0.23,QQ:0.56,Q9s:0.11,AJo:0.37,KJo:0.31,QJo:0.01,JJ:0.39,J9s:0.11,ATo:0.3,KTo:0.04,TT:0.21,T9s:0.05,T8s:0.11,98s:0.12,88:0.03,77:0.03,66:0.06,55:0.04",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AQs:1.0,AJs:1.0,ATs:1.0,A9s:1.0,A8s:0.82,A7s:0.79,A6s:0.72,A5s:1.0,A4s:1.0,A3s:1.0,A2s:0.41,AKo:0.35,KQs:1.0,KJs:1.0,KTs:1.0,K9s:0.95,K8s:0.77,K7s:0.44,K6s:0.69,K5s:0.17,AQo:0.64,KQo:0.76,QQ:0.44,QJs:1.0,QTs:1.0,Q9s:0.88,Q8s:0.03,AJo:0.63,KJo:0.48,QJo:0.13,JJ:0.61,JTs:1.0,J9s:0.88,J8s:0.55,ATo:0.22,KTo:0.11,JTo:0.08,TT:0.78,T9s:0.94,T8s:0.88,99:1.0,98s:0.87,97s:0.38,88:0.96,87s:0.94,77:0.96,76s:1.0,66:0.93,65s:0.58,55:0.95,54s:0.73,44:1.0,33:0.92,22:0.76",
                "color": "bg-green-500"
              }
            ]
          },
          "SB Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA:0.67,AKs:1.0,AQs:0.77,AJs:0.8,ATs:1.0,A9s:0.96,A8s:0.83,A7s:0.6,A6s:0.33,A5s:0.66,A4s:0.42,A3s:0.36,A2s:0.26,AKo:0.69,KK:0.64,KQs:0.8,KJs:0.78,KTs:0.89,K9s:0.69,K8s:0.43,K7s:0.37,K6s:0.45,K5s:0.55,K4s:0.42,K3s:0.49,K2s:0.6,AQo:0.7,KQo:0.58,QQ:0.73,QJs:1.0,QTs:0.95,Q9s:0.39,Q8s:0.32,Q7s:0.59,Q6s:0.58,Q5s:0.64,Q4s:0.67,Q3s:0.71,Q2s:0.52,AJo:0.61,KJo:0.52,QJo:0.36,JJ:0.71,JTs:0.92,J9s:0.51,J8s:0.28,J7s:0.74,J6s:0.74,J5s:0.81,J4s:0.49,J3s:0.16,ATo:0.47,KTo:0.43,QTo:0.42,JTo:0.38,TT:0.66,T9s:0.61,T8s:0.25,T7s:0.64,T6s:0.85,T5s:0.19,T4s:0.11,A9o:0.6,K9o:0.74,Q9o:0.61,J9o:0.54,T9o:0.63,99:0.63,98s:0.19,97s:0.58,96s:0.67,95s:0.08,A8o:0.71,K8o:0.59,Q8o:0.1,J8o:0.28,T8o:0.52,98o:0.51,88:0.6,87s:0.31,86s:0.63,85s:0.65,A7o:0.8,K7o:0.31,97o:0.08,87o:0.36,77:0.53,76s:0.6,75s:0.69,74s:0.45,A6o:0.57,K6o:0.04,66:0.47,65s:0.56,64s:0.77,A5o:0.62,55:0.46,54s:0.49,53s:0.62,A4o:0.4,44:0.42,43s:0.23,A3o:0.07,33:0.45,22:0.45",
                "color": "bg-orange-500"
              },
              {
                "name": "Limp",
                "combos": "AA:0.33,AQs:0.23,AJs:0.2,A9s:0.04,A8s:0.16,A7s:0.4,A6s:0.66,A5s:0.33,A4s:0.58,A3s:0.64,A2s:0.73,AKo:0.3,KK:0.35,KQs:0.19,KJs:0.21,KTs:0.1,K9s:0.3,K8s:0.56,K7s:0.62,K6s:0.54,K5s:0.44,K4s:0.57,K3s:0.5,K2s:0.39,AQo:0.3,KQo:0.41,QQ:0.26,QTs:0.05,Q9s:0.6,Q8s:0.67,Q7s:0.4,Q6s:0.41,Q5s:0.35,Q4s:0.32,Q3s:0.28,Q2s:0.47,AJo:0.38,KJo:0.48,QJo:0.63,JJ:0.28,JTs:0.07,J9s:0.48,J8s:0.71,J7s:0.26,J6s:0.26,J5s:0.18,J4s:0.5,J3s:0.83,J2s:1.0,ATo:0.52,KTo:0.56,QTo:0.57,JTo:0.62,TT:0.33,T9s:0.38,T8s:0.74,T7s:0.35,T6s:0.14,T5s:0.8,T4s:0.87,T3s:0.96,A9o:0.39,K9o:0.25,Q9o:0.38,J9o:0.45,T9o:0.37,99:0.36,98s:0.8,97s:0.41,96s:0.32,95s:0.91,94s:0.46,A8o:0.28,K8o:0.4,Q8o:0.89,J8o:0.71,T8o:0.47,98o:0.49,88:0.4,87s:0.69,86s:0.36,85s:0.34,84s:0.49,A7o:0.2,K7o:0.68,Q7o:0.51,J7o:0.36,T7o:0.57,97o:0.82,87o:0.63,77:0.46,76s:0.39,75s:0.3,74s:0.54,A6o:0.42,K6o:0.95,Q6o:0.38,86o:0.12,76o:0.4,66:0.52,65s:0.43,64s:0.22,63s:0.55,A5o:0.37,K5o:0.96,65o:0.11,55:0.53,54s:0.5,53s:0.37,A4o:0.6,44:0.57,43s:0.72,A3o:0.93,33:0.54,A2o:1.0,22:0.55",
                "color": "bg-green-500"
              }
            ]
          },
          "SB vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A5s:0.7,A4s:0.3,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:0.9,AQo:0.49,QQ:1.0,QJs:1.0,QTs:0.5,JJ:1.0,JTs:0.34,TT:1.0,99:0.6,88:0.33,77:0.25,76s:0.04,66:0.15,65s:0.13,54s:0.18",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs LJ 4bet": {
            "categories": [
              {
                "name": "All-in",
                "combos": "AA:0.64,AKs:1.0,AKo:0.53,KK:0.77,QQ:0.06,JJ:0.1",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "AA:0.36,AQs:1.0,AJs:0.9,ATs:0.19,A5s:0.45,AKo:0.46,KK:0.22,QQ:0.93,JJ:0.89,JTs:0.3,TT:0.72,99:0.94,88:1.0,77:1.0,76s:1.0,66:1.0,65s:1.0,54s:0.94",
                "color": "bg-green-500"
              }
            ]
          },
          "SB vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:0.22,A5s:0.78,A4s:0.37,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:0.1,AQo:0.96,KQo:0.09,QQ:1.0,QJs:1.0,QTs:0.89,JJ:1.0,JTs:1.0,J9s:0.07,TT:1.0,99:1.0,88:0.6,77:0.37,76s:0.02,66:0.25,65s:0.05,55:0.02,54s:0.09",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs HJ 4bet": {
            "categories": [
              {
                "name": "All-in",
                "combos": "AA:0.64,AKs:1.0,AKo:0.67,KK:0.97,JJ:0.29",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "AA:0.36,AQs:1.0,AJs:1.0,ATs:0.28,A5s:0.63,A4s:0.15,AKo:0.32,KK:0.02,KQs:0.44,KJs:0.53,KTs:0.3,AQo:0.04,QQ:1.0,JJ:0.7,JTs:0.07,TT:1.0,99:0.88,88:1.0,77:1.0,76s:1.0,66:1.0,65s:1.0,55:1.0,54s:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "SB vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:1.0,A8s:0.14,A5s:0.96,A4s:0.31,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:0.47,AQo:1.0,KQo:0.65,QQ:1.0,QJs:1.0,QTs:1.0,AJo:0.47,KJo:0.07,JJ:1.0,JTs:1.0,J9s:0.51,TT:1.0,T9s:0.45,99:1.0,88:1.0,77:0.73,66:0.5,65s:0.02,55:0.08",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs CO 4bet": {
            "categories": [
              {
                "name": "All-in",
                "combos": "AA:0.4,AKs:0.97,ATs:0.03,A5s:0.12,AKo:0.82,KK:1.0,QQ:0.31,JJ:0.37",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "AA:0.6,AKs:0.02,AQs:1.0,AJs:1.0,ATs:0.68,A5s:0.87,A4s:1.0,AKo:0.17,KQs:1.0,KJs:0.74,KTs:0.71,AQo:0.51,QQ:0.69,JJ:0.62,JTs:0.55,TT:1.0,T9s:0.72,99:1.0,88:1.0,77:1.0,66:1.0,65s:1.0,55:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "SB vs BTN Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:1.0,A8s:1.0,A7s:1.0,A5s:1.0,A4s:0.7,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:1.0,K8s:0.06,K6s:0.1,AQo:1.0,KQo:1.0,QQ:1.0,QJs:1.0,QTs:1.0,Q9s:1.0,AJo:1.0,KJo:0.64,QJo:0.03,JJ:1.0,JTs:1.0,J9s:1.0,ATo:0.43,KTo:0.05,TT:1.0,T9s:1.0,T8s:0.72,99:1.0,98s:0.2,88:1.0,87s:0.08,77:1.0,76s:0.07,66:1.0,55:0.49",
                "color": "bg-orange-500"
              }
            ]
          },
          "SB vs BTN 4bet": {
            "categories": [
              {
                "name": "All-in",
                "combos": "AKs:1.0,A5s:0.74,AKo:1.0,KK:1.0,QQ:1.0,JJ:0.28,TT:0.27",
                "color": "bg-pink-500"
              },
              {
                "name": "Call",
                "combos": "AA:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:0.65,A8s:0.58,A7s:0.32,A5s:0.25,A4s:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:0.73,K6s:1.0,AQo:1.0,QJs:1.0,QTs:0.71,AJo:0.36,JJ:0.71,JTs:1.0,TT:0.72,T9s:1.0,99:1.0,98s:1.0,88:1.0,87s:1.0,77:1.0,76s:1.0,66:1.0,55:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "SB vs BB Iso": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AQs:1.0,AJs:1.0,A9s:1.0,A8s:0.78,A7s:0.24,A5s:0.87,A4s:0.19,A3s:0.09,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:0.73,K8s:0.04,K7s:0.09,K6s:0.22,K5s:0.08,K4s:0.04,AQo:1.0,KQo:0.43,QQ:1.0,QTs:1.0,Q9s:0.26,Q8s:0.09,AJo:0.59,KJo:0.24,QJo:0.16,JJ:1.0,JTs:1.0,J9s:0.48,J8s:0.16,ATo:0.35,KTo:0.27,QTo:0.16,JTo:0.18,TT:1.0,T9s:0.89,T8s:0.19,T7s:0.06,A9o:0.19,K9o:0.03,99:0.58,98s:0.17,97s:0.05,88:0.22,87s:0.26,86s:0.04,77:0.12,76s:0.36,66:0.05,65s:0.35,55:0.05,54s:0.25,44:0.02,AKs:1,ATs:1,QJs:1",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "A8s:0.21,A7s:0.75,A6s:1.0,A5s:0.12,A4s:0.79,A3s:0.9,A2s:1.0,K9s:0.26,K8s:0.95,K7s:0.9,K6s:0.77,K5s:0.91,K4s:0.95,K3s:1.0,K2s:1.0,KQo:0.56,Q9s:0.73,Q8s:0.9,Q7s:1.0,Q6s:1.0,Q5s:1.0,Q4s:1.0,Q3s:1.0,AJo:0.4,KJo:0.75,QJo:0.83,J9s:0.51,J8s:0.83,J7s:1.0,J6s:1.0,J5s:0.91,ATo:0.64,KTo:0.71,QTo:0.83,JTo:0.81,T9s:0.1,T8s:0.8,T7s:0.93,T6s:1.0,A9o:0.79,K9o:0.96,Q9o:0.4,J9o:0.53,T9o:1.0,99:0.41,98s:0.82,97s:0.94,96s:1.0,A8o:1.0,88:0.76,87s:0.73,86s:0.95,85s:0.32,A7o:1.0,77:0.87,76s:0.63,75s:1.0,66:0.94,65s:0.64,64s:0.93,A5o:1.0,55:0.94,54s:0.74,53s:0.47,A4o:0.14,44:0.97,33:1.0,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "SB vs BB 3bet": {
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AQs:0.61,A3s:0.06,A2s:0.69,AKo:1.0,KK:1.0,K6s:0.18,K5s:0.86,AQo:0.6,KQo:0.55,QQ:1.0,AJo:0.76,KJo:0.58,QJo:0.06,JJ:1.0,ATo:0.87,KTo:0.14,TT:0.44",
                "color": "bg-red-500"
              },
              {
                "name": "Call",
                "combos": "AQs:0.37,AJs:1.0,ATs:1.0,A9s:1.0,A8s:1.0,A7s:1.0,A6s:1.0,A5s:1.0,A4s:1.0,A3s:0.93,A2s:0.3,KQs:1.0,KJs:1.0,KTs:1.0,K9s:1.0,K8s:1.0,K7s:1.0,K6s:0.8,AQo:0.39,KQo:0.44,QJs:1.0,QTs:1.0,Q9s:1.0,Q8s:0.91,AJo:0.23,KJo:0.41,QJo:0.02,JTs:1.0,J9s:1.0,J8s:1.0,ATo:0.11,KTo:0.09,TT:0.54,T9s:1.0,T8s:1.0,99:1.0,98s:1.0,97s:0.08,88:1.0,87s:0.97,77:1.0,76s:0.69,66:1.0,65s:0.43,55:1.0,54s:0.58,44:1.0,33:0.63,22:0.53",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs LJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:0.71,AJs:0.46,ATs:0.4,A9s:0.07,A8s:0.23,A7s:0.19,A6s:0.13,A5s:0.37,A4s:0.39,A3s:0.19,A2s:0.1,AKo:0.59,KK:1.0,KQs:1.0,KJs:0.75,KTs:0.44,K9s:0.07,K8s:0.04,K7s:0.08,K6s:0.19,K5s:0.18,K4s:0.1,AQo:0.03,QQ:1.0,QJs:0.81,QTs:0.46,Q9s:0.16,Q8s:0.12,JJ:0.41,JTs:0.4,J9s:0.04,J8s:0.05,ATo:0.06,TT:0.25,T9s:0.21,T8s:0.07,99:0.09,98s:0.08,97s:0.04,88:0.09,87s:0.18,86s:0.03,77:0.06,76s:0.2,75s:0.14,66:0.07,65s:0.3,64s:0.09,55:0.04,54s:0.33,53s:0.07",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "AQs:0.28,AJs:0.53,ATs:0.59,A9s:0.92,A8s:0.76,A7s:0.8,A6s:0.86,A5s:0.62,A4s:0.61,A3s:0.8,A2s:0.9,AKo:0.4,KJs:0.24,KTs:0.55,K9s:0.92,K8s:0.95,K7s:0.91,K6s:0.8,K5s:0.81,K4s:0.89,K3s:0.9,K2s:0.77,AQo:0.97,KQo:1.0,QJs:0.18,QTs:0.53,Q9s:0.83,Q8s:0.87,Q7s:0.62,Q6s:0.74,Q5s:0.8,Q4s:0.22,AJo:1.0,KJo:1.0,QJo:0.6,JJ:0.58,JTs:0.59,J9s:0.95,J8s:0.94,J7s:0.39,ATo:0.93,KTo:0.24,QTo:0.44,JTo:0.49,TT:0.74,T9s:0.79,T8s:0.92,T7s:1.0,T6s:0.22,T9o:0.15,99:0.9,98s:0.91,97s:0.95,96s:1.0,95s:0.22,88:0.9,87s:0.81,86s:0.96,85s:1.0,77:0.93,76s:0.79,75s:0.85,74s:0.89,66:0.92,65s:0.7,64s:0.9,63s:0.6,55:0.95,54s:0.67,53s:0.92,52s:0.63,44:1.0,43s:1.0,42s:0.59,33:1.0,32s:0.23,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs HJ Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:0.61,ATs:0.43,A9s:0.37,A8s:0.09,A7s:0.15,A6s:0.04,A5s:0.5,A4s:0.32,A3s:0.16,AKo:0.97,KK:1.0,KQs:0.85,KJs:0.82,KTs:0.82,K9s:0.05,K7s:0.14,K6s:0.21,K5s:0.18,K4s:0.09,AQo:0.11,KQo:0.06,QQ:1.0,QJs:1.0,QTs:0.81,Q9s:0.27,Q8s:0.31,AJo:0.02,KJo:0.03,QJo:0.12,JJ:0.8,JTs:0.73,J9s:0.18,J8s:0.12,ATo:0.08,TT:0.43,T9s:0.33,T8s:0.15,99:0.23,98s:0.15,97s:0.1,88:0.14,87s:0.25,77:0.1,76s:0.2,75s:0.15,66:0.07,65s:0.31,64s:0.14,55:0.05,54s:0.34,53s:0.05",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "AJs:0.38,ATs:0.57,A9s:0.62,A8s:0.9,A7s:0.84,A6s:0.95,A5s:0.49,A4s:0.67,A3s:0.83,A2s:1.0,AKo:0.03,KQs:0.15,KJs:0.17,KTs:0.17,K9s:0.95,K8s:1.0,K7s:0.85,K6s:0.78,K5s:0.82,K4s:0.9,K3s:1.0,K2s:1.0,AQo:0.89,KQo:0.94,QTs:0.19,Q9s:0.72,Q8s:0.68,Q7s:0.95,Q6s:1.0,Q5s:0.97,Q4s:0.32,AJo:0.97,KJo:0.96,QJo:0.88,JJ:0.19,JTs:0.27,J9s:0.81,J8s:0.87,J7s:0.87,J6s:0.04,ATo:0.91,KTo:0.85,QTo:0.66,JTo:0.7,TT:0.56,T9s:0.66,T8s:0.84,T7s:1.0,T6s:0.17,A9o:0.65,T9o:0.2,99:0.76,98s:0.84,97s:0.89,96s:1.0,95s:0.32,98o:0.06,88:0.85,87s:0.74,86s:1.0,85s:1.0,77:0.89,76s:0.79,75s:0.84,74s:1.0,66:0.92,65s:0.68,64s:0.85,63s:0.68,A5o:0.24,55:0.95,54s:0.65,53s:0.94,52s:0.62,44:1.0,43s:1.0,42s:0.54,33:1.0,32s:0.23,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs CO Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:0.95,ATs:0.28,A9s:0.52,A8s:0.26,A7s:0.14,A6s:0.17,A5s:0.66,A4s:0.24,A3s:0.16,AKo:1.0,KK:1.0,KQs:0.81,KJs:0.66,KTs:0.84,K9s:0.23,K7s:0.09,K6s:0.24,K5s:0.18,K4s:0.04,AQo:0.41,KQo:0.19,QQ:1.0,QJs:1.0,QTs:1.0,Q9s:0.31,Q8s:0.36,Q6s:0.16,Q5s:0.07,Q4s:0.02,AJo:0.07,KJo:0.21,QJo:0.15,JJ:1.0,JTs:1.0,J9s:0.62,J8s:0.28,J7s:0.14,ATo:0.14,KTo:0.09,QTo:0.03,TT:0.73,T9s:0.64,T8s:0.15,T7s:0.15,A9o:0.05,99:0.43,98s:0.25,97s:0.08,88:0.27,87s:0.31,77:0.2,76s:0.33,75s:0.1,66:0.14,65s:0.43,64s:0.05,55:0.05,54s:0.3",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "AJs:0.04,ATs:0.72,A9s:0.47,A8s:0.73,A7s:0.85,A6s:0.82,A5s:0.33,A4s:0.75,A3s:0.83,A2s:1.0,KQs:0.18,KJs:0.33,KTs:0.15,K9s:0.76,K8s:1.0,K7s:0.9,K6s:0.75,K5s:0.81,K4s:0.95,K3s:1.0,K2s:1.0,AQo:0.58,KQo:0.81,Q9s:0.68,Q8s:0.64,Q7s:1.0,Q6s:0.84,Q5s:0.92,Q4s:0.97,Q3s:0.87,Q2s:0.5,AJo:0.92,KJo:0.79,QJo:0.84,J9s:0.38,J8s:0.71,J7s:0.85,J6s:0.92,J5s:0.39,J4s:0.04,ATo:0.85,KTo:0.9,QTo:0.96,JTo:1.0,TT:0.27,T9s:0.35,T8s:0.84,T7s:0.84,T6s:0.55,A9o:0.94,K9o:0.19,J9o:0.29,T9o:0.48,99:0.56,98s:0.74,97s:0.91,96s:1.0,95s:0.24,A8o:0.61,98o:0.18,88:0.72,87s:0.69,86s:1.0,85s:1.0,A7o:0.06,87o:0.05,77:0.79,76s:0.66,75s:0.89,74s:1.0,66:0.85,65s:0.56,64s:0.94,63s:0.68,A5o:0.56,55:0.95,54s:0.69,53s:1.0,52s:0.65,44:1.0,43s:1.0,42s:0.52,33:1.0,32s:0.08,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs BTN Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:0.75,A8s:0.25,A7s:0.34,A6s:0.18,A5s:1.0,A4s:0.72,A3s:0.26,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:0.75,K9s:0.35,K8s:0.37,K7s:0.24,K6s:0.2,K5s:0.04,AQo:0.9,KQo:0.44,QQ:1.0,QJs:0.58,QTs:0.7,Q9s:0.81,Q8s:0.19,AJo:0.43,KJo:0.25,QJo:0.15,JJ:1.0,JTs:1.0,J9s:1.0,J8s:0.57,J7s:0.38,J5s:0.12,ATo:0.06,KTo:0.24,QTo:0.18,JTo:0.12,TT:1.0,T9s:1.0,T8s:0.91,T7s:0.28,T6s:0.26,A9o:0.12,K9o:0.14,J9o:0.06,T9o:0.09,99:0.93,98s:0.76,97s:0.13,96s:0.03,A8o:0.12,88:0.61,87s:0.67,A7o:0.08,77:0.41,76s:0.68,A6o:0.07,66:0.29,65s:0.51,64s:0.03,A5o:0.08,55:0.12,54s:0.48,A4o:0.03",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "ATs:0.24,A9s:1.0,A8s:0.74,A7s:0.65,A6s:0.81,A4s:0.27,A3s:0.73,A2s:1.0,KTs:0.25,K9s:0.64,K8s:0.62,K7s:0.75,K6s:0.79,K5s:0.95,K4s:1.0,K3s:1.0,K2s:1.0,AQo:0.09,KQo:0.55,QJs:0.41,QTs:0.29,Q9s:0.18,Q8s:0.8,Q7s:1.0,Q6s:1.0,Q5s:1.0,Q4s:1.0,Q3s:1.0,Q2s:1.0,AJo:0.56,KJo:0.74,QJo:0.84,J8s:0.42,J7s:0.61,J6s:1.0,J5s:0.87,J4s:1.0,J3s:1.0,J2s:1.0,ATo:0.93,KTo:0.75,QTo:0.82,JTo:0.87,T8s:0.08,T7s:0.71,T6s:0.74,T5s:1.0,T4s:0.61,T3s:0.48,T2s:0.14,A9o:0.87,K9o:0.85,Q9o:1.0,J9o:0.93,T9o:0.9,99:0.06,98s:0.23,97s:0.87,96s:0.97,95s:0.94,A8o:0.87,K8o:0.86,Q8o:0.05,J8o:0.28,T8o:0.64,98o:0.6,88:0.39,87s:0.32,86s:1.0,85s:1.0,84s:0.15,A7o:0.91,K7o:0.3,87o:0.52,77:0.58,76s:0.31,75s:1.0,74s:1.0,73s:0.18,A6o:0.83,K6o:0.05,76o:0.34,66:0.7,65s:0.48,64s:0.96,63s:1.0,A5o:0.91,65o:0.04,55:0.87,54s:0.51,53s:1.0,52s:1.0,A4o:0.95,44:1.0,43s:1.0,42s:1.0,A3o:0.22,33:1.0,32s:0.62,22:1.0",
                "color": "bg-green-500"
              }
            ]
          },
          "BB vs SB Limp": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A9s:1.0,A8s:0.83,A7s:0.42,A6s:0.08,A5s:1.0,A4s:0.93,A3s:0.7,A2s:0.21,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,K9s:1.0,K8s:0.3,K7s:0.28,K6s:0.6,K5s:0.25,K4s:0.09,K3s:0.12,K2s:0.19,AQo:1.0,KQo:0.77,QQ:1.0,QJs:1.0,QTs:1.0,Q9s:0.66,Q4s:0.13,Q3s:0.21,Q2s:0.16,AJo:0.91,KJo:0.47,QJo:0.25,JJ:1.0,JTs:1.0,J9s:0.96,J8s:0.14,J6s:0.02,J4s:0.13,J3s:0.28,J2s:0.13,ATo:0.46,KTo:0.2,QTo:0.2,JTo:0.11,TT:1.0,T9s:1.0,T8s:0.71,T6s:0.19,T5s:0.26,T4s:0.47,T3s:0.43,T2s:0.24,A9o:0.56,K9o:0.19,Q9o:0.28,J9o:0.2,T9o:0.17,99:1.0,98s:0.78,97s:0.3,96s:0.39,95s:0.26,94s:0.39,93s:0.34,92s:0.29,A8o:0.08,K8o:0.04,Q8o:0.42,J8o:0.52,T8o:0.41,98o:0.31,88:1.0,87s:0.95,86s:0.65,85s:0.38,84s:0.68,83s:0.35,82s:0.49,A7o:0.07,K7o:0.16,Q7o:0.43,J7o:0.47,T7o:0.51,97o:0.45,87o:0.3,77:1.0,76s:0.93,75s:0.33,74s:0.65,73s:0.72,A6o:0.2,K6o:0.52,Q6o:0.71,J6o:0.51,T6o:0.56,96o:0.47,86o:0.37,76o:0.13,66:0.95,65s:0.52,64s:0.29,63s:0.41,62s:0.33,A5o:0.22,K5o:0.6,Q5o:0.57,J5o:0.41,T5o:0.26,95o:0.41,85o:0.38,75o:0.39,65o:0.24,55:0.82,54s:0.51,53s:0.07,52s:0.22,A4o:0.24,K4o:0.54,Q4o:0.29,J4o:0.26,T4o:0.27,94o:0.11,84o:0.15,74o:0.32,64o:0.22,54o:0.23,44:0.66,43s:0.07,42s:0.16,A3o:0.3,K3o:0.41,Q3o:0.2,J3o:0.17,T3o:0.25,93o:0.18,53o:0.35,43o:0.31,33:0.51,32s:0.33,A2o:0.44,K2o:0.35,Q2o:0.26,J2o:0.36,T2o:0.4,92o:0.14,52o:0.14,42o:0.16,32o:0.12,22:0.37",
                "color": "bg-orange-500"
              },
              {
                "name": "Check",
                "combos": "A8s:0.16,A7s:0.57,A6s:0.91,A4s:0.06,A3s:0.29,A2s:0.78,K8s:0.69,K7s:0.71,K6s:0.39,K5s:0.74,K4s:0.91,K3s:0.88,K2s:0.8,KQo:0.23,Q9s:0.33,Q8s:1.0,Q7s:1.0,Q6s:1.0,Q5s:1.0,Q4s:0.86,Q3s:0.78,Q2s:0.84,AJo:0.08,KJo:0.52,QJo:0.74,J9s:0.03,J8s:0.85,J7s:1.0,J6s:0.97,J5s:1.0,J4s:0.87,J3s:0.71,J2s:0.86,ATo:0.53,KTo:0.8,QTo:0.79,JTo:0.88,T8s:0.28,T7s:1.0,T6s:0.8,T5s:0.73,T4s:0.52,T3s:0.56,T2s:0.75,A9o:0.43,K9o:0.81,Q9o:0.71,J9o:0.8,T9o:0.82,98s:0.22,97s:0.69,96s:0.61,95s:0.73,94s:0.6,93s:0.65,92s:0.7,A8o:0.91,K8o:0.96,Q8o:0.57,J8o:0.47,T8o:0.58,98o:0.68,87s:0.04,86s:0.35,85s:0.61,84s:0.31,83s:0.65,82s:0.5,A7o:0.93,K7o:0.84,Q7o:0.56,J7o:0.52,T7o:0.48,97o:0.54,87o:0.69,76s:0.06,75s:0.66,74s:0.34,73s:0.27,72s:1.0,A6o:0.79,K6o:0.47,Q6o:0.28,J6o:0.48,T6o:0.43,96o:0.52,86o:0.62,76o:0.86,66:0.04,65s:0.47,64s:0.7,63s:0.58,62s:0.66,A5o:0.77,K5o:0.39,Q5o:0.43,J5o:0.58,T5o:0.73,95o:0.58,85o:0.61,75o:0.6,65o:0.75,55:0.18,54s:0.49,53s:0.92,52s:0.77,A4o:0.76,K4o:0.46,Q4o:0.7,J4o:0.74,T4o:0.72,94o:0.88,84o:0.84,74o:0.67,64o:0.77,54o:0.76,44:0.33,43s:0.92,42s:0.83,A3o:0.69,K3o:0.58,Q3o:0.79,J3o:0.82,T3o:0.74,93o:0.81,83o:1.0,73o:1.0,63o:1.0,53o:0.64,43o:0.68,33:0.48,32s:0.66,A2o:0.55,K2o:0.64,Q2o:0.73,J2o:0.63,T2o:0.59,92o:0.85,82o:1.0,72o:1.0,62o:1.0,52o:0.85,42o:0.84,32o:0.87,22:0.62",
                "color": "bg-gray-500"
              }
            ]
          },
          "BB vs SB Open": {
            "categories": [
              {
                "name": "3bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:0.38,A5s:0.61,A4s:0.41,A3s:0.13,AKo:1.0,KK:1.0,KQs:1.0,KJs:0.9,KTs:0.3,K6s:0.03,AQo:0.46,KQo:0.02,QQ:1.0,AJo:0.04,QJo:0.06,JJ:1.0,JTs:0.12,J6s:0.15,J5s:0.26,J4s:0.22,J3s:0.24,J2s:0.28,KTo:0.1,QTo:0.11,JTo:0.07,TT:1.0,T9s:0.34,T6s:0.23,T5s:0.37,T4s:0.35,T3s:0.25,T2s:0.35,K9o:0.22,Q9o:0.27,J9o:0.3,T9o:0.12,99:0.42,98s:0.46,97s:0.05,95s:0.22,94s:0.24,93s:0.1,A8o:0.06,K8o:0.26,Q8o:0.38,J8o:0.37,T8o:0.29,88:0.21,87s:0.33,A7o:0.19,K7o:0.32,Q7o:0.01,J7o:0.38,T7o:0.44,97o:0.09,77:0.15,76s:0.42,A6o:0.45,K6o:0.35,Q6o:0.29,66:0.17,65s:0.25,A5o:0.19,K5o:0.38,Q5o:0.1,55:0.07,54s:0.45,A4o:0.22,K4o:0.19,A3o:0.33,A2o:0.52",
                "color": "bg-orange-500"
              },
              {
                "name": "Call",
                "combos": "ATs:0.61,A9s:1.0,A8s:1.0,A7s:1.0,A6s:1.0,A5s:0.38,A4s:0.58,A3s:0.86,A2s:1.0,KJs:0.1,KTs:0.69,K9s:1.0,K8s:1.0,K7s:1.0,K6s:0.97,K5s:1.0,K4s:1.0,K3s:1.0,K2s:1.0,AQo:0.53,KQo:0.97,QJs:1.0,QTs:1.0,Q9s:1.0,Q8s:1.0,Q7s:1.0,Q6s:1.0,Q5s:1.0,Q4s:1.0,Q3s:1.0,Q2s:1.0,AJo:0.95,KJo:1.0,QJo:0.93,JTs:0.87,J9s:1.0,J8s:1.0,J7s:1.0,J6s:0.85,J5s:0.73,J4s:0.77,J3s:0.76,J2s:0.71,ATo:1.0,KTo:0.89,QTo:0.88,JTo:0.92,T9s:0.65,T8s:1.0,T7s:1.0,T6s:0.76,T5s:0.62,T4s:0.64,T3s:0.74,T2s:0.64,A9o:1.0,K9o:0.77,Q9o:0.72,J9o:0.7,T9o:0.87,99:0.58,98s:0.54,97s:0.94,96s:1.0,95s:0.78,94s:0.75,93s:0.89,92s:0.63,A8o:0.93,K8o:0.73,Q8o:0.61,J8o:0.62,T8o:0.7,98o:1.0,88:0.78,87s:0.67,86s:1.0,85s:1.0,84s:1.0,A7o:0.8,K7o:0.67,Q7o:0.08,J7o:0.03,T7o:0.52,97o:0.65,87o:1.0,77:0.85,76s:0.57,75s:1.0,74s:1.0,73s:1.0,A6o:0.54,K6o:0.64,Q6o:0.25,86o:0.27,76o:0.96,66:0.82,65s:0.74,64s:1.0,63s:1.0,62s:0.97,A5o:0.8,K5o:0.61,65o:0.8,55:0.92,54s:0.54,53s:1.0,52s:1.0,A4o:0.77,K4o:0.14,54o:0.94,44:1.0,43s:1.0,42s:1.0,A3o:0.66,33:1.0,32s:1.0,A2o:0.47,22:1.0",
                "color": "bg-green-500"
              }
            ]
          }
        },
        "links": [
          {
            "name": "BTN SQ vs HJ + LJ",
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AQs:0.72,AJs:0.04,A5s:0.27,AKo:1.0,KK:1.0,KQs:0.03,QQ:1.0,JJ:0.59,99:0.11,88:0.06",
                "color": "bg-red-500"
              }
            ]
          },
          {
            "name": "BTN SQ vs CO + HJ",
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:0.38,ATs:0.06,A5s:0.19,AKo:1.0,KK:1.0,KQs:0.61,AQo:0.04,QQ:1.0,JJ:0.95,TT:0.2,99:0.02",
                "color": "bg-red-500"
              }
            ]
          },
          {
            "name": "SB SQ vs BTN + CO",
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:1.0,A5s:0.38,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:1.0,AQo:1.0,KQo:0.44,QQ:1.0,QJs:1.0,QTs:1.0,AJo:0.49,KJo:0.3,JJ:1.0,JTs:1.0,J9s:0.2,TT:1.0,T9s:0.35,99:1.0,88:0.83,77:0.44,66:0.3,54s:0.1",
                "color": "bg-red-500"
              }
            ]
          },
          {
            "name": "BB vs SB 3b BTN",
            "categories": [
              {
                "name": "4bet",
                "combos": "AA:1.0,AKs:1.0,AQs:1.0,AJs:1.0,ATs:0.62,AKo:1.0,KK:1.0,KQs:1.0,KJs:1.0,KTs:0.33,AQo:0.73,QQ:1.0,QJs:0.13,JJ:1.0,TT:1.0,99:0.69",
                "color": "bg-red-500"
              }
            ]
          }
        ]
      }
    ]
  }
];

var ACTIONS = {
    "RFI": ["Open"],
    "IP": ["Open", "Limp", "3bet", "4bet"],
    "OOP": ["Open", "3bet", "4bet", "Iso"]
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