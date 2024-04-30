import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Api from "../WebApi";
import { UserContext } from "../../App";
import { toast } from "react-toastify";
import "./css/AddressPage.css"
import { useNavigate } from "react-router-dom";
const UpdateAddress = () => {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [address, setAddress] = useState({
        streetAddress: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        recipientName: "",
    });

    const [errors, setErrors] = useState({
        streetAddress: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        recipientName: ""
    });


    useEffect(() => {
        const getAddress = async () => {
            try {
                if (!user) {
                    toast.error("you are not login");
                    return
                }
                const response = await axios.get(Api.GetAddress + `/${user._id}`);
                setAddress({
                    recipientName: response.data.recipientName,
                    streetAddress: response.data.streetAddress,
                    city: response.data.city,
                    country: response.data.country,
                    state: response.data.state,
                    postalCode: response.data.postalCode
                });

            } catch (error) {
                console.log(error);
            }
        }
        getAddress();
    }, []);





    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newErrors = {};
            Object.keys(address).forEach((key) => {
                if (!address[key]) {
                    newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
            });

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
            const updatedAddress = { ...address, userId: user._id };
            const response = await axios.put(Api.UpdateAddress + `/${user._id}`, updatedAddress);
            toast.success("Address updated successfully");


        } catch (error) {
            console.log(error);

            // console.log('Error:', error);
        }
    };
    return (
        <>
            <div className=" gradient-custom flex flex-col md:flex-row mt-3 mx-3 md:mt-6 md:mx-6 lg:p-10 sm:pt-5 rounded">
                <div className="md:w-1/2">
                    <div className="text-center md:mt-12 md:ml-4">
                        {/* SVG Icon for Delivery System */}
                        <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
                            data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
                            data-mdb-animation-on-scroll="repeat" class="fas fa-3x fa-shipping-fast text-white"></i>

                        <h3 className="mt-3 text-white">Welcome</h3>
                        <p className="text-white">Add your Address for completing your order!</p>
                    </div>
                    <div className="text-center mt-8 mb-5">
                        <button onClick={() => navigate(-1)} type="button" className="btn btn-white btn-rounded bg-white text-red-500">
                            Go back
                        </button>
                    </div>
                </div>

                <div className="md:w-2/3 flex justify-center ">

                    <div className="w-full md:w-2/2 bg-white rounded-lg shadow-md p-6 card-custom">
                        <div className="text-center mb-3">
                            <h4 className="text-gray-700 text-lg ">Delivery Details</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                                <div className="flex flex-col">
                                    <label htmlFor="recipientName" className="text-gray-700">Recipient Name</label>
                                    <input
                                        type="text"
                                        id="recipientName"
                                        name="recipientName"
                                        placeholder="RecipientName"
                                        value={address.recipientName}
                                        onChange={handleChange}
                                        className={`mt-1 p-2 w-full border ${errors.recipientName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}


                                    />
                                    {errors.recipientName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.recipientName}</p>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="streetAddress" className="text-gray-700">Street Address</label>
                                    <input
                                        type="text"
                                        id="streetAddress"
                                        name="streetAddress"
                                        value={address.streetAddress}
                                        onChange={handleChange}
                                        className={`mt-1 p-2 w-full border ${errors.streetAddress ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                        placeholder="Street Address"
                                    />
                                    {errors.streetAddress && (
                                        <p className="text-red-500 text-sm mt-1">{errors.streetAddress}</p>
                                    )}
                                </div>

                                {/** Pair of Fields: City & State */}
                                <div className="flex flex-col">
                                    <label htmlFor="city" className="text-gray-700">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={address.city}
                                        onChange={handleChange}
                                        className={`mt-1 p-2 w-full border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                        placeholder="City"
                                    />
                                    {errors.city && (
                                        <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="state" className="text-gray-700">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={address.state}
                                        onChange={handleChange}
                                        className={`mt-1 p-2 w-full border ${errors.state ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                        placeholder="State"
                                    />
                                    {errors.state && (
                                        <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                                    )}
                                </div>

                                {/** Pair of Fields: Country & Postal Code */}
                                <div className="flex flex-col">
                                    <label htmlFor="country" className="text-gray-700">Country</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={address.country}
                                        onChange={handleChange}
                                        className={`mt-1 p-2 w-full border ${errors.country ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                        placeholder="Country"
                                    />
                                    {errors.country && (
                                        <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="postalCode" className="text-gray-700">Postal Code</label>
                                    <input
                                        type="text"
                                        id="postalCode"
                                        name="postalCode"
                                        value={address.postalCode}
                                        onChange={handleChange}
                                        className={`mt-1 p-2 w-full border ${errors.postalCode ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                        placeholder="Postal Code"
                                    />
                                    {errors.postalCode && (
                                        <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
                                    )}
                                </div>

                                {/** Submit Button */}
                                <div className="flex justify-end ">
                                    <button type="submit" className=" w-full btn btn-primary btn-rounded bg-blue-600 text-white">
                                        Update Address
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>


        </>
    );
};

export default UpdateAddress;
