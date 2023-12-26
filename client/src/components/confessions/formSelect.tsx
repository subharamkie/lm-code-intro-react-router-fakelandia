import { MISDEMEANOURS,MisdemeanourKind } from "../../types/misdemeanours.types";

interface SelectProps{
    value:string;
    onChangeFn:(value: string) => void;
}
export const ConfessionSelect:React.FC<SelectProps> = ({value,onChangeFn}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedOption = e.target.value;
        //validate
        if(selectedOption === 'default' || MISDEMEANOURS.includes(selectedOption as MisdemeanourKind)){
            e.currentTarget.style.borderColor = '#00FF00';
            onChangeFn(selectedOption); 
        }else{
            e.currentTarget.style.borderColor = '#FF0000'; 
        }
        
    }
    return (
        <label htmlFor="typeOfConfession">Reason for Contact:
        <select id="typeOfConfession" value={value} onChange={handleChange} defaultChecked={true}>
            <option value='default' >I just want to talk</option>
            {
                MISDEMEANOURS.map((item:MisdemeanourKind) => (
                <option key={item} value={item}>{item}</option>))
            }
        </select>
        </label>
    )
}