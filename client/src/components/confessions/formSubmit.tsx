interface SubmitProps{
    enabled:boolean;
}
export const ConfessButton:React.FC<SubmitProps> =({enabled}) => {
    const onSubmitFn = () =>{
        console.log('Form submitted');
    }
    return (
        <button id="submit" onClick={()=>onSubmitFn()} disabled={enabled}>
            Confess
        </button>
    )
}