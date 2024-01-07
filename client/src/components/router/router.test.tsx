import '@testing-library/jest-dom';
import '@testing-library/react';

import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Router from './router';

it('renders not-found content for an unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/unknown']}>
      <Router />
    </MemoryRouter>
  );

  // Assert that the not-found content is rendered
  expect(screen.getByText(/Sorry! This page does not exist/i)).toBeInTheDocument();
});

it('Shows home page for /home', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Router />
      </MemoryRouter>
    );
  
    // Assert that the not-found content is rendered
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
});

it('renders misdemeanours for /misdemeanours', () => {
    render(
      <MemoryRouter initialEntries={['/misdemeanours']}>
        <Router />
      </MemoryRouter>
    );
  
    // Assert that the not-found content is rendered
    expect(screen.getByText(/Misdemeanours list/i)).toBeInTheDocument();
});
  
it('renders confessions page for /confession', () => {
    render(
      <MemoryRouter initialEntries={['/confession']}>
        <Router />
      </MemoryRouter>
    );
  
    // Assert that the not-found content is rendered
    expect(screen.getByText(/Confess to us/i)).toBeInTheDocument();
});

