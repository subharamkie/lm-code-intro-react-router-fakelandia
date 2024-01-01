interface TextBoxProps{
    value:string;
    isValid:boolean;
    onChangeFn:(e:React.ChangeEvent<HTMLTextAreaElement>) =>void;
}
export const ConfessionTextBox :React.FC<TextBoxProps> = ({value,isValid,onChangeFn}) =>{
    return (
        <div className="form__textarea">
            <textarea id="confessionText" placeholder='Enter text about your confession.Cannot be empty.' value={value} onChange={onChangeFn} required={true} className={isValid ?'form__input--valid' : 'form__input--invalid'}/>
        </div>
    )
}