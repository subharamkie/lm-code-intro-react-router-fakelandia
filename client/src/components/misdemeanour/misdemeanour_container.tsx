import { useEffect, useState,createContext,useContext } from "react"
import { MisdemeanourResponse } from "../../types/misdemeanours.types";
import {MisdemeanourList} from './misdemeanours_list';
import { MisdemeanourFilter } from "./misdemeanourFilter";
import { JusticeContext } from "../justiceContext";
import MessageContainer from "../message/message";

export const MisdemeanourContext = createContext<MisdemeanourResponse>([]);

export const MisdemeanourContainer: React.FC = () => {
    const fetchUrl = 'http://localhost:8080/api/misdemeanours/10';
    const [misdemeanours, setMisdemeanours] = useState<MisdemeanourResponse>([]);
    const [filteredMisdemeanours,setFilteredMisdemeanours] = useState<MisdemeanourResponse>([]);
    const [isError,setIsError] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');
    const contextObj = useContext(JusticeContext);
    useEffect(() => {
    async function getMisdemeanours() {
      //do try catch here
      if(contextObj.misdemeanourArray.length === 0){
        try{
          const data = await fetch(fetchUrl);
          const result = await data.json()
          setMisdemeanours(result.misdemeanours);
          contextObj.updateMisdemeanour(result.misdemeanours);
        }catch(error){
          setErrorMsg(error.message);
          setIsError(true);
        }
      }else{
        setMisdemeanours(contextObj.misdemeanourArray);
      }
    }
    getMisdemeanours()
  },[contextObj])
  

  const filterResults = (filterStr:string) =>{
    const filteredResults  = misdemeanours.filter((item)=>item.misdemeanour === filterStr);  
    setFilteredMisdemeanours(filteredResults);
}

  return (
    <MisdemeanourContext.Provider value={misdemeanours}>
      <h2 className="caption__text">Misdemeanours list</h2>
      {isError && <MessageContainer message={errorMsg}/>}
      {!isError && <MisdemeanourFilter filterMisdemeanours={filterResults}/>}
      {!isError && <MisdemeanourList misdemeanours={filteredMisdemeanours} />}
    </MisdemeanourContext.Provider>
  )
}
