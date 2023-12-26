interface InputProps{
    value:string;
    onChangeFn:(value: string) => void;
}
export const ConfessionInput:React.FC<InputProps> = ({value,onChangeFn}) =>{
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        //validate
        if(inputValue.length < 3 || inputValue.length >50) {
			//make the border red
            e.currentTarget.style.borderColor = '#FF0000'; 
        }else if(inputValue.match(/[^a-zA-Z0-9 ]+/)){
            //make the border red
            e.currentTarget.style.borderColor = '#FF0000';
        }
        else{
            e.currentTarget.style.borderColor = '#00FF00';
            onChangeFn(inputValue);
        }
        
    }

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor="subject" className="font-semibold capitalize">Subject:</label>
            </div>
            <input id="subject" placeholder="Enter characters between 3-50 in length" type="text" value={value} required={true} onChange={handleChange} onInvalid={(e)=>{e.currentTarget.setCustomValidity("Please enter subject between 3-50 chars")}}/>
            
        </div>
    )
}
