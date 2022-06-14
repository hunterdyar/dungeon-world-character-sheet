import {default as characterClasses} from "./characterClasses.json";
import {default as includedMoves} from "./includedMoves.json";

function getClassFromID(c:string)
{
    if(c==="barbarian")
    {
        return characterClasses.barbarian;
    }
    return characterClasses.barbarian;
}

export var allMoves: any[];

export function allMoveIDs()
{
    console.log("get all moves");
    let s = localStorage.getItem("allMoves");
    if(s !== null)
    {
        // s = "includedMoves";
        allMoves = JSON.parse(s);
    }else{
        allMoves = includedMoves;
    }

    return allMoves.map(function(m:{id:string}){
        return m.id;
    });

}

export default getClassFromID;