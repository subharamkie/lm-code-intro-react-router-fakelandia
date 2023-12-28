interface TextBoxProps{
    value:string;
    isValid:boolean;
    onChangeFn:(value:string) =>void;
}
export const ConfessionTextBox :React.FC<TextBoxProps> = ({value,isValid,onChangeFn}) =>{
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const reason = e.target.value;
        onChangeFn(reason); 
        
    }
    return (
        <div className="form__textarea">
            <textarea id="confessionText" placeholder='Enter text about your confession.Cannot be empty.' value={value} onChange={handleChange} required={true} className={isValid ?'form__input--valid' : 'form__input--invalid'}/>
        </div>
    )
}