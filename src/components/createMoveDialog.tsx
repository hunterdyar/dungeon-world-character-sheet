//define custom type for move
//dialog and move creation window
//save move to the allMoves list.

import {useState} from "react";
import {InitMove, Move} from "../data/moveType";
import {Input} from "@mui/material";
import userDataHook from "../hooks/userDataHook";

function CreateMoveDialog()
{
    const [allMoves, setAllMoves] = userDataHook("allMoves",[{}]);
    const [move, setMove] = useState(InitMove);
    const [name, setName] = useState("");

    const AddMoveToAllMoves = (move: Move) =>
    {
        let m = allMoves;
        //replace existing move for updating
        let oldMove = allMoves.find(function (x: Move) {
            return x.id === m.id;
        });
        if(oldMove) {
            m.remove(oldMove);
        }
        m.push(move);
        setAllMoves(m);
    }

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let m = move;
        m.name = name;
        // AddMoveToAllMoves(m);
    }

    const submit = () =>{
        let m = InitMove();
        m.id = moveNameToID(name);
        m.name = name;
        setMove(m);
    }

    return (
        <Input type={"text"} onChange = {onNameChange} value = {name} />
    );
}

//dialogue
//on cluse does save.

function moveNameToID(name: string): string
{
    //todo: trim, lowercase, replace spaces with - and remove s
    name = name.toLowerCase().replace(' ','-');
    return name;
}

export default CreateMoveDialog;