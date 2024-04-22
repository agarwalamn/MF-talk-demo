import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import ProductList from 'product/ProductList';
import CartList from 'cart/CartList';
// import Cart from 'cart/Cart';

const App = () => {
    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Main App:</div>
            <div>Awesome shopping application!</div>
            <div className="flex">
                <ProductList />
                <CartList />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
