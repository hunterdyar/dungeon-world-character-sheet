import UseDataHooks from "../hooks/userDataHook";
import {Input} from "@mui/material";
import React from "react";

function SavedNumberInput({saveKey, defaultVal, maxValue, minValue, changeCallback}: { saveKey: string, defaultVal: number, maxValue?: number, minValue?: number, changeCallback?: Function})
{
    const [number,setNumber] = UseDataHooks(saveKey,defaultVal);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>
    {
        let n = parseInt(e.target.value);
        if(maxValue){
            if(n > maxValue){
                n = maxValue;
            }
        }
        if(minValue){
            if(n<minValue)
            {
                n = minValue;
            }
        }
        //after checking min and max, update only if number has changed.
        if(number !== n) {
            setNumber(n);
            if (changeCallback) {
                changeCallback(n);
            }
        }
    }
    return <Input type={"number"} value={number} onChange={onChange} />
}

export default SavedNumberInput;