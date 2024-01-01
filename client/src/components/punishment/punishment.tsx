import { useMemo } from "react";
import { IMG_ID_HASH } from "../../types/misdemeanours.types";

interface ImageProps{
    id:number;
}
const Punishment:React.FC<ImageProps> = ({id}) =>{
    const size = 175;
    
    //1084 is the last img id in the api
    const urlForImage = useMemo(() => {
        const idHash = id%IMG_ID_HASH;
       return `https://picsum.photos/id/${idHash}/${size}/${size}`;
    },[id]);

    return (
        <>
            <img id="punishment" src={urlForImage} alt='Random punishment image'/>;
        </>
    )
}
export default Punishment;