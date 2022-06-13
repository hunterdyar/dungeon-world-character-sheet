import {Card, Grid, Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import CharacterName from "./characterName";
import SavedNumberInput from "./savedInput";
import BaseStat from "./skillStat";
import UseDataHooks from "../hooks/userDataHook";
import AlignmentCard from "./alignmentCard";
import MoveList from "./moveList";
import {MoveSelectionDialog} from "./moveChooseDialog";
function CharacterSheet({classType}: { classType: any })
{
    const [con, setCon] = UseDataHooks("con",10);
    const [maxHP, setMaxHP] = useState(0);

    //doesn't update when constitution changes.
    useEffect(()=>{
        setMaxHP(+con+classType.baseHP);
    }, [con, classType.baseHP])

    const c = classType;
    return (<Grid container spacing = {2} alignItems={"stretch"}>

        <Grid item xs={12}>
            <h1>Dungeon World - {c.name}</h1>
        </Grid>

        <Grid item xs={8}>
            <CharacterName />
        </Grid>
        <Grid item xs={2}>
            <Stack direction={"row"} spacing={2}>
                <h3>Level</h3>
                <SavedNumberInput saveKey={"characterLevel"} defaultVal={0} maxValue={10} minValue={0}/>
            </Stack>
        </Grid>
        <Grid item xs={2}>
            <Stack direction={"row"} spacing={2}>
                <h3>XP</h3>
                <SavedNumberInput saveKey={"characterXP"} defaultVal={0} />
            </Stack>
        </Grid>
        <Grid item xs={4}>
            <Card>
                <h2>
                    Look
                </h2>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card >
                <Stack spacing={1}>
                    <Card><h2>Armor</h2></Card>
                    <Card>
                        <Stack direction={"row"}
                            justifyContent={"center"}>
                            <h2>HP</h2>
                            <SavedNumberInput saveKey={"hp"} defaultVal={maxHP} maxValue={maxHP} minValue={0} />
                            <h2>/ {maxHP}</h2>
                        </Stack>
                        </Card>
                    <Card><h2>Damage: d{c.damageDice}</h2></Card>
                </Stack>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <AlignmentCard />
        </Grid>

        <Grid item xs={8} container spacing={2}>
            <Grid item xs={4}>
                <BaseStat stat="str" />
            </Grid>
            <Grid item xs={4}>
                <BaseStat stat="dex" />

            </Grid>
            <Grid item xs={4}>
                <BaseStat stat="con" changeCallback={(x:number)=>setCon(x)}/>
            </Grid>
            <Grid item xs={4}>
                <BaseStat stat="int" />
            </Grid>
            <Grid item xs={4}>
                <BaseStat stat="wis" />
            </Grid>
            <Grid item xs={4}>
                <BaseStat stat="cha" />

            </Grid>
        </Grid>
        <Grid item xs={4}>
            <Card>
                <h2>Bonds</h2>
                <p>
                    Verticla blah nlam ispum. Verticla blah nlam ispum. Verticla blah nlam ispum. Verticla blah nlam ispum.
                </p>
                <p>
                    Verticla blah nlam ispum. Verticla blah nlam ispum. Verticla blah nlam ispum. Verticla blah nlam ispum.
                </p>
                <p>
                    Verticla blah nlam ispum. Verticla blah nlam ispum. Verticla blah nlam ispum. Verticla blah nlam ispum.
                </p>
            </Card>
        </Grid>
        <Grid item xs={8}>
            <Card>
                <Grid container justifyContent={"space-between"}>
                <Grid item xs={4}>
                    <h2>Starting Moves</h2>
                </Grid>
                <Grid item xs={4}>
                    <MoveSelectionDialog />
                </Grid>
                <MoveList chosenClass={classType} />
                </Grid>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card>
                <h2>Race</h2>
            </Card>
        </Grid>
    </Grid>);
}

export default CharacterSheet;