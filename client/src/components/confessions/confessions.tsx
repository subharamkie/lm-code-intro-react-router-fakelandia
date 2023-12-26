import { useState,useEffect,useRef } from "react";
import { ConfessionInput } from "./formInput";
import { ConfessionSelect } from "./formSelect";
import { ConfessButton } from "./formSubmit";
import { ConfessionTextBox } from "./formTextbox";


const Confessions:React.FC = () =>{
    const [subjectValue,setSubjectValue] = useState('');
    const [selectValue,setSelectValue] = useState('');
    const [confessionText,setConfessionText] = useState('');
    const allValuesCorrect= useRef(false);
    const postUrl = 'http://localhost:8080/api/confess';
    const [isSubjectValid,setIsSubjectValid] = useState(false);
    const [isSelectValid,setIsSelectValid] = useState(false);
    const [isConfessionValid,setIsConfessionValid] = useState(false);
    
    //update button enable
    const allInputsValid =() =>{
        allValuesCorrect.current = isSubjectValid && isSelectValid && isConfessionValid;
    }
    //enable button after values are set,following validation
    useEffect(()=>{
        //validate and set 
        setIsSubjectValid(!subjectValue.match(/[^a-zA-Z0-9 ]+/) && subjectValue.length >= 3 && subjectValue.length <= 50);
        allInputsValid();
    },[subjectValue]);
    useEffect(()=>{
        //validate and set 
        setIsSelectValid(selectValue !== '');
        allInputsValid();
    },[selectValue]);
    useEffect(()=>{
        //validate and set 
        setIsConfessionValid(confessionText.length >= 3 && confessionText.length <= 50);
        allInputsValid();
    },[confessionText]);

    //handle form submission
    const handleSubmit = async () =>{
        //post data to server
        const postData = {
            "subject": subjectValue,
            "reason": selectValue,
            "details": confessionText
        };
        const response = await fetch(postUrl,{
            method:'POST',
            body:JSON.stringify(postData),
            headers:{'Content-Type':'application/json'}
        });
        const result = await response.json();
        if(!result.success){
           alert('Error saving message');
        }
    }
    
    return (
        <div>
        <section>
            <form>
                <ConfessionInput value={subjectValue} onChangeFn={setSubjectValue}/>
                <ConfessionSelect value={selectValue} onChangeFn = {setSelectValue}/>
                <ConfessionTextBox value={confessionText} onChangeFn ={setConfessionText}/>
               <ConfessButton enabled={!allValuesCorrect.current} onSubmitFn={handleSubmit}/>
            </form>
        </section>
        </div>
    )
}
export default Confessions;