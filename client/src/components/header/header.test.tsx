import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import Home from '../home/home';
it('Header component rendered',async()=>{
    render(<Home/>);
    
    const testDom = await screen.getByText(/Fakelandia/i);
    expect(testDom).toBeDefined();
});

