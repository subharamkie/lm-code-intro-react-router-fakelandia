interface InputProps{
    value:string;
    onChangeFn:(value: string) => void;
}
export const ConfessionInput:React.FC<InputProps> = ({value,onChangeFn}) =>{
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onChangeFn(inputValue);
    }

    return (
            <div className="form__input">
                <label htmlFor="subject" className="form__label">Subject:</label>
            
            <input id="subject" placeholder="Enter characters between 3-50 in length" type="text" value={value} onChange={handleChange} />
            </div>
        
    )
}
