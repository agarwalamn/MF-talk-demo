import React from 'react';
import './index.scss';
import Cart from './Cart';

const CartList = () => {
    const [cartItems, setCartItems] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = Cart.subscribe(item => {
            console.log(item);
            setCartItems(item);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            <div className="text-lg font-semibold w-[200px]">
                Cart item list
            </div>
            <ul>
                {cartItems.map(item => (
                    <li key={item} className="list-item text-sm">
                        - {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartList;
