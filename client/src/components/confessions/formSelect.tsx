import { MISDEMEANOURS,MisdemeanourKind,JUST_TALK} from "../../types/misdemeanours.types";

interface SelectProps{
    value:string;
    onChangeFn:(value: string) => void;
}
export const ConfessionSelect:React.FC<SelectProps> = ({value,onChangeFn}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedOption = e.target.value;
        onChangeFn(selectedOption); 
    }
    return (
        <div className="form__input">
        <label className="form__label" htmlFor="typeOfConfession">Reason for Contact:
        <select id="typeOfConfession" value={value} onChange={handleChange} defaultChecked={true}>
            <option value={JUST_TALK} >I just want to talk</option>
            {
                MISDEMEANOURS.map((item:MisdemeanourKind) => (
                <option key={item} value={item}>{item}</option>))
            }
        </select>
        </label>
        </div>
    )
}