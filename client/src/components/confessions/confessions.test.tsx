import '@testing-library/jest-dom';
import '@testing-library/react';
import {setupServer} from 'msw/node';
import {http, HttpResponse } from 'msw';

import {it,expect,afterAll,afterEach,beforeAll,vi} from 'vitest'; 
import {fireEvent, render,screen} from '@testing-library/react';
import ConfessionForm from './confessionForm';
import { BrowserRouter } from 'react-router-dom';
import { ConfessionInput } from './confessionInput';
import { ConfessionSelect } from './confessionSelect';

it('Check if Subject input is rendered',() =>{
    const handleSubmit = vi.fn();
    render(<ConfessionInput value='' isValid={false} onChangeFn={handleSubmit}/>);
    expect(screen.getByText(/subject/i)).toBeInTheDocument();
})
it('Check if Subject calls fn on change',() =>{
    const handleSubmit = vi.fn();
    render(<ConfessionInput value='' isValid={false} onChangeFn={handleSubmit}/>);
    const element = screen.getByPlaceholderText('Enter characters between 3 and 50 chars in length');
    fireEvent.change(element,{target:{value:'abc'}});
    expect(handleSubmit).toBeCalled();
})
it('Check if select is loaded',()=>{
    const handleChange = vi.fn();
    render(<ConfessionSelect value='' onChangeFn={handleChange} isValid={false}/>);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
})
it('Check if select change calls on change fn',()=>{
    const handleChange = vi.fn();
    render(<ConfessionSelect value='' onChangeFn={handleChange} isValid={false}/>);
    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown,{target:{value:'lift'}});
    expect(handleChange).toBeCalled();
})

it('Confession component rendered',async()=>{
    render(
    <BrowserRouter>
    <ConfessionForm/>
    </BrowserRouter>);
    const testDom = await screen.getByText(/reason for contact/i);
    expect(testDom).toBeDefined();
});

beforeAll(()=>mockServer.listen());
afterAll(()=>mockServer.close());
afterEach(()=>mockServer.resetHandlers());
const mockServer = setupServer();
const responseData = {"subject": "subject line","reason": "lift","details": "details here"};
it('Confession component with  response ',async()=>{
    mockServer.use(http.post('http://localhost:8080/api/confess',()=>
            new HttpResponse(JSON.stringify(responseData))
        ));
    render(<BrowserRouter>
        <ConfessionForm/>
        </BrowserRouter>);
    
    expect(await screen.findByText(/Confess/i)).toBeInTheDocument();
});
//error test
/*
const errorTest = {success: false,
		justTalked: false,
		message: 'Confession received.'};
it('Form submission error response',async() =>{
    mockServer.use(http.post('http://localhost:8080/api/confess',()=>
        new HttpResponse(JSON.stringify(errorTest))));
    render(<BrowserRouter>
            <ConfessionForm/>
            </BrowserRouter>);
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();

})
*/
//just-talk test
const testData = {success: true,
    justTalked: true,
    message: 'Confession received.'};

it('Confession component with just-talk response ',async()=>{
    mockServer.use(http.post('http://localhost:8080/api/confess',()=>
            new HttpResponse(JSON.stringify(testData))
        ));
    render(<BrowserRouter>
    <ConfessionForm/>
    </BrowserRouter>);
    const btn = screen.getByRole('button');
    await btn.removeAttribute('disabled');
    //expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(await screen.findByTestId('message')).toBeInTheDocument();
});
