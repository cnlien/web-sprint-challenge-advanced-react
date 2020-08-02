import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

const plants = [
    {
        "name": "Peperomia Rosso",
        "id": 143,
        "price": 21
    },

    {
        "name": "String of Dolphins",
        "id": 125341,
        "price": 15
    },

    {
        "name": "Snake Plant",
        "id": 4893,
        "price": 18
    },
]
test("displays plants in cart", () => {
    const { getByText } = render(<ShoppingCart cart={plants} />);

    const plantOne = screen.getByText(/Peperomia Rosso/)
    expect(plantOne).toBeInTheDocument();

    const plantTwo = screen.getByText(/String of Dolphins/)
    expect(plantTwo).toBeInTheDocument();

    const plantThree = screen.getByText(/Snake Plant/)
    expect(plantThree).toBeInTheDocument();

})