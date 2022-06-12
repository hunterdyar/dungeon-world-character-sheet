import {Card, Container, MenuItem, Select, SelectChangeEvent, Stack} from "@mui/material";
import {default as Alignments} from "../data/alignments.json";
import UseDataHooks from "../hooks/userDataHook";
import React, {useState} from "react";
import {SavedCheckbox} from "./savedInput";

export default function AlignmentCard()
{
    return (
        <Card>
            <Container>
        <h2>Alignment</h2>
        <AlignmentDropdown />
            </Container>
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
            <Stack direction={"row"}>
        <SavedCheckbox saveKey={"didAlignment"} defaultValue={false} />
        <p>{alignmentDescription}</p>
            </Stack>
        </span>
);
}

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