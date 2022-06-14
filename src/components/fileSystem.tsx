import React from "react";

function LoadAllMovesFromFile()
{
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.currentTarget.files) {
            e.currentTarget.files[0].text().then((t:string)=>{
                let moves = JSON.parse(t);
                if(moves){
                    localStorage.setItem("allMoves",JSON.stringify(moves));
                }
            });
        }
    }
    return <span>
        <span>Upload file of all moves to choose from: </span>
        <input type={"file"} onChange ={handleFile} />
    </span>
}

export default LoadAllMovesFromFile;