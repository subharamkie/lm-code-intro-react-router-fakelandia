import '@testing-library/jest-dom';
import '@testing-library/react';
import {setupServer} from 'msw/node';
import {http, HttpResponse } from 'msw';

import {it,expect,afterAll,afterEach,beforeAll} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import Confessions from './confessions';
import { BrowserRouter } from 'react-router-dom';
it('Confession component rendered',async()=>{
    render(
    <BrowserRouter>
    <Confessions/>
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
        <Confessions/>
        </BrowserRouter>);
    
    expect(await screen.findByText(/Confess/i)).toBeInTheDocument();
});
//error test
//just-talk test
const testData = {"subject": "subject line","reason": "just-talk","details": "details here"};

it('Confession component with just-talk response ',async()=>{
    mockServer.use(http.post('http://localhost:8080/api/confess',()=>
            new HttpResponse(JSON.stringify(testData))
        ));
    render(<BrowserRouter>
    <Confessions/>
    </BrowserRouter>);
    expect(await screen.findByText(/reason for contact/i)).toBeInTheDocument();
});
