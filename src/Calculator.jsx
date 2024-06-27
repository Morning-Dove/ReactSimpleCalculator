import { useState } from 'react';
import Button from './Button';


export default function Calculator() {
    const [display, setDisplay] = useState("");

    //Sets the value of each button
    const buttons = [
        "7", "8", "9", "/", 
        "4", "5", "6", "*", 
        "1", "2", "3", "-", 
        "0", ".", "=", "+", 
        "Clear",
    ]; 

    // handles when a button is clicked and uses eval() to complete +,-,/,*
    const handleClick = (value) => {
        console.log(value);
        if (value === "=") {
            try{
                setDisplay(eval(display).toString());
            } catch {
                setDisplay("Incorrect Oporator");
            }
        } else if (value === "Clear") {
            setDisplay("");
        } else {
            setDisplay(display + value);
        }
    }

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                {buttons.map((button, i) => <Button key={i} label={button} handleClick={handleClick} />)}
            </div>
        </div>
    );
}
