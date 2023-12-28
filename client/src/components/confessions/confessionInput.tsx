interface InputProps{
    value:string;
    isValid:boolean;
    onChangeFn:(value: string) => void;
}
export const ConfessionInput:React.FC<InputProps> = ({value,isValid,onChangeFn}) =>{
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onChangeFn(inputValue);
    }

    return (
            <div className="form__input">
                <label htmlFor="subject" className="form__label">Subject:</label>
            
            <input id="subject" placeholder="Enter characters between 3 and 50 chars in length" type="text" value={value} 
                    onChange={handleChange} className={isValid ?'form__input--valid' : 'form__input--invalid'}
                    />
            </div>
        
    )
}
