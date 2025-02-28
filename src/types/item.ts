export interface ItemProps {
    id: number;
    name: string;
    dropRate: number;
    type?: 'card' | 'others'; 
    image?: string;
}

export class item {
    id: number;
    name: string;
    dropRate: number;
    image: string;
    type: 'card' | 'others'; 
    
    constructor({
        id, name,
        dropRate,
        type = 'others'
    }: ItemProps) {
        this.id = id;
        this.name = name;
        this.dropRate = dropRate;
        this.type = type

        if (type === 'card') {
            this.image = `https://file5s.ratemyserver.net/items/small/card.gif`
        } else {
            this.image = `https://file5s.ratemyserver.net/items/small/${this.id}.gif`
        }


    }
}


