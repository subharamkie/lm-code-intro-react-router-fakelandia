interface TextBoxProps{
    value:string;
    onChangeFn:(value:string) =>void;
}
export const ConfessionTextBox :React.FC<TextBoxProps> = ({value,onChangeFn}) =>{
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const reason = e.target.value;
        onChangeFn(reason); 
        
    }
    return (
        <textarea id="confessionText" placeholder='Enter text about your confession.Cannot be empty.' value={value} onChange={handleChange} required={true} />
    )
}