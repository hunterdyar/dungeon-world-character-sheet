import {default as characterClasses} from "./characterClasses.json";
import {default as allMoves} from "./allMoves.json";

function getClassFromID(c:string)
{
    if(c==="barbarian")
    {
        return characterClasses.barbarian;
    }
    return characterClasses.barbarian;
}

export function allMoveIDs()
{
    return allMoves.map(function(m){
    return m.id;
    });
}

export default getClassFromID;