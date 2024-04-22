import React from 'react';
import { productData } from './productData';
import ProductCard from './ProductCard';
import './index.scss';

const ProductList = () => (
    <div className=" text-3xl mx-auto w-full">
        <div className="flex flex-wrap gap-4 w-full justify-center">
            {productData.map(product => (
                <ProductCard
                    key={product.id}
                    productData={product}
                    // className="my-4"
                />
            ))}
        </div>
    </div>
);

export default ProductList;
