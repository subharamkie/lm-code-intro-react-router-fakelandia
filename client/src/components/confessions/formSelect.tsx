import { useState } from "react"
import { MISDEMEANOURS,MisdemeanourKind } from "../../types/misdemeanours.types";

export const ConfessionSelect:React.FC = () => {
    const[value,setValue] = useState('default');
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedOption = e.target.value;
        setValue(selectedOption);
    }
    return (
        <label htmlFor="typeOfConfession">Reason for Contact:
        <select id="typeOfConfession" value={value} onChange={handleChange}>
            <option value='default'>I just want to talk</option>
            {
                MISDEMEANOURS.map((item:MisdemeanourKind) => (
                <option key={item} value={item}>{item}</option>))
            }
        </select>
        </label>
    )
}