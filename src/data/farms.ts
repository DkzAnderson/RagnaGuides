import { Farm, FarmGuide } from "../types/farm";

export const FarmsData = [
    new FarmGuide({
        title: 'Geffen Dungeon',
        values: [
            new Farm(            {
                title: 'Marionnete Doll e Infiltrator',
                clase: ['Paladín', 'Crusader', 'High Priest', 'Sniper'],
                level: '60+',
                zone: 'Geffen Dungeon Piso 3 (MVP)',
                enemiesToKill: [
                    1061,1143,1179,1036
                ],
                obtainableItems: [
                    984,756,510,505,
                    5141,1520,1260,
                    999,1261,603,
                    4127, 2608, 2333,
                    2407, 2605, 2609,
                    4113, 4102, 4110,
                    4115, 1039
                ],
                autoloot: '26%',
                alootid: [510,756,1039],
                description: [
                    'Para paladines: mobear varios enemigos y matarlos con GC, sanarse y continuar. Cuidado con el MVP.',
                    'Para Snipers: matar con ds a los nightmare, marionette , llevar daño sagrado.',
                    'Para HighPriest: mobear varios enemigos usar safety+ME y usar flywing.',
                    'los HP tambien pueden optar por usar flywing, caster ME y usar flywing, repetir proceso e iran muriendo eventualmente.'
                ],
                profits: ''

            }),
        ]
    }),

    new FarmGuide({
        title: 'Rachel Sanctuary',
        values: [
            new Farm(            {
                title: 'Hodremlin',
                zone: 'Rachel Sanctuary Piso 3',
                level: '80+',
                clase: ['Paladín','Crusader'],
                enemiesToKill: [1773],
                obtainableItems: [587,7563,4413],
                autoloot: '1%',
                alootid: [587,7563],
                description: [],
                profits: ''
            }),
            new Farm(            {
                title: 'Farmeo de vanberks e isillas',
                zone: 'Rachel Sanctuary Piso 1',
                level: '80+',
                clase: [
                    'Wizard',
                    'High Wizard',
                    'Asassin',
                    'Assasin Cross',
                    'Sniper',
                    'Knight',
                    'Lord Knight',
                ],
                enemiesToKill: [1772,1771,1773],
                obtainableItems: [
                    2422,2601,2610,4412,
                    7563,7568,526,4411,
                    5172,13027
                ],
                autoloot: '3%',
                alootid: [7563,7568],
                description: [
                    'Mobear varios vanberks e isillas y luego matar con ataques en area. Tener cuidado con los Hodremlin.',
                    '147k matando con assasinCross+infil'
               ],
                profits: ''
            })
        ]
    }),

    new FarmGuide({
        title: 'Geffenia',
        values: [
            new Farm(
                {
                    title: 'Incubus, Succubus y Abysmal Knight',
                    zone: 'Geffenia Piso 3',
                    level: '90+',
                    clase: ['Sniper'],
                    enemiesToKill: [1374,1370,1219],
                    obtainableItems: [
                        522,505,985,984,2610,
                        2613,2621,1472,2407,
                        4269,4218,4140
                    ],
                    autoloot: '12%',
                    alootid: [522,505,985,984],
                    description: [
                        'llevar endow de daño sagrado',
                        'cacion de fortune kiss(crit) y poem (aftercast)',
                        '520k cada 5m matando de 3ss, 632k cada 5m si se venden las blue potion'
                    ],
                    profits: ''
                })
        ]
    }),

    new FarmGuide({
        title: 'Glast Heim',
        values: [
            new Farm(
                {
                    title: 'Raydric, Raydric Archer y Abysmal Knight cards',
                    zone: 'Glast Heim Chivalry Piso 2',
                    level: '85+',
                    clase: [   
                    'Sniper',
                    'Crusader',
                    'Paladin',
                    'Assasin',
                    'Assasin Cross'
                    ],
                    enemiesToKill: [1163,1276,1219,1132],
                    obtainableItems: [
                        985,4133,1158,4187,
                        984,1162,4140,2108,
                        1127,4136
                    ],
                    autoloot: '1%',
                    alootid: [985,984],
                    description: [
                        'Utilizar ataques con elemento sagrado o endow de este mismo elemento'
                    ],
                    profits: ''
                })
        ]
    }),

    new FarmGuide({
        title: 'Sphynx',
        values: [
            new Farm(
                {
                    title: 'Farmeo de Pasanas',
                    zone: 'Sphynx Piso 5 (MVP)',
                    level: '80+',
                    clase: [
                    'Star Gladiator',
                    'Sniper',
                    'Assasin',
                    'Assasin Cross'
                    ],
                    enemiesToKill: [1154],
                    obtainableItems: [1217,2522,7110,4099],
                    autoloot: '4%',
                    alootid: [1217,2522,7110],
                    description: [
                        
                    'Llevar daño de agua',
                
                    ],
                    profits: '647k de zeny cada 5m matando de 2ds'
                })
        ]
    }),

    new FarmGuide({
        title: 'Juperos Core',
        values: [
            new Farm(
                {
                    title: 'Farmeo de Venatus',
                    zone: 'Juperos Dungeon piso 1',
                    level: '85+',
                    clase: ['Assasin Cross', 'Assasin'],
                    enemiesToKill: [
                        1675,1676,1677,1678,1679
                    ],
                    obtainableItems: [
                        985,999,7094,7317,
                        7358,7356,7359,7357,
                        12127,4369,13157,2656
                        ,13164
                    ],
                    autoloot: '100%',
                    alootid: [],
                    description: [
                        'se debe tener un arma con 2 peco peco egg (20%+ daño a formless)',
                        'ir sin elemento',
                        'juntar mobs y matar a grimtooth',
                    ],
                    profits: '523k cada 5m vendiendo todo (sin Deadly posion) '
                
                })
        ]
    }),

    new FarmGuide({
        title: 'Goryun Shrine',
        values: [
            new Farm(
                {
                    title: 'Farmeo de Royal Jelly',
                    zone: 'Goryun Dungeon Piso 1',
                    level: '60+',
                    clase: [
                    'Sniper',
                    'Hunter',
                    'Asassin',
                    'Assasin Cross',
                    'BlackSmith',
                    'WhiteSmith'
                    ],
                    enemiesToKill: [1410,1417],
                    obtainableItems: [
                        526,7164,604,603,518,
                        7167,7161,4281
                    ],
                    autoloot: '2%',
                    alootid: [518,526,604,7161,7164,7167],
                    description: [
                        'Atacar con elemento de Fuego y evitar las mariposas q se ven en el mapa.',
                    ],
                    profits: '770k Cada 5m matando de 2ds'
                })
        ]
    }),
]
