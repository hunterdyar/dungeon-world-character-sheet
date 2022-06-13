import {Card, Container, Stack} from "@mui/material";
import React, {useState} from "react";
import SavedNumberInput from "./savedInput";
import getData from "../hooks/userDataHook";
import statToModifier from "../hooks/statProcesses";
function BaseStat({stat, changeCallback}: {stat: string, changeCallback?:Function}) {

    let val = parseInt(getData(stat,10).toString());//this feels like ive done something wrong.
    if(isNaN(val))
    {
        val = 10;
    }
    const [statVal,setStatVal] = useState(val);

    const change = (v: number) =>{
        if(!isNaN(v)) {
            setStatVal(v);

            //pass callback along
            if (changeCallback) {
                changeCallback(v);
            }
        }
    }
    return(
     <Card>
         <Container>
             {statName(stat)}
             <Stack>
             <SavedNumberInput saveKey={stat} defaultVal={10} changeCallback={change}/>
                 <h1>{statToModifier(statVal)}</h1>
             </Stack>
         </Container>
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