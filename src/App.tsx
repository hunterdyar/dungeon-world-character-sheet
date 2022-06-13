import React from 'react';
import {Container, Divider} from '@mui/material';
import getClassFromID from "./data/classUtilities";
import CharacterSheet from "./components/characterSheet";
import UseDataHooks from "./hooks/userDataHook";
function App() {
    const [classid] = UseDataHooks("selectedClass","barbarian");
    let chosenClass = getClassFromID(classid);
    console.log(chosenClass);
    return (
    <div className="App">
        <Container>
            <CharacterSheet classType={chosenClass}/>
        </Container>
        <Divider />
    </div>
);
}



export default App;
