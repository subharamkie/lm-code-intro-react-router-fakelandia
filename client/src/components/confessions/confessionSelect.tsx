import { MISDEMEANOURS,MisdemeanourKind,JUST_TALK} from "../../types/misdemeanours.types";

interface SelectProps{
    value:string;
    isValid:boolean;
    onChangeFn:(e:React.ChangeEvent<HTMLSelectElement>) => void;
}
export const ConfessionSelect:React.FC<SelectProps> = ({value,isValid,onChangeFn}) => {
    return (
        <div className="form__input">
        <label className="form__label" htmlFor="typeOfConfession">Reason for Contact:
        <select id="typeOfConfession" value={value} onChange={onChangeFn} defaultChecked={true} className={isValid ?'form__input--valid' : 'form__input--invalid'}>
            <option value="select">Select one</option>
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