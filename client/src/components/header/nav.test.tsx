import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {fireEvent, render,screen} from '@testing-library/react';
import Home from '../home/home';
import { MemoryRouter} from 'react-router-dom';
import Nav from './nav';
import ConfessionForm from '../confessions/confessionForm';
it('Nav component rendered',async()=>{
    render(<Home/>);
    const testDom = await screen.getByText(/home/i);
    expect(testDom).toBeDefined();
});
//test navigation links
it('Nav component renders NavLink items', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Nav />
      </MemoryRouter>
    );
  
    const homeNavLink = screen.getByText(/Home/i);
    const misdemeanoursNavLink = screen.getByText(/Misdemeanours/i);
    const confessNavLink = screen.getByText(/Confess to Us/i);
  
    expect(homeNavLink).toBeInTheDocument();
    expect(misdemeanoursNavLink).toBeInTheDocument();
    expect(confessNavLink).toBeInTheDocument();
})


it('Clicking on Misdemeanours link navigates to the Misdemeanours page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Nav />
      </MemoryRouter>
    );
    //expect(screen.getByText(/Home/i)).toHaveClass('active');
    const misdemeanoursNavLink = screen.getAllByRole('link').filter((lnk) => lnk.textContent === 'Misdemeanours');
    fireEvent.click(misdemeanoursNavLink[0]);
    expect(misdemeanoursNavLink[0]).toHaveClass('active');
    /*
    await act(async () =>{
        fireEvent.click(misdemeanoursNavLink[0]);
        await waitFor(() => {
            const misdemeanoursPageContent = screen.getByText(/Misdemeanours list/i);
            expect(misdemeanoursPageContent).toBeInTheDocument();
        });
    });
    */
  
    // Check if the content of the Misdemeanours page is rendered
    //const misdemeanoursPageContent = screen.getByText('Loading');
    //expect(misdemeanoursPageContent).toBeInTheDocument();
});

it('Clicking on Confess to us link navigates to the Confessions page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Nav />
        <ConfessionForm/>
      </MemoryRouter>
    );
  
    const confessionNavLink = screen.getAllByRole('link').filter((lnk) => lnk.textContent === 'Confess to Us');
  
    if(confessionNavLink.length > 0){
        fireEvent.click(confessionNavLink[0]);
        expect(confessionNavLink[0]).toHaveClass('active');
    
    }
  
    // Check if the content of the Misdemeanours page is rendered
    expect(screen.getAllByRole('button').find((button) => button.textContent === 'Confess')).toBeDisabled();    
});

