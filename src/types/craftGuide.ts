interface description {
    name: string;
    value: string;
}

export interface CraftProps {
    title: string;
    item:{
        name: string;
        atributes: string[];
        type: 'hat'
        description: description[];

    }
    requeriments: string[];
}


export class CraftGuide {
    title: string;
    item:{
        name: string;
        atributes: string[];
        type: 'hat'
        description: description[];

    }
    requeriments: string[];
    type: 'craft';


    constructor({
        title, item,
        requeriments,
    }:CraftProps){
        this.title = title;
        this.item = item;
        this.requeriments = requeriments
        this.type = 'craft'
    }
}

export const craftGuidesData = [
    new CraftGuide({
        title: 'Pirate Dagger',
        requeriments: [
            '15m de zeny',
            '3 #5019 Corsair[0]',
            '5 Pirate Bandana[0]',
            '5 Red Scarf',
            '300 Broken Sword',
            '300 Red Muffler',
            '5 White Dyestuffs',
            '5 Scarlet Dyestuffs',
            '1 Porcellio Card',
            '1 Pirate Skeleton Card'
        ],
        item: {
            name: 'Pirate Dagger',
            atributes: [
                'ATK +5'
            ],
            description:[
                {
                    name: 'Class',
                    value: 'Headgear'
                },
                {
                    name: 'Defense',
                    value: '0'
                },
                {
                    name: 'Position',
                    value: 'Lower'
                },
                {
                    name: 'Weight',
                    value: '10'
                },
                {
                    name: 'Lvl requeriment',
                    value: '60'
                },
                {
                    name: 'Jobs',
                    value: 'All except novice'
                },
            ],
            type: 'hat'
        }
    })
]