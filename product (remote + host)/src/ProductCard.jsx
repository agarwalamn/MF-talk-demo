import React from 'react';
import AddToCartButton from 'cart/AddToCartButton';

import './index.scss';

const ProductCard = ({ productData, className }) => {
    const { id, title, price, description, image } = productData;

    return (
        <div
            className={`w-[300px] bg-slate-100 rounded-lg ${className} relative flex flex-col overflow-hidden`}
            key={id}
        >
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                />
            ) : null}
            <div className="p-4">
                <p className="text-xs font-semibold">
                    *special discount for JSLover members
                </p>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <p className="text-lg font-semibold mt-auto px-4">₹{price}</p>
            <div className="mt-auto">
                <AddToCartButton id={title} />
            </div>
        </div>
    );
};

export default ProductCard;
