import {useEffect, useState} from 'react';
import UseDataHooks from "../hooks/userDataHook";
import {default as allMoves} from "../data/allMoves.json";
import {Grid} from "@mui/material";
import {Move} from "../data/moveType";

//todo: move keys to file (actually, refactor to use context API)
export const moveListKey = "moveList";

function MoveList({availableAt = 0, chosenClass, changed}:{availableAt?: number, chosenClass:{defaultMoves:string[]},changed?:boolean})
{
    const [selectedMoves] = UseDataHooks(moveListKey,chosenClass.defaultMoves);

    const [moves, setMoves] = useState(allMoves.filter(x=>selectedMoves.includes(x.id)));
    useEffect(()=>{
        setMoves(allMoves.filter(x=>selectedMoves.includes(x.id) && x.availableAt >= availableAt));
    },[availableAt,selectedMoves]);

    return(
        <Grid container>
            {moves.map((m)=>{
                return(
                    <Grid item key={m.id}>
                        <MoveDisplay move={m as Move}/>
                    </Grid>
                );
            })}
        </Grid>
    );

}

function MoveDisplay({move}:{move: Move}){
    return <span>
        <h3>{move.name}</h3>
        <p>{move.desc}</p>
    </span>
}

export default MoveList;