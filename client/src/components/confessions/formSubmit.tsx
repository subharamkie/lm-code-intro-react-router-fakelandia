interface SubmitProps{
    enabled:boolean;
    onSubmitFn:()=>void;
}
export const ConfessButton:React.FC<SubmitProps> =({enabled,onSubmitFn}) => {
    const onSubmitCall = (e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        onSubmitFn();
    }
    return (
        <button id="submit" onClick={onSubmitCall} disabled={enabled}>
            Confess
        </button>
    )
}