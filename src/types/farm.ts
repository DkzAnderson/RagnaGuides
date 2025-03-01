import { enemy } from "./enemy";
import { item } from "./item";
import { enemiesData } from "../data/enemies";
import { itemsData } from "../data/items";
import { job } from "./job";
/*
    - titulo
    - subtitulo
    - requisitos
    - ganacias aproximadas
    - descripción

    - objetos obtenibles
    - enemigos a eliminar
    - zona del farmeo

*/

export interface FarmProps {
    title: string;
    clase: job[];
    level: string;
    zone: string;    
    description: string[];
    obtainableItems: item[] | number[];
    enemiesToKill: enemy[] | number[];
    autoloot: string;
    alootid: number[];
    profits: string;
}

export interface FarmGuideProps {
    title: string; 
    values: Farm[];
    type?: 'farm';
}

export class Farm{
    title: string;
    clase: job[];
    level: string;
    zone: string;    
    description: string[];
    obtainableItems: item[] | number[];
    enemiesToKill: enemy[] | number[];
    autoloot: string;
    alootid: number[];
    profits: string;

    constructor({
        title,clase,level,
        zone, description,
        obtainableItems,
        enemiesToKill,
        autoloot,alootid,
        profits
    }:FarmProps){
        this.title = title
        this.clase = clase
        this.level = level
        this.zone = zone  
        this.description = description
        this.obtainableItems = obtainableItems
        this.enemiesToKill = enemiesToKill
        this.autoloot = autoloot
        this.alootid = alootid
        this.profits = profits
    }

    GetFarmData(){
        let box:enemy[] = []
        let boxI: item[] = []

        this.enemiesToKill.forEach(element => {
            enemiesData.forEach(npc => {
                if(npc.id === element) box.push(npc);
            })
        });

        this.obtainableItems.forEach(element => {
            itemsData.forEach(i =>{
                if(i.id === element) boxI.push(i)
            })
        });

        return new Farm({
            title: this.title,
            clase: this.clase,
            level: this.level,
            zone: this.zone,
            description: this.description,
            obtainableItems: boxI,
            enemiesToKill: box,
            autoloot: this.autoloot,
            alootid: this.alootid,
            profits: this.profits,
        });
    }
}

export class FarmGuide{
    title: string;
    values: Farm[];
    type: 'farm';

    constructor({
        title,
        values,
        type='farm'
    }:FarmGuideProps){
        this.title = title;
        this.values = values;
        this.type = type
    }

}
