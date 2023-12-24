import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import Home from '../home/home';
it('Nav component rendered',async()=>{
    render(<Home/>);
    
    const testDom = await screen.getByText(/home/i);
    expect(testDom).toBeDefined();
});

