export const ConfessButton:React.FC =() => {
    const onSubmitFn = () =>{
        console.log('Form submitted');
    }
    return (
        <button id="submit" onClick={()=>onSubmitFn()}>
            Confess
        </button>
    )
}