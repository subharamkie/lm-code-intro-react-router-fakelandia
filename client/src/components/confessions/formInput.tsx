import { useState } from "react"

export const ConfessionInput:React.FC = () =>{
    const[value,setValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor="subject" className="font-semibold capitalize">Subject:</label>
            </div>
            <input id="subject" type="text" value={value} onChange={handleChange} />
            
        </div>
    )
}
