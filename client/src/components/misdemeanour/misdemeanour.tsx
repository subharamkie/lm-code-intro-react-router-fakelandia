import * as MisdemeanourType from '../../types/misdemeanours.types';
import Punishment from '../punishment/punishment';

interface MisdemeanourProps {
  data: MisdemeanourType.Misdemeanour;
}

export const Misdemeanour: React.FC<MisdemeanourProps> = ({
  data: { citizenId,misdemeanour,date },
}) => {
  return (
    <>
      <li key={citizenId} className="misD-item">
        <p>{citizenId}</p>
        <p >{date}</p>
        <p>{misdemeanour}</p>
        <Punishment/>
        
      </li>
    </>
  )
}
