import React from 'react';
import {Container} from '@mui/material';
import {default as characterClasses} from "./data/characterClasses.json";
import CharacterSheet from "./components/characterSheet";
function App() {
  return (
    <div className="App">
        <Container>
            <CharacterSheet classType={characterClasses.barbarian}/>
        </Container>
    </div>

);
}

export default App;
