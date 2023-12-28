interface messageProp{
    message:string;
}
const MessageContainer:React.FC<messageProp> = ({message}) => {
    return(
        <div className="caption__text">
            <p>{message}</p>
        </div>
    )
}
export default MessageContainer;