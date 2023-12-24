import { useEffect, useState,createContext } from "react"
//import * as MisdemeanourType from '../../types/misdemeanours.types';
import { Misdemeanour } from "../../types/misdemeanours.types";
import {MisdemeanourList} from './misdemeanours_list';

export type MisdemeanourResponse = Array<Misdemeanour>;
export const MisdemeanourContext = createContext<MisdemeanourResponse>([]);

export const MisdemeanourContainer: React.FC = () => {
    const fetchUrl = 'http://localhost:8080/api/misdemeanours/10';
    const [misdemeanours, setMisdemeanours] = useState<MisdemeanourResponse>([]);
    

  useEffect(() => {
    async function getMisdemeanours() {
      const data = await fetch(fetchUrl);
      const result = await data.json()
      setMisdemeanours(result.misdemeanours);
    }
    getMisdemeanours()
  }, [])
  return (
    
    <MisdemeanourContext.Provider value={misdemeanours}>
      <h1>Misdemeanour list:</h1>
      <MisdemeanourList />
    </MisdemeanourContext.Provider>
  )
}
