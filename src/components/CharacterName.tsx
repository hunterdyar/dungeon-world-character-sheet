import React, {} from "react";
import {InputBase} from "@mui/material";
import UseDataHooks from "../hooks/userDataHook";

const characterNameKey = "cName";

function CharacterName()
{
    const [name,setCharacterName] = UseDataHooks(characterNameKey,"");
    // const [inputState, setInputState] = useState(false);
    const setName = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCharacterName(e.target.value)
    }

    return (
        <span>
         <InputBase sx={{ ml: 1, flex: 1,fontSize: "3em"}}
                    placeholder="Character Name"
                    value = {name} onChange={setName}
                    type={"text"}
            />
        </span>

    );
}

export default CharacterName;