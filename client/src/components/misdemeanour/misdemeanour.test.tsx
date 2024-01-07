import '@testing-library/jest-dom';
import '@testing-library/react';
import {setupServer} from 'msw/node';
import {http, HttpResponse } from 'msw';

import {it,expect,afterAll,afterEach,beforeAll, vi} from 'vitest'; 
import {fireEvent, render,screen,waitFor} from '@testing-library/react';
import {MisdemeanourComp} from './misdemeanour';
import { MisdemeanourContainer } from './misdemeanour_container';
import { MisdemeanourFilter } from './misdemeanourFilter';


beforeAll(()=>mockServer.listen());
afterAll(()=>mockServer.close());
afterEach(()=>mockServer.resetHandlers());
const mockServer = setupServer();
const responseData = {"misdemeanours":[{"citizenId":4875,"misdemeanour":"united","date":"12/27/2023"},{"citizenId":18211,"misdemeanour":"rudeness","date":"12/27/2023"},{"citizenId":5079,"misdemeanour":"rudeness","date":"12/27/2023"},{"citizenId":29,"misdemeanour":"rudeness","date":"12/27/2023"},{"citizenId":1451,"misdemeanour":"rudeness","date":"12/27/2023"},{"citizenId":23088,"misdemeanour":"vegetables","date":"12/27/2023"},{"citizenId":9015,"misdemeanour":"united","date":"12/27/2023"},{"citizenId":4818,"misdemeanour":"vegetables","date":"12/27/2023"},{"citizenId":2114,"misdemeanour":"rudeness","date":"12/27/2023"},{"citizenId":2248,"misdemeanour":"lift","date":"12/27/2023"}]};    


it('Test if Misdemeanour component is rendered',async()=>{
    render(<MisdemeanourComp/>);
    const testDom = await screen.getByAltText(/random punishment image/i);
    expect(testDom).toBeDefined();
});

it('Load Misdemeanour component with empty response from server to show error',async()=>{
    mockServer.use(http.get('http://localhost:8080/api/misdemeanours/10',()=>
            new HttpResponse(JSON.stringify({"misdemeanours":[]}))
        ));
    render(<MisdemeanourContainer/>);
    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
});
it('Misdemeanour component loaded with mock api',async()=>{
    mockServer.use(http.get('http://localhost:8080/api/misdemeanours/10',()=>
            new HttpResponse(JSON.stringify(responseData))
        ));
    render(<MisdemeanourContainer/>);
    expect(await screen.findByText(/4875/i)).toBeInTheDocument();
});

it('Test if choosing filter misdemeanours calls the filter function', async () => {
  
  // Mock the function that updates the filtered list
  const mockFilterFunction = vi.fn();
  render(<MisdemeanourFilter filterMisdemeanours={mockFilterFunction}/> );
  // Find the dropdown element
  const dropdown = screen.getByRole('combobox');
  fireEvent.change(dropdown, { target: { value: 'rudeness' } });
  expect(mockFilterFunction).toHaveBeenCalledWith('rudeness');
});

const filterData = {"misdemeanours":[{"citizenId":4875,"misdemeanour":"united","date":"12/27/2023"},
                    {"citizenId":18211,"misdemeanour":"rudeness","date":"12/27/2023"},
                    {"citizenId":5079,"misdemeanour":"rudeness","date":"12/27/2023"},
                    {"citizenId":29,"misdemeanour":"rudeness","date":"12/27/2023"},
                    {"citizenId":1451,"misdemeanour":"rudeness","date":"12/27/2023"},
                    {"citizenId":23088,"misdemeanour":"vegetables","date":"12/27/2023"},
                    {"citizenId":9015,"misdemeanour":"united","date":"12/27/2023"},
                    {"citizenId":4818,"misdemeanour":"vegetables","date":"12/27/2023"},
                    {"citizenId":2114,"misdemeanour":"rudeness","date":"12/27/2023"},
                    {"citizenId":2248,"misdemeanour":"lift","date":"12/27/2023"}]};    
it('Check if filtered Misdemeanour list shows expected value for number of misdemeanours',async()=>{
    mockServer.use(http.get('http://localhost:8080/api/misdemeanours/10',()=>
            new HttpResponse(JSON.stringify(filterData))
        ));
    render(<MisdemeanourContainer/>);
    const dropdown = screen.getByRole('combobox');
  fireEvent.change(dropdown, { target: { value: 'lift' } });
  
    //expect(await screen.queryByText('2114')).not.toBeInTheDocument();
    expect(await screen.findByText('2248')).toBeInTheDocument();
});

it('filter called to show Loading if misdemeanours is empty',async()=>{
    mockServer.use(http.get('http://localhost:8080/api/misdemeanours/0',()=>
            new HttpResponse(JSON.stringify({"misdemeanours":[]}))
        ));
    render(<MisdemeanourContainer/>);
    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown, { target: { value: 'lift' } });
  
    //expect(await screen.queryByText('2114')).not.toBeInTheDocument();
    expect(await screen.findByText('NUMBER OF MISDEMEANOURS: 0')).toBeInTheDocument();
});

it('show error if fetch returns error',async()=>{
    mockServer.use(http.get('http://localhost:8080/api/misdemeanours/10',()=>
            HttpResponse.error()
    ));
    render(<MisdemeanourContainer/>);
    await waitFor(() => {
        expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
    });
});

