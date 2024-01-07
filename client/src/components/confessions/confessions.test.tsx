import '@testing-library/jest-dom';
import '@testing-library/react';
import {setupServer} from 'msw/node';
//import {http, HttpResponse } from 'msw';

import {it,expect,afterAll,afterEach,beforeAll,vi} from 'vitest'; 
import {fireEvent, render,screen,waitFor} from '@testing-library/react';
import ConfessionForm from './confessionForm';
import { BrowserRouter } from 'react-router-dom';
import { ConfessionInput } from './confessionInput';
import { ConfessionSelect } from './confessionSelect';
import { ConfessButton } from './confessButton';

beforeAll(()=>mockServer.listen());
afterAll(()=>mockServer.close());
afterEach(()=>mockServer.resetHandlers());
const mockServer = setupServer();

it('Check if Subject input element is rendered',() =>{
    const handleSubmit = vi.fn();
    render(<ConfessionInput value='' isValid={false} onChangeFn={handleSubmit}/>);
    expect(screen.getByText(/subject/i)).toBeInTheDocument();
})
it('Check if Subject input element calls handleChange fn on change of value',() =>{
    const handleChange = vi.fn();
    render(<ConfessionInput value='' isValid={false} onChangeFn={handleChange}/>);
    const element = screen.getByPlaceholderText('Enter characters between 3 and 50 chars in length');
    fireEvent.change(element,{target:{value:'abc'}});
    expect(handleChange).toBeCalled();
})
it('Check if confession type dropdown is loaded',()=>{
    const handleChange = vi.fn();
    render(<ConfessionSelect value='' onChangeFn={handleChange} isValid={false}/>);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
})
it('Check if dropdown selection change calls on change fn',()=>{
    const handleChange = vi.fn();
    render(<ConfessionSelect value='' onChangeFn={handleChange} isValid={false}/>);
    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown,{target:{value:'lift'}});
    expect(handleChange).toBeCalled();
})
it('Check if button is loaded but disabled on load',()=>{
    const handleSubmit = vi.fn();
    render(<ConfessButton enabled={true} onSubmitFn={handleSubmit}/>);
    expect(screen.getAllByRole('button').find((button) => button.textContent === 'Confess')).toBeDisabled();
})

it('Check if button click calls the handleSubmit function', () => {
    const mockSubmit = vi.fn();
    render(<ConfessButton enabled={false} onSubmitFn={mockSubmit}/>);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    if (submitButton) {
        fireEvent.click(submitButton);
    }
    expect(mockSubmit).toBeCalled();
})

it('Confession form rendered',async ()=>{
    render(
    <BrowserRouter>
    <ConfessionForm/>
    </BrowserRouter>);
    const testDom = await screen.getByText(/reason for contact/i);
    expect(testDom).toBeDefined();
});


it('Subject input validation error for wrong input',async()=>{
    render(<BrowserRouter>
        <ConfessionForm/>
        </BrowserRouter>);
    const element = screen.getByPlaceholderText('Enter characters between 3 and 50 chars in length');
    fireEvent.change(element,{target:{value:'abc$%'}});
    await waitFor(() => {
        expect(screen.getByText("Length of subject has to be between 3-50 characters.")).toBeInTheDocument();
    });
});

it('Reason dropwdown validation error for not choosing an option',async()=>{
    render(<BrowserRouter>
        <ConfessionForm/>
        </BrowserRouter>);
    const element = screen.getByRole('combobox');
    fireEvent.change(element,{target:{value:'select'}});    
    await waitFor(() => {
        expect(screen.getByText("Please select a type.")).toBeInTheDocument();
    });
});
/*
it('No validation error if reason dropwdown value is anything other than select',async()=>{
    render(<BrowserRouter>
        <ConfessionForm/>
        </BrowserRouter>);
    const element = screen.getByRole('combobox');
    fireEvent.change(element,{target:{value:"just-talk"}});    
    await waitFor(() => {
        expect(screen.queryByText("Please select a type.")).not.toBeInTheDocument();
    });
});
*/

it('Confession input validation error for wrong input',async()=>{
    render(<BrowserRouter>
        <ConfessionForm/>
        </BrowserRouter>);
    const element = screen.getByPlaceholderText('Enter text about your confession.Cannot be empty.');
    fireEvent.change(element,{target:{value:' er'}});
    await waitFor(() => {
        expect(screen.getByText("Length of confession text has to be more than 5 characters.")).toBeInTheDocument();
    });
});

/*
const responseData = {"subject": "subject line","reason": "lift","details": "details here"};
const testData = {success: true,
    justTalked: true,
    message: 'Confession received.'};


it('Form submission test with mock response to show message',async()=>{
    
    mockServer.use(http.post('http://localhost:8080/api/confess',()=>
            new HttpResponse(JSON.stringify(testData))
        ));
    
    render(<BrowserRouter>
        <ConfessionForm/>
        </BrowserRouter>);
    const element1 = screen.getByPlaceholderText('Enter characters between 3 and 50 chars in length');
    fireEvent.change(element1,{target:{value:'test'}});
    
    const element2 = screen.getByRole('combobox');
    fireEvent.change(element2,{target:{value:'lift'}});

    const element3 = screen.getByPlaceholderText('Enter text about your confession.Cannot be empty.');
    fireEvent.change(element3,{target:{value:'testing'}});
    
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    if (submitButton) {
        submitButton.removeAttribute('disabled');
        fireEvent.click(submitButton);
    }
    await waitFor(() => {
        expect(screen.getByText("Thank you for talking to us!")).toBeInTheDocument();
    });
});

//just-talk test

it('Confession component with just-talk response ',async()=>{
    mockServer.use(http.post('http://localhost:8080/api/confess',()=>
            new HttpResponse(JSON.stringify(testData))
        ));
    render(<BrowserRouter>
    <ConfessionForm/>
    </BrowserRouter>);
    const btn = screen.getByRole('button');
    btn.removeAttribute('disabled');
    //expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(await screen.findByTestId('message')).toBeInTheDocument();
});
*/