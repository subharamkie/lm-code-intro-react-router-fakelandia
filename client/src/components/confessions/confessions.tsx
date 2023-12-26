import { useState } from "react";
import { ConfessionInput } from "./formInput";
import { ConfessionSelect } from "./formSelect";
import { ConfessButton } from "./formSubmit";
import { ConfessionTextBox } from "./formTextbox";

const Confessions:React.FC = () =>{
    const [subjectValue,setSubjectValue] = useState('');
    const [selectValue,setSelectValue] = useState('default');
    const [confessionText,setConfessionText] = useState('');
    const [isButtonDisabled,setIsButtonDisabled] = useState(true);
    //enable button after values are set,following validation
    

    return (
        <div>
        <section>
            <form>
                <ConfessionInput value={subjectValue} onChangeFn={setSubjectValue}/>
                <ConfessionSelect value={selectValue} onChangeFn = {setSelectValue}/>
                <ConfessionTextBox value={confessionText} onChangeFn ={setConfessionText}/>
                <ConfessButton enabled={isButtonDisabled}/>
            </form>
        </section>
        </div>
    )
}
export default Confessions;