import { useState } from "react"

export const ConfessionTextBox :React.FC = () =>{
    const [value,setValue] = useState('');
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const reason = e.target.value;
        setValue(reason);
    }
    return (
        <textarea id="confessionText" value={value} onChange={handleChange}/>
    )
}