import { useEffect, useState,createContext } from "react"
import { Misdemeanour } from "../../types/misdemeanours.types";
import {MisdemeanourList} from './misdemeanours_list';
import { MisdemeanourFilter } from "./filter";

export type MisdemeanourResponse = Array<Misdemeanour>;
export const MisdemeanourContext = createContext<MisdemeanourResponse>([]);

export const MisdemeanourContainer: React.FC = () => {
    const fetchUrl = 'http://localhost:8080/api/misdemeanours/10';
    const [misdemeanours, setMisdemeanours] = useState<MisdemeanourResponse>([]);
    const [filteredMisdemeanours,setFilteredMisdemeanours] = useState<MisdemeanourResponse>([]);

  useEffect(() => {
    async function getMisdemeanours() {
      const data = await fetch(fetchUrl);
      const result = await data.json()
      setMisdemeanours(result.misdemeanours);
    }
    getMisdemeanours()
  }, [])

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
