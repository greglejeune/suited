var RANGES = [
    {
        "name": "z50",
        "deeps": [
            {
                "name": "100bb",
                "seats": [
                    {
                        "name": "BB",
                        "style": "top: 75px; left: 0px;"
                    },
                    {
                        "name": "SB",
                        "style": "top: 150px; left: 56px;"
                    },
                    {
                        "name": "BTN",
                        "style": "top: 150px; right: 56px;"
                    },
                    {
                        "name": "CO",
                        "style": "top: 75px; left: 248px;"
                    },
                    {
                        "name": "HJ",
                        "style": "top: 0px; right: 56px;"
                    },
                    {
                        "name": "UTG",
                        "style": "top: 0px; left: 56px;"
                    }
                ],
                "ranges": {
                    "BTN Open": {
                        "categories": [
                            {
                                "name": "Raise",
                                "combos": "AA:1,AKs:1,AQs:0.6667,AJs:0.3333,ATs:0.3333,A9s:0.6273,A8s:0.7128,A7s:0.3333,A6s:0.1317,A5s:0.6667,A4s:0.6667,A3s:0.1926,AKo:0.6667,KK:1,KQs:0.3333,KJs:0.6412,KTs:0.6667,K9s:0.387,AQo:0.5,KQo:0.5714,QQ:0.6667,QJs:0.6667,QTs:0.6667,AJo:0.07077,KJo:0.2239,JJ:0.3333,JTs:0.4111,TT:0.3515,T9s:0.3854,99:0.3333,98s:0.0003658,88:0.4624,87s:0.1667,77:0.4082,76s:0.2515,66:0.317,65s:0.3364,55:0.1854,54s:0.2706",
                                "color": "bg-yellow-600"
                            },
                            {
                                "name": "Flat",
                                "combos": "AQs:0.3333,AJs:0.6667,ATs:0.6667,A9s:0.3137,A8s:0.2769,A5s:0.3333,A4s:0.3333,A3s:0.1615,AKo:0.3333,KQs:0.6667,KJs:0.3588,KTs:0.3333,AQo:0.5,KQo:0.1429,QQ:0.3333,QJs:0.3333,QTs:0.3333,JJ:0.6667,JTs:0.5889,TT:0.6485,T9s:0.2166,99:0.6667,98s:0.2255,88:0.5376,87s:0.1667,77:0.5918,76s:0.2413,66:0.3566,65s:0.3272,55:0.3707,54s:0.3647,44:0.21,33:0.2382,22:0.2291",
                                "color": "bg-green-600"
                            }
                        ]
                    },
                    "CO Open": {
                        "categories": [
                            {
                                "name": "Open",
                                "combos": "AA:1,AKs:1,AQs:1,AJs:1,ATs:1,A9s:1,A8s:1,A7s:1,A6s:1,A5s:1,A4s:1,A3s:1,A2s:0.72,AKo:1,KK:1,KQs:1,KJs:1,KTs:1,K9s:1,K8s:1,K7s:0.3333,K5s:0.3333,AQo:1,KQo:1,QQ:1,QJs:1,QTs:1,Q9s:1,AJo:1,KJo:0.6667,QJo:0.4597,JJ:1,JTs:1,J9s:0.3333,ATo:1,KTo:0.3333,QTo:0.3333,TT:1,T9s:1,99:1,98s:0.2,88:1,87s:0.3333,77:1,76s:0.3333,66:0.7536,65s:0.3333,55:0.5676,54s:0.3333,44:0.3333,33:0.3333,22:0.3333",
                                "color": "bg-yellow-600"
                            }
                        ]
                    }
                }
            }
        ]
    },
    {
        "name": "MTT",
        "deeps": [
            {
                "name": "100bb"
            },
            {
                "name": "50bb"
            }
        ]
    }
];

var ACTIONS = {
    "RFI": ["Open"],
    "IP": ["Open", "4bet"],
    "OOP": ["3bet", "5bet"]
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