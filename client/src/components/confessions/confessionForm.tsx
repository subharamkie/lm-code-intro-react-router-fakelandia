import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConfessionInput } from "./confessionInput";
import { ConfessionSelect } from "./confessionSelect";
import { ConfessButton } from "./confessButton";
import { ConfessionTextBox } from "./confessionTextbox";
import { JusticeContext } from "../justiceContext";
import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.types";
import MessageContainer from "../message/message";


const ConfessionForm:React.FC = () =>{
    const [subjectValue,setSubjectValue] = useState('');
    const [selectValue,setSelectValue] = useState('');
    const [confessionValue,setConfessionValue] = useState('');
    const postUrl = 'http://localhost:8080/api/confess';
    const [isSubjectValid,setIsSubjectValid] = useState(false);
    const [isSelectValid,setIsSelectValid] = useState(false);
    const [isConfessionValid,setIsConfessionValid] = useState(false);
    const [isMessage,setIsMessage] = useState(false);
    const [message,setMessage] = useState('');
    const contextObj = useContext(JusticeContext);
    const navigate = useNavigate();
    
    const validateSubject = () =>{
        if(subjectValue.match(/[^a-zA-Z0-9 ]+/)){
            setIsSubjectValid(false);
            setIsMessage(true);
            setMessage("Special characters are not allowed in subject.");
        }
        else if(subjectValue.match("  ")){
            setIsSubjectValid(false);
            setIsMessage(true);
            setMessage("Two spaces are not allowed in subject.");
        }
        else if(!(subjectValue.length >= 3 && subjectValue.length <= 50)){
            setIsSubjectValid(false);
            setIsMessage(true);
            setMessage("Length of subject has to be between 3-50 characters.");
        }else{
            setIsSubjectValid(true);
            setIsMessage(false);
        }
        
        
    }
    const validateConfessionText = () =>{
        
        if(confessionValue.match("  ")){
            setIsConfessionValid(false);
            setIsMessage(true);
            setMessage("Two spaces are not allowed in the confession text.");

        } else if(confessionValue.length <=5){
            setIsConfessionValid(false);
            setIsMessage(true);
            setMessage("Length of confession text has to be more than 5 characters.");

        } else {
            setIsConfessionValid(true);
            setIsMessage(false);
        }

    } 
    const validateSelect = (value:string) =>{
        if(value === 'select' || value === ''){
            setIsSelectValid(false);
            setMessage("Please select a type.");
            setIsMessage(true);
        }else{
            setIsSelectValid(true);
            setIsMessage(false);
        }
    }
    const resetValues = () =>{
        setSubjectValue('');
        setIsSubjectValid(false);
        setSelectValue('');
        setIsSelectValid(false);
        setConfessionValue('');
        setIsConfessionValid(false);

    }
    //handle change
    const handleSubject = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setSubjectValue(e.target.value);
        validateSubject();
    }
    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        setSelectValue(e.target.value);
        validateSelect(e.target.value);
    }
    const handleConfession = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setConfessionValue(e.target.value);
        validateConfessionText();    
    }
    
    //handle form submission
    const handleSubmit = async () =>{
        //post data to server
        const postData = {
            "subject": subjectValue,
            "reason": selectValue,
            "details": confessionValue
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
            resetValues();
            
        }else{
            setIsMessage(true);
            setMessage("Sorry there was an error submitting the form.Please try again!");
        }
    }
    
    return (
        <div className="formContainer">
            <form>
                <ConfessionInput value={subjectValue} isValid={isSubjectValid} onChangeFn={handleSubject}/>
                <ConfessionSelect value={selectValue} isValid={isSelectValid} onChangeFn = {handleSelect}/>
                <ConfessionTextBox value={confessionValue} isValid={isConfessionValid} onChangeFn ={handleConfession}/>
               <ConfessButton enabled={!(isSubjectValid && isSelectValid && isConfessionValid) } onSubmitFn={handleSubmit}/>
            </form>
            {isMessage && <MessageContainer message={message}/>}
        </div>
    )
}

export default ConfessionForm;

