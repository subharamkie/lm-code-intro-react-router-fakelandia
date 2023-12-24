import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.types";
import { MisdemeanourComp }  from "./misdemeanour"
import { MisdemeanourContext } from "./misdemeanour_container"
import { createContext, useContext } from "react";

export const ItemContext = createContext<Misdemeanour>({
    citizenId:0,
    misdemeanour: "" as MisdemeanourKind,
    date:""
});
export const MisdemeanourList: React.FC = () => {
  // receive the data on props and map over it here
  const misdemeanours = useContext(MisdemeanourContext);
  if (misdemeanours.length <= 0) {
    return <p>Loading misdemeanours...</p>;
  }
  return (
    
    <section>Number of misdemeanours: {misdemeanours.length}
      <p>
     {misdemeanours.map ((item:Misdemeanour,index) => (
        <ItemContext.Provider key={index} value = {item}>
        <MisdemeanourComp/>
        </ItemContext.Provider>
      ))
     }
      </p>
    </section>
  )
}
