import { useEffect, useState,createContext,useContext } from "react"
import { MisdemeanourResponse } from "../../types/misdemeanours.types";
import {MisdemeanourList} from './misdemeanours_list';
import { MisdemeanourFilter } from "./filter";
import { JusticeContext } from "../justiceContext";

export const MisdemeanourContext = createContext<MisdemeanourResponse>([]);

export const MisdemeanourContainer: React.FC = () => {
    const fetchUrl = 'http://localhost:8080/api/misdemeanours/10';
    const [misdemeanours, setMisdemeanours] = useState<MisdemeanourResponse>([]);
    const [filteredMisdemeanours,setFilteredMisdemeanours] = useState<MisdemeanourResponse>([]);

    const contextObj = useContext(JusticeContext);
    console.log('cobj:'+JSON.stringify(contextObj.misdemeanourArray));
    useEffect(() => {
    async function getMisdemeanours() {
      if(contextObj.misdemeanourArray.length === 0){
        const data = await fetch(fetchUrl);
        const result = await data.json()
        setMisdemeanours(result.misdemeanours);
        //set context?
        contextObj.updateMisdemeanour(result.misdemeanours);
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
      <h1>Misdemeanour list:</h1>
      <MisdemeanourFilter filterMisdemeanours={filterResults}/>
      <MisdemeanourList misdemeanours={filteredMisdemeanours} />
    </MisdemeanourContext.Provider>
  )
}
