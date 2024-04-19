import React, { useState } from 'react';

import { FaPlusCircle } from "react-icons/fa";

import { FaMinusCircle } from "react-icons/fa";

import "./css/ProductPage.css"
function QuantityButton() {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        if (quantity < 99) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className=" quantity-container flex items-center space-x-2  w-36 h-10">
            <button
                className="px-2 py-1  h-full w-12 decrease-button"
                onClick={decreaseQuantity}>
                <FaMinusCircle className='text-2xl float-left' />
            </button>
            <span className="px-3 py-1   text-1xl">{quantity} </span>
            <button
                className=" px-2 py-1  h-full w-12  increase-button "
                onClick={increaseQuantity}
            > <FaPlusCircle className='text-2xl float-right' />
            </button>
        </div>
    );
};

export default QuantityButton;