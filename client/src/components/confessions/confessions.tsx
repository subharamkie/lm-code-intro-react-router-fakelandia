import { useState } from "react";
import { ConfessionInput } from "./formInput";
import { ConfessionSelect } from "./formSelect";
import { ConfessButton } from "./formSubmit";
import { ConfessionTextBox } from "./formTextbox";

const Confessions:React.FC = () =>{
    const [subjectValue,setSubjectValue] = useState('Enter characters between 3-50 in length');
    const [selectValue,setSelectValue] = useState('default');
    const [confessionText,setConfessionText] = useState('Enter text about your confession.Cannot be empty.');
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