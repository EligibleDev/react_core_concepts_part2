import { useState } from "react"

export default function Boat(){
    const boatStyle = {
        border: '4px solid red',
        padding: '15px',
        margin: '15px',
        borderRadius: '15px'
    }

    const [boatNumber, setBoat] = useState(48);

    const addBoat =()=>{
        const newNumber = boatNumber + 1;
        setBoat(newNumber);
    }

    const removeBoat = ()=>{
        const newNumber = boatNumber -1;
        setBoat(newNumber);
    }

    return(
        <div style={boatStyle}>
            <p>Boat Number: {boatNumber}</p>
            <button onClick={addBoat}>Add Boat</button>
            <button onClick={removeBoat}>Remove Boat</button>
        </div>
    )
}