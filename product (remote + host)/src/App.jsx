import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';

import './index.scss';

const App = () => (
    <div className="px-4 text-base">
        <div className="py-6 text-xl">Product App:</div>
        <ProductList />
    </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
