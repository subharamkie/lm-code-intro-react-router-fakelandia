import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import Home from './home';
it('Home component rendered',async()=>{
    render(<Home/>);
    
    const testDom = await screen.getByText(/justice department/i);
    expect(testDom).toBeDefined();
});

