import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import CartList from './CartList';
import AddToCartButton from './AddToCartButton';
import Cart from './Cart';

const App = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        const unsubscribe = Cart.subscribe(item => {
            setItem(item);
        });

        return unsubscribe;
    }, []);
    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: cart</div>
            <CartList items={items} />
            <AddToCartButton id={'test'} />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('app'));
