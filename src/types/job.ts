import { ReactNode } from "react";

interface jobProps{
    name: string;
    icon: ReactNode;
    color: string;
}

export class job {
    name: string;
    icon: ReactNode;
    color: string;

    constructor({name,icon,color}:jobProps){
        this.name = name;
        this.icon = icon;
        this.color = color;
    }
}

