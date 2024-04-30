import React, { useContext, useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { addProductToCart, getCartItems, removeProductFromCart } from "../redux-config/CartItemsSlice";

const ProductShoppingPage = () => {

    const [productPrice, setProductPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productDescount, setProductDiscount] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartItems);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()

    const fetchCartItems = () => {
        try {
            if (!user) return;
            dispatch(getCartItems(user._id));
            console.log("This is a cart", cart.cartItems);
        } catch (error) {
            console.log("Error Getting product to cart:", error);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const handleAddToCart = async (productId) => {
        try {
            await dispatch(addProductToCart(productId));
        } catch (error) {
            console.log("Error adding product to cart:", error);
        }
    };

    const handleRemoveFromCart = async (productId) => {
        try {

            await dispatch(removeProductFromCart({ productId, userId: user._id }));
            fetchCartItems();
        } catch (error) {
            console.log("Error removing product from cart:", error);
        }
    };


    // Calculate total price
    useEffect(() => {
        const price = cart.cartItems.reduce((total, product) => {
            return total + product.productId.price;
        }, 0);
        const discount = cart.cartItems.reduce((total, product) => {
            return total + product.productId.discountPercentage;
        }, 0);
        setProductDiscount(discount);
        setProductPrice(price);
        setTotalPrice(price + discount);
    }, [cart.cartItems, dispatch]);

    const handlePlaceOrder = ()=>{
        navigate('/updateshippingaddress')
    }

    return (
        <div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8 ">
                    <div className=" space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div style={{ width: "auto", height: "200px", border: "1px", solid: "#ccc", overflow: "auto", padding: "5px" }}>
                            {cart.cartItems.length > 0 ? cart.cartItems.map((product, index) => (
                                <div className="flex flex-col rounded-lg bg-white sm:flex-row" key={index}>
                                    <img className="m-2 h-24 w-24 rounded-md border object-cover object-center" src={`http://localhost:8000/images/${product.productId.thumbnail}`} alt="" />
                                    <div className="flex w-full flex-col px-4 py-4">
                                        <span className="font-semibold">{product.productId.productName}</span>
                                        <p className="text-lg font-bold flex justify-start items-center"><MdCurrencyRupee />{product.productId.price}/- only</p>
                                        <p className="text-lg font-bold">Quntity : {product.quantity}</p>
                                        <button className="mt-2 ml-auto px-2 py-2 text-xl bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={() => handleRemoveFromCart(product.productId._id)}><RiDeleteBin7Fill /></button>
                                    </div>
                                    <hr/>
                                </div>

                            )) : "No Added Any Product"}
                        </div>
                    </div>
                    {/*  */}
                </div>
                <div className=" bg-gray-50 px-4 pt-2 lg:mt-0">
                    <div className="mt-3">
                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between py-2">
                                <p className="text-lg font-medium text-gray-900">Price ({cart.cartItems.length} items)</p>
                                <p className="font-semibold text-gray-900">{productPrice.toFixed(2)}/-</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between py-2">
                                <p className="text-lg font-medium text-gray-900">Discount</p>
                                <p className="font-semibold text-gray-900">{productDescount.toFixed(2)}/-</p>
                            </div>
                            <hr />
                            <hr />
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-lg font-medium text-gray-900">Total Amount</p>
                                <p className="text-2xl font-semibold text-gray-900 flex justify-center items-center"><MdCurrencyRupee />{(productPrice).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handlePlaceOrder}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default ProductShoppingPage;
