import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {allMoveIDs} from "../data/classUtilities";
import userDataHook from "../hooks/userDataHook";
import {moveListKey} from "./moveList";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import LoadAllMovesFromFile from "./fileSystem";
import {allMoves} from "../data/classUtilities";
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function MoveSelectionDialog({onClose}:{onClose: Function}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Choose Moves
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>{"Select Moves"}</DialogTitle>
                <DialogContent>
                    <LoadAllMovesFromFile />
                    <DialogContentText>
                        <em>Refer to book for which moves are available to your class and level.</em>
                    </DialogContentText>
                    <MoveSelectionList />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


//Transfer list

export function MoveSelectionList() {
    const [chosen, setChosen] = userDataHook(moveListKey,[]);
    const [left] = React.useState<readonly string[]>(allMoveIDs());


    const handleToggle = (value: string) => () => {
        const currentIndex = chosen.indexOf(value);
        const newChecked = [...chosen];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChosen(newChecked);
    };


    const getTitle = (id:string) =>{
        let m = allMoves.find(x=>x.id===id);
        if(m)
        {
            return m.name;
        }else{
            return id;//uh oh
        }
    }

    const customList = (items: readonly string[], listTitle: string) => (
        <Paper sx={{ overflow: 'auto' }}>
            <List dense component="div" role="list">
                <ListItemText sx={{fontSize:30, textAlign:"center"}}>{listTitle}</ListItemText>
                {items.map((value: string) => {
                    const labelId = `transfer-list-item-${value}-label`;
                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={chosen.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={getTitle(value)} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>{customList(left,"All Moves")}</Grid>

        </Grid>
    );
}
