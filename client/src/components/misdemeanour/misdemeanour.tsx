import { useContext } from 'react';
import Punishment from '../punishment/punishment';
import { ItemContext } from './misdemeanours_list';

export const MisdemeanourComp: React.FC = () => {
    const misdemeanourItem = useContext(ItemContext);
  return (
      <tr>
        <td className='table__cell' id ={misdemeanourItem.citizenId.toString()}>{misdemeanourItem.citizenId}</td>
        <td className='table__cell'>{misdemeanourItem.date}</td>
        <td className='table__cell'>{misdemeanourItem.misdemeanour}</td>
        <td className='table__cell'><Punishment id={misdemeanourItem.citizenId}/></td>
      </tr>  
  )
}
