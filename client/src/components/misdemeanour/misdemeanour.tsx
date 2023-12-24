import { useContext } from 'react';
import Punishment from '../punishment/punishment';
import { ItemContext } from './misdemeanours_list';

export const MisdemeanourComp: React.FC = () => {
    const misdemeanourItem = useContext(ItemContext);
  return (
    <>
      <li key={misdemeanourItem.citizenId} className="misD-item">
        <p>{misdemeanourItem.citizenId}</p>
        <p >{misdemeanourItem.date}</p>
        <p>{misdemeanourItem.misdemeanour}</p>
        <Punishment/>
        
      </li>
    </>
  )
}
