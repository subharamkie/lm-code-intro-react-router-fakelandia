import { useState,useEffect,useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConfessionInput } from "./confessionInput";
import { ConfessionSelect } from "./confessionSelect";
import { ConfessButton } from "./confessButton";
import { ConfessionTextBox } from "./confessionTextbox";
import { JusticeContext } from "../justiceContext";
import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.types";
import MessageContainer from "../message/message";


const Confessions:React.FC = () =>{
    const emptyString:string = '';
    const [subjectValue,setSubjectValue] = useState(emptyString);
    const [selectValue,setSelectValue] = useState('');
    const [confessionText,setConfessionText] = useState(emptyString);
    const allValuesCorrect= useRef(false);
    const postUrl = 'http://localhost:8080/api/confess';
    const [isSubjectValid,setIsSubjectValid] = useState(false);
    const [isSelectValid,setIsSelectValid] = useState(false);
    const [isConfessionValid,setIsConfessionValid] = useState(false);
    const [isMessage,setIsMessage] = useState(false);
    const [message,setMessage] = useState('');
    
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
        console.log("is:"+isSubjectValid);
        allInputsValid();
        console.log("curr:"+allValuesCorrect.current);
        
    },[subjectValue]);
    useEffect(()=>{
        //validate and set 
        setIsSelectValid(selectValue !== '');
        allInputsValid();
    },[selectValue]);
    useEffect(()=>{
        //validate and set 
        setIsConfessionValid(confessionText.trim() !== "");
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

        }else if(result.justTalked){
            //show Thank you message
            setIsMessage(true);
            setMessage('Thank you for talking to us!');
            <MessageContainer message={message}/>
        }else{
            setIsMessage(true);
            setMessage("Sorry there was an error submitting the form.Please try again!");
            
        }
    }
    
    return (
        <div className="formContainer">
            <form>
                <ConfessionInput value={subjectValue} isValid={isSubjectValid} onChangeFn={setSubjectValue}/>
                <ConfessionSelect value={selectValue} isValid={isSelectValid} onChangeFn = {setSelectValue}/>
                <ConfessionTextBox value={confessionText} isValid={isConfessionValid} onChangeFn ={setConfessionText}/>
               <ConfessButton enabled={!allValuesCorrect.current} onSubmitFn={handleSubmit}/>
            </form>
            {isMessage && <MessageContainer message={message}/>}
        </div>
    )
}
export default Confessions;