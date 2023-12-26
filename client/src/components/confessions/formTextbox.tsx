interface TextBoxProps{
    value:string;
    onChangeFn:(value:string) =>void;
}
export const ConfessionTextBox :React.FC<TextBoxProps> = ({value,onChangeFn}) =>{
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const reason = e.target.value;
        //validate
        onChangeFn(reason);
    }
    return (
        <textarea id="confessionText" value={value} onChange={handleChange}/>
    )
}