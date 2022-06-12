import {Card, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {default as Alignments} from "../data/alignments.json";
import UseDataHooks from "../hooks/userDataHook";
import React, {useState} from "react";

export default function AlignmentCard()
{
    return (
        <Card>
        <h2>Alignment</h2>
        <AlignmentDropdown />
        </Card>
    );
}

function AlignmentDropdown()
{
    const [alignmentOption, setAlignmentOption] = UseDataHooks("alignment","good");
    const [alignmentDescription,setAlignmentDescription] = useState(getAlignmentDesc(alignmentOption));

    const handleChange = (e: SelectChangeEvent)=> {
        setAlignmentOption(e.target.value);
        setAlignmentDescription(getAlignmentDesc(e.target.value));
    }

    console.log("render dropdown");
    return(
        <span>
        <Select
            fullWidth
            id="demo-simple-select"
            value={alignmentOption || "good"}
            label="Age"
            onChange={handleChange}
        >
            {Alignments.map((a) =>{
                return <MenuItem key={a.id} value={a.id}>{a.name}</MenuItem>
            })}
            <MenuItem value={"custom"}>Custom</MenuItem>
        </Select>
        <p>{alignmentDescription}</p>
        </span>
);
}

//returns a string
function getAlignmentDesc(alignmentOption: string): string{

    if(alignmentOption ==="custom")
    {
        return "custom alignment text";
    }

    let a = Alignments.find(x=>x.id === alignmentOption);
    if(a)
    {
        return a.desc;
    }else{
        //todo: get custom description text.
        return "";
    }
}

//end