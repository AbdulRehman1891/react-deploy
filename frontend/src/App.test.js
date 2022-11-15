import { render,waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import AddCustomer from './AddCustomer';
import Navbar from './Navbar';

import axios from "axios";

jest.mock("axios");

const dummyCustomer = [
  {
    Customername: "aa",
    email: "abc@",
    gender: "m",
    DOB: "12/11/2000",
    PhoneNo: "87545678",
    password:"1234"
  }
];

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



describe("AddCustomer Test", () => {
  it("Add Customer", async () => {
    axios.get.mockResolvedValue({ data: dummyCustomer });

    render(<AddCustomer />);

    const add = await waitFor(() => screen.getAllByTestId("add"));

    expect(add).toHaveLength(1);
  });

  it("Sign Up Label Test",  () => {
    
    render(<AddCustomer />);

    const linkElement = screen.getByTestId("add");
     expect(linkElement).toBeInTheDocument("Sign Up");
  });

  it("Customer Name Prompt Test",  () => {
    
    render(<AddCustomer />);

    const linkElement = screen.getByTestId("add");
     expect(linkElement).toBeInTheDocument("Customer Name");
  });

   it("Customer Email",  () => {
    
    render(<AddCustomer />);

    const linkElement = screen.getByTestId("add");
     expect(linkElement).toBeInTheDocument("Email");
  });

   it("Customer DOB",  () => {
    
    render(<AddCustomer />);

    const linkElement = screen.getByTestId("add");
     expect(linkElement).toBeInTheDocument("DOB");
  });

   it("Customer Gender",  () => {
    
    render(<AddCustomer />);

    const linkElement = screen.getByTestId("add");
     expect(linkElement).toBeInTheDocument("Gender");
  });



});


