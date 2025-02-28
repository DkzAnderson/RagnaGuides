export interface EnemyProps {
    id: number;
    name: string;
    image?: string;
}

export class enemy {
    id: number;
    name: string;
    image: string;

    constructor({id, name}: EnemyProps){
        this.name = name;
        this.id = id;
        this.image = `https://file5s.ratemyserver.net/mobs/${id}.gif`
    }
}