import React from "react";
import { job } from "../types/job";
import { GiSacrificialDagger } from "react-icons/gi";
import { GiCloakDagger } from "react-icons/gi";
import { GiBlacksmith } from "react-icons/gi";
import { GiGearHammer } from "react-icons/gi";
import { GiArcher } from "react-icons/gi";
import { GiArrowScope } from "react-icons/gi";
import { FaBible } from "react-icons/fa";
import { GiHolyGrail } from "react-icons/gi";
import { GiFirePunch } from "react-icons/gi";
import { GiCheckedShield } from "react-icons/gi";
import { GiCrossShield } from "react-icons/gi";
import { GiSwordsEmblem } from "react-icons/gi";
import { GiSwordsPower } from "react-icons/gi";
import { FaHatWizard } from "react-icons/fa";
import { GiWizardStaff } from "react-icons/gi";
import { GiNinjaStar } from "react-icons/gi";
import { GiRollingEnergy } from "react-icons/gi";
import { GiPunch } from "react-icons/gi";




console.log(React.version)

export const jobsData = {
    assasin: new job({
        name: 'Assasin',
        icon: <GiSacrificialDagger/>,
        color: '#8228B5'
    }),
    assasinCross: new job({
        name: 'Assasin Cross',
        icon: <GiCloakDagger/>,
        color: '#411B98'
    }),
    whiteSmith: new job({
        name: 'WhiteSmith',
        icon: <GiGearHammer/>,
        color: '#B88D54'
    }),
    blackSmith: new job({
        name: 'BlackSmith',
        icon: <GiBlacksmith/>,
        color: '#7D4A14'
    }),
    hunter: new job({
        name: 'Hunter',
        icon: <GiArcher/>,
        color: '#30D644'
    }),
    sniper: new job({
        name: 'Sniper',
        icon: <GiArrowScope/>,
        color: '#057F00'
    }),
    highPriest: new job({
        name: 'HighPriest',
        icon: <GiHolyGrail/>,
        color: '#D6B600'
    }),
    priest: new job({
        name: 'Priest',
        icon: <FaBible/>,
        color: '#D6CF7D'
    }),
    champion: new job({
        name: 'Champion',
        icon: <GiFirePunch/>,
        color: '#D66D4B'
    }),
    crusader: new job({
        name: 'Crusader',
        icon: <GiCheckedShield/>,
        color: '#D694AB'
    }),
    paladin: new job({
        name: 'Paladín',
        icon: <GiCrossShield/>,
        color: '#D65A91'
    }),
    knight: new job({
        name: 'Knight',
        icon: <GiSwordsEmblem/>,
        color: '#B94844'
    }),
    lordKnight: new job({
        name: 'Lord Knight',
        icon: <GiSwordsPower/>,
        color: '#BD2A22'
    }),
    wizzard: new job({
        name: 'Wizzard',
        icon: <FaHatWizard/>,
        color: '#54C2D6'
    }),
    highWizzard: new job({
        name: 'High Wizzard',
        icon: <GiWizardStaff/>,
        color: '#2328B9'
    }),
    ninja: new job({
        name: 'Ninja',
        icon: <GiNinjaStar/>,
        color: '#8EA005'
    }),
    soulLinker: new job({
        name: 'Soul Linker',
        icon: <GiRollingEnergy/>,
        color: '#E0D563'
    }),
    starGladiator:new job({
        name: 'Star Gladiator',
        icon: <GiPunch/>,
        color: '#811300'
    }),
    
}