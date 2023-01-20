export enum stateEnum {
    NEW,
    MODERATE,
    USED,
    OLD,
    OHDEARGODHELPME
}

export enum solarStateEnum {
    NEW,
    MODERATE,
    OLD,
    OHDEAR,
}

export interface stateWindmill {
    id: string,
    category: string,
    name: string,
    location: string,
    age: number,
    totalProduction: number,
    state: {
        blades: stateEnum,
        clutch: stateEnum,

    },
    production: {
        current: number,
        lasthour: number,
        last24h: number
    },
    productionData: data []
}

export interface stateSolar {
    id: string,
    category: string,
    name: string,
    location: string,
    age: number,
    totalProduction: number,
    state: {
        panels: solarStateEnum,
        efficiency: solarStateEnum,
        ihavenoidea: solarStateEnum,
    },
    production: {
        current: number,
        lasthour: number,
        last24h: number
    },
    productionData: data[]
}

interface data{
    name: string,
    gwh: number
}


export interface pageManagement {
    selectedId: string,
    siteCategory: string
}