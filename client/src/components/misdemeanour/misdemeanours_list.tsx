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
    return <p className="caption__text">Loading misdemeanours...</p>;
  }
  return (
    <div className="misDTable">
    <table className="table__main">
      <caption className="caption__text">Number of misdemeanours: {displayMisdemeanours.length}</caption>
      <thead className="table__heading">
        <tr >
          <th className="table__heading table__cell">Citizen Id</th>
          <th className="table__heading table__cell">Date</th>
          <th className="table__heading table__cell">Misdemenaour</th>
          <th className="table__heading table__cell">Punishment Idea</th> 
        </tr>
      </thead>
      <tbody>
          
         {
            //returns a new row of data
            displayMisdemeanours.map ((item:Misdemeanour,index) => (
            <ItemContext.Provider key={index} value = {item}>
            <MisdemeanourComp/>
            </ItemContext.Provider>
          ))
        }
      </tbody>
      </table>
    </div>
  )
}
