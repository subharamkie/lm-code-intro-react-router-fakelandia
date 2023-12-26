interface InputProps{
    value:string;
    onChangeFn:(value: string) => void;
}
export const ConfessionInput:React.FC<InputProps> = ({value,onChangeFn}) =>{
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        //validate
        onChangeFn(inputValue);
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
