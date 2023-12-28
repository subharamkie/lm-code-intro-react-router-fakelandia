import { useState,useEffect,useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConfessionInput } from "./formInput";
import { ConfessionSelect } from "./formSelect";
import { ConfessButton } from "./formSubmit";
import { ConfessionTextBox } from "./formTextbox";
import { JusticeContext } from "../justiceContext";
import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.types";


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
    const contextObj = useContext(JusticeContext);
    const navigate = useNavigate();
           
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
        setIsConfessionValid(confessionText.trim() !== '');
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
        if(result.success && !result.justTalked){
           //add to misdemeanours list in context
           //create misD object
           const addedMisD:Misdemeanour = {
            citizenId: Math.floor(Math.random()*10+10),
            misdemeanour:selectValue as MisdemeanourKind,
            date:new Date().toLocaleString() + '',
           }
            contextObj.addMisdemeanour(addedMisD);
            navigate("/misdemeanours");    

        }else{
            //if error,error message
        }
    }
    
    return (
        <div className="formContainer">
            <form>
                <ConfessionInput value={subjectValue} onChangeFn={setSubjectValue}/>
                <ConfessionSelect value={selectValue} onChangeFn = {setSelectValue}/>
                <ConfessionTextBox value={confessionText} onChangeFn ={setConfessionText}/>
               <ConfessButton enabled={!allValuesCorrect.current} onSubmitFn={handleSubmit}/>
            </form>
        </div>
    )
}
export default Confessions;