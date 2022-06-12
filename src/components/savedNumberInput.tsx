import UseDataHooks from "../hooks/userDataHook";
import {Input} from "@mui/material";
import React from "react";

function SavedNumberInput({saveKey, defaultVal, changeCallback}: { saveKey: string, defaultVal: number, changeCallback?: Function})
{
    const [number,setNumber] = UseDataHooks(saveKey,defaultVal);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>
    {
        setNumber(e.target.value);
        if(changeCallback) {
            changeCallback(e.target.value);
        }
    }
    return <Input type={"number"} value={number} onChange={onChange} />
}

export default SavedNumberInput;