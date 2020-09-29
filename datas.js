var RANGES = [
  {
    "name": "CASH",
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
          "HJ Open": {
            "categories": [
              {
                "name": "Raise",
                "combos": "AA,KK,QQ,JJ,TT,99,88,77,66,55:0.75,44:0.25,33:0.25,22:0.25,AK,AQ,AJ,AT,A9s,A9o:0.25,A8s,A7s,A6s,A5s,A4s,A3s,A2s,KQ,KJ,KT,K9s,K8s,K7s,K6s,K5s:0.75,QJ,QTs,QTo:0.5,Q9s,Q8s:0.5,JTs,JTo:0.12,J9s,T9s,T8s:0.5,98s:0.5,87s:0.5,76s:0.25,65s:0.25,54s:0.25",
                "color": "bg-orange-500"
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