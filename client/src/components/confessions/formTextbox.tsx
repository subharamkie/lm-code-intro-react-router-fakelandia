interface TextBoxProps{
    value:string;
    onChangeFn:(value:string) =>void;
}
export const ConfessionTextBox :React.FC<TextBoxProps> = ({value,onChangeFn}) =>{
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const reason = e.target.value;
        //validate
        if(reason === ''){
            e.currentTarget.style.borderColor = '#FF0000'; 
        }else{
            e.currentTarget.style.borderColor = '#00FF00';
            onChangeFn(reason); 
        }
        
    }
    return (
        <textarea id="confessionText" placeholder='Enter text about your confession.Cannot be empty.' value={value} onChange={handleChange} required={true} />
    )
}