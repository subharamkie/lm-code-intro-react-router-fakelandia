import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import Punishment from './punishment';
import { IMG_ID_HASH } from '../../types/misdemeanours.types';
it('Punishment component rendered',async()=>{
    const testId = 2214;
    const imgId = testId%IMG_ID_HASH;
    render(<Punishment id={testId}/>);
    
    const testDom = await screen.getAllByTestId(imgId);
    expect(testDom).toBeDefined();
});

