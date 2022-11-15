import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';

test('Navbar Test', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("AddCustomer");
});



test('Navbar Test2', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("ViewCustomer");
});

test('Navbar Test3', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("Commerce");
});

test('Navbar Test4', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("E-");
});

