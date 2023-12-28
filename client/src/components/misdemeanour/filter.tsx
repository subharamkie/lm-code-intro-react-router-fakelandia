import { useState } from "react"
import { MISDEMEANOURS,MisdemeanourKind } from "../../types/misdemeanours.types"

interface MisdemeanourFilterProps {
    filterMisdemeanours: (filterStr: string) => void;
}
export const MisdemeanourFilter:React.FC<MisdemeanourFilterProps> = ({filterMisdemeanours}) =>{
    const [value,setValue] = useState('filter');
    
    const handleChange=(chosen:string)=>{
        setValue(chosen);
        filterMisdemeanours(chosen);
    }
    return(
        <div className="filter">
        <select value={value} onChange={(e) => handleChange(e.target.value)}>
            <option value='filter'>Filter</option>
        {MISDEMEANOURS.map((item:MisdemeanourKind) => (
            <option key={item} value={item}>{item}</option>

        ))}
    </select>
    </div>

    )
}
