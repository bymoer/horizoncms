import { stateWindmill, stateEnum } from "../../interfaces/interfaces";
import { stateSolar, solarStateEnum } from "../../interfaces/interfaces";

export const windmillData: stateWindmill[] = [
    {
        id: "1",
        category: "windmill",
        name: "Alpha",
        location: "Vejle",
        age: 5,
        totalProduction: 1257,
        state: {
            blades: stateEnum.NEW,
            clutch: stateEnum.MODERATE,
        },
        production: {
            current: 5,
            lasthour: 67,
            last24h: 987
        },
        productionData: [
            {
              name: '1/12 - 2023',
              gwh: 357
            },
            {
              name: '2/12 - 2023',
              gwh: 241
            },
            {
              name: '3/12 - 2023',
              gwh: 675
            },
            {
              name: '4/12 - 2023',
              gwh: 399
            },
            {
              name: '5/12 - 2023',
              gwh: 876
            },
            {
              name: '6/12 - 2023',
              gwh: 564
            },
          ]
          
    },
    {
        id: "2",
        category: "windmill",
        name: "Beta",
        location: "Esbjerg",
        age: 9,
        totalProduction: 7251,
        state: {
            blades: stateEnum.MODERATE,
            clutch: stateEnum.OLD,
        },
        production: {
            current: 3,
            lasthour: 48,
            last24h: 1250
        },
        productionData: [
            {
              name: '1/12 - 2023',
              gwh: 457
            },
            {
              name: '2/12 - 2023',
              gwh: 341
            },
            {
              name: '3/12 - 2023',
              gwh: 275
            },
            {
              name: '4/12 - 2023',
              gwh: 899
            },
            {
              name: '5/12 - 2023',
              gwh: 176
            },
            {
              name: '6/12 - 2023',
              gwh: 264
            },
          ]
    },
    {
        id: "3",
        category: "windmill",
        name: "Gamma",
        location: "Thisted",
        age: 5,
        totalProduction: 5334,
        state: {
            blades: stateEnum.MODERATE,
            clutch: stateEnum.MODERATE,
        },
        production: {
            current: 9,
            lasthour: 98,
            last24h: 2350
        },
        productionData: [
            {
              name: '1/12 - 2023',
              gwh: 457
            },
            {
              name: '2/12 - 2023',
              gwh: 941
            },
            {
              name: '3/12 - 2023',
              gwh: 175
            },
            {
              name: '4/12 - 2023',
              gwh: 599
            },
            {
              name: '5/12 - 2023',
              gwh: 476
            },
            {
              name: '6/12 - 2023',
              gwh: 664
            },
          ]
    }
]

export const solarData: stateSolar[] = [
    {
        id: "1",
        category: "solarpanels",
        name: "Omega",
        location: "Thy",
        age: 5,
        totalProduction: 3597,
        state: {
            panels: solarStateEnum.NEW,
            efficiency: solarStateEnum.OHDEAR,
            ihavenoidea: solarStateEnum.MODERATE,
        },
        production: {
            current: 5,
            lasthour: 25,
            last24h: 9875
        },
        productionData: [
            {
              name: '1/12 - 2023',
              gwh: 357
            },
            {
              name: '2/12 - 2023',
              gwh: 241
            },
            {
              name: '3/12 - 2023',
              gwh: 675
            },
            {
              name: '4/12 - 2023',
              gwh: 399
            },
            {
              name: '5/12 - 2023',
              gwh: 876
            },
            {
              name: '6/12 - 2023',
              gwh: 564
            },
          ]
    },
    {
        id: "2",
        category: "solarpanels",
        name: "Psi",
        location: "Nordfyn",
        age: 9,
        totalProduction: 9597,
        state: {
            panels: solarStateEnum.NEW,
            efficiency: solarStateEnum.OHDEAR,
            ihavenoidea: solarStateEnum.MODERATE,
        },
        production: {
            current: 2,
            lasthour: 36,
            last24h: 18875
        },
        productionData: [
            {
              name: '1/12 - 2023',
              gwh: 857
            },
            {
              name: '2/12 - 2023',
              gwh: 1241
            },
            {
              name: '3/12 - 2023',
              gwh: 675
            },
            {
              name: '4/12 - 2023',
              gwh: 1399
            },
            {
              name: '5/12 - 2023',
              gwh: 376
            },
            {
              name: '6/12 - 2023',
              gwh: 264
            },
          ]
    }
]