import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import Punishment from './punishment';
it('Punishment component rendered',async()=>{
    const testId = 2214;
    render(<Punishment id={testId}/>);
    
    const testDom = await screen.getByAltText("Random punishment image");
    expect(testDom).toBeDefined();
});

