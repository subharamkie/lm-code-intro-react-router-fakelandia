import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import Punishment from './punishment';
it('Punishment component rendered',async()=>{
    render(<Punishment/>);
    
    const testDom = await screen.getByAltText(/random punishment image/i);
    expect(testDom).toBeDefined();
});

