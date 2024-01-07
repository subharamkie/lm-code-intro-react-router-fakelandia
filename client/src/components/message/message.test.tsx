import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import MessageContainer from './message';
it('Message component rendered',async()=>{
    render(<MessageContainer message='test'/>);
    const testDom = await screen.getByText('test');
    expect(testDom).toBeInTheDocument();
});

