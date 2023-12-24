const Punishment:React.FC = () =>{
    const min = 75;
    const max = 250;
    const randomNum = Math.floor(Math.random()*max-min+1)+min;
    const urlForImage = `https://picsum.photos/${randomNum}/${randomNum}`;
    return (
        <>
            <img src={urlForImage} />;
        </>
    )
}
export default Punishment;