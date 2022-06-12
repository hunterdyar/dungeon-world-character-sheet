import React, {useState} from "react";
import {InputBase} from "@mui/material";
import UseDataHooks from "../hooks/userDataHook";

const characterNameKey = "characterName";

function CharacterName()
{
    const [name,setCharacterName] = UseDataHooks(characterNameKey,"");
    const [tempName, setTempName] = useState(name.toString());

    if(name === {} || name === ""){
        document.title = "Dungeon World Character Sheet";
    }else{
        document.title = name + " - Character Sheet";
    }
    // const [inputState, setInputState] = useState(false);
    const change = (e: React.FocusEvent<HTMLInputElement>)=>{
        setTempName(e.target.value);
    }
    const setName = ()=>{
        setCharacterName(tempName)
        document.title = tempName;
    }

    return (
        <span>
         <InputBase sx={{ ml: 1, flex: 1,fontSize: "3em"}}
                    placeholder="Character Name"
                    value = {tempName} onChange={change} onBlur={setName}
                    type={"text"}
            />
        </span>

    );
}

export default CharacterName;