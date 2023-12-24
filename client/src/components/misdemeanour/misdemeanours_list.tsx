import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.types";
import { MisdemeanourComp }  from "./misdemeanour"
import { MisdemeanourContext } from "./misdemeanour_container"
import { createContext, useContext } from "react";
interface MisdemeanourListProp {
    misdemeanours:Array<Misdemeanour>;
}
export const ItemContext = createContext<Misdemeanour>({
    citizenId:0,
    misdemeanour: "" as MisdemeanourKind,
    date:""
});
export const MisdemeanourList: React.FC<MisdemeanourListProp> = ({misdemeanours}) => {
  // receive the data on props and map over it here
  const contextMisdemeanours = useContext(MisdemeanourContext);
  const displayMisdemeanours = misdemeanours.length>0?misdemeanours:contextMisdemeanours;
  if (displayMisdemeanours.length <= 0) {
    return <p>Loading misdemeanours...</p>;
  }
  return (
    
    <section>Number of misdemeanours: {displayMisdemeanours.length}
      <p>
     {displayMisdemeanours.map ((item:Misdemeanour,index) => (
        <ItemContext.Provider key={index} value = {item}>
        <MisdemeanourComp/>
        </ItemContext.Provider>
      ))
     }
      </p>
    </section>
  )
}
