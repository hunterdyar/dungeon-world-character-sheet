import {Card, Grid, Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import CharacterName from "./CharacterName";
import SavedNumberInput from "./savedNumberInput";
import BaseStat from "./skillStat";
import UseDataHooks from "../hooks/userDataHook";
function CharacterSheet({classType}: { classType: any })
{
    const [con, setCon] = UseDataHooks("con",10);
    const [maxHP, setMaxHP] = useState(0);

    //doesn't update when constitution changes.
    useEffect(()=>{
        setMaxHP(+con+classType.maxHPMod);
    }, [con, classType.maxHPMod])

    const c = classType;
    return (<Grid container spacing = {2} alignItems={"stretch"}>

        <Grid item xs={12}>
            <h1>Dungeon World - {c.name}</h1>
        </Grid>

        <Grid item xs={8}>
            <CharacterName />
        </Grid>
        <Grid item xs={2}>
            <h3>Level</h3>
            <SavedNumberInput saveKey={"characterLevel"} defaultVal={0} />
        </Grid>
        <Grid item xs={2}>
            <h3>XP</h3>
            <SavedNumberInput saveKey={"characterXP"} defaultVal={0} />
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
                    <Card><h2>HP / {maxHP}</h2></Card>
                    <Card><h2>Damage: d{c.damageDice}</h2></Card>
                </Stack>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card>
                <h2>
                    Alignment
                </h2>
            </Card>
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
        <Grid item xs={8} >
            <Card>
                <h2>Starting Moves</h2>
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