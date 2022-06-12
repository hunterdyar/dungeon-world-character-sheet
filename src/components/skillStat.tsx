import {Card} from "@mui/material";
import React from "react";
import SavedNumberInput from "./savedInput";

function BaseStat({stat, changeCallback}: {stat: string, changeCallback?:Function}) {

 return(
     <Card>
         {statName(stat)}
         <SavedNumberInput saveKey={stat} defaultVal={10} changeCallback={changeCallback}/>
    </Card>
 );
}

function statName(stat: string)
{
    if(stat === "str")
    {
        return <h2>Strength</h2>
    }else if(stat === "dex")
    {
        return <h2>Dexterity</h2>
    }else if(stat === "con")
    {
        return <h2>Constitution</h2>
    }else if(stat === "int")
    {
        return <h2>Intelligence</h2>
    }else if(stat === "wis")
    {
        return <h2>Wisdom</h2>
    }else if(stat === "cha")
    {
        return <h2>Charisma</h2>
    }
}
export default BaseStat;