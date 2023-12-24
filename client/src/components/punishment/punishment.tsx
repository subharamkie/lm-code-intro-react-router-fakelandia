import { useMemo } from "react";
const Punishment:React.FC = () =>{
    const min = 75;
    const max = 250;
    
    const urlForImage = useMemo(() => {
        const randomNum = Math.floor(Math.random()*max-min+1)+min;
       return `https://picsum.photos/${randomNum}/${randomNum}`;
    },[min,max]);

    return (
        <>
            <img src={urlForImage} />;
        </>
    )
}
export default Punishment;