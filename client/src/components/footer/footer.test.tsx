import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import Footer from './footer';
it('Footer component rendered',async()=>{
    render(<Footer/>);
    
    const testDom = await screen.getByText(/Subha/i);
    expect(testDom).toBeDefined();
});

