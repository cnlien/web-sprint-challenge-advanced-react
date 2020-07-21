import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const _ = screen.getByLabelText
    const feChange = fireEvent.change
    const feClick = fireEvent.click

    render(<CheckoutForm />);
    const formValues = {
        firstName: _(/first name/i),
        lastName: _(/last name/i),
        address: _(/address/i),
        city: _(/city/i),
        state: _(/state/i),
        zip: _(/zip/i)
    }

    feChange(formValues.firstName, { target: { value: 'Chris' } });
    feChange(formValues.lastName, { target: { value: 'Lien' } });
    feChange(formValues.address, { target: { value: '555 Main Street' } });
    feChange(formValues.city, { target: { value: 'Anywhere' } });
    feChange(formValues.state, { target: { value: 'US' } });
    feChange(formValues.zip, { target: { value: '12345' } });

    const checkoutBtn = screen.getByRole('button', /first name/i)
    feClick(checkoutBtn)

    const successMessage = screen.getByTestId('successMessage');
    expect(successMessage).toBeInTheDocument();
});
