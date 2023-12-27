import { ReactNode,useState,createContext } from "react";
import { Misdemeanour, MisdemeanourResponse } from "../types/misdemeanours.types";

interface JusticeContextProps {
  misdemeanourArray: MisdemeanourResponse;
  addMisdemeanour: (newMisD:Misdemeanour) => void;
  updateMisdemeanour: (misDList:MisdemeanourResponse) => void;
}

const defaultContextValues: JusticeContextProps = {
  misdemeanourArray: [],
  addMisdemeanour: () => {},
  updateMisdemeanour:() =>{},
};

export const JusticeContext = createContext<JusticeContextProps>(defaultContextValues);

export const JusticeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [misDlist,setMisDList ] = useState<MisdemeanourResponse>([]);
    const addMisdemeanour = (newMisdemeanour:Misdemeanour) => {
        setMisDList((prevMisdemeanours:MisdemeanourResponse) => [...prevMisdemeanours, newMisdemeanour]);
      };
    const updateMisdemeanours = (newMisdemeanours:MisdemeanourResponse) => {
      setMisDList(newMisdemeanours);
    };
    const value = {
        misdemeanourArray:misDlist,
        addMisdemeanour:addMisdemeanour,
        updateMisdemeanour:updateMisdemeanours,
    };
    return <JusticeContext.Provider value ={value}>{children}</JusticeContext.Provider>

}

