interface messageProp{
    message:string;
}
const MessageContainer:React.FC<messageProp> = ({message}) => {
    return(
        <div id="message" className="caption__text">
            <p>{message}</p>
        </div>
    )
}
export default MessageContainer;