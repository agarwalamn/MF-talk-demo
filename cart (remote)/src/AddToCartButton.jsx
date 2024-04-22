import React from 'react';
import Cart from './Cart';

import './index.scss';
const AddToCartButton = ({ id }) => {
    const addToCart = () => {
        Cart.addItem(id);
    };

    return (
        <button
            className="bg-black rounded text-white px-4 py-2 text-base w-full"
            onClick={addToCart}
        >
            {Cart.getItem(id) ? 'Already Added' : 'Add to Cart'}
        </button>
    );
};

export default AddToCartButton;
