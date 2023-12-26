import { useState,useEffect } from "react";
import { ConfessionInput } from "./formInput";
import { ConfessionSelect } from "./formSelect";
import { ConfessButton } from "./formSubmit";
import { ConfessionTextBox } from "./formTextbox";

const Confessions:React.FC = () =>{
    const [subjectValue,setSubjectValue] = useState('');
    const [selectValue,setSelectValue] = useState('');
    const [confessionText,setConfessionText] = useState('');
    const [isButtonDisabled,setIsButtonDisabled] = useState(true);
    
    //enable button after values are set,following validation
    useEffect(()=>{
        if(subjectValue === ''){
            return;
        }
        
        const enableFormSubmit = async () => {
            if((subjectValue.length >= 3 && subjectValue.length <= 50) && selectValue !== '' 
                    && confessionText.trim() !== ''){
            // Enable the button if all conditions are met
                setIsButtonDisabled(false);
            }
            
        }
        enableFormSubmit();
    },[subjectValue,selectValue,confessionText,isButtonDisabled]);

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