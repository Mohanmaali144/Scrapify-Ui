import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./css/ProductPage.css"
import SlRating from '@shoelace-style/shoelace/dist/react/rating';
import UserReview from './UserReview';
import QuantityButton from './QuantityButton';

const ProductPage = () => {
    const { state } = useLocation();

    // Sample product data (replace with actual data or API fetch)
    const product = state || {
        name: 'Conditioner Bar - Zero Waste Conditioner, 1.7oz, 12 Scent Options, Vegan, Sulfate Free, #1 Best Seller',
        categoryName: 'Electronics',
        condition: 'New',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit djfdjedjfefj sujhjdnedj sjdcjdncsdjc sjcsdcjdncsd.',
        price: 299.99,
        discount: 10,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oXDinYIUxMKQsdyMjigdNVntYE3SjfJO1JnUA2F-n8ITK4UghmxV6yhcESutYcASBiY&usqp=CAU',
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3Dp0nZol3F1_o&psig=AOvVaw2dagbxnlHHaXvLLVdVxLle&ust=1713546527821000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCbjLSgzIUDFQAAAAAdAAAAABAx',
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FLavys-Creations-LavyS-Handmade-Scrapbook%2Fdp%2FB0C49W9KFW&psig=AOvVaw2dagbxnlHHaXvLLVdVxLle&ust=1713546527821000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCbjLSgzIUDFQAAAAAdAAAAABAZ',
            'https://m.media-amazon.com/images/I/719QE-xjISL._AC_UF1000,1000_QL80_.jpg',

        ],
    };

    const [currentImage, setCurrentImage] = useState(product.images[0]);

    const handleThumbnailClick = (imageUrl) => {
        setCurrentImage(imageUrl);
    };

    // Check if product is null or undefined
    if (!state && !product) {
        return (
            <div className="flex justify-center items-center mt-10">
                <p className="text-red-600 text-lg font-semibold">Product not found</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex justify-center items-center mt-10   ">
                <div className=" lg:w-4/5 lg:h-3/4	 image-container  bg-white shadow-lg rounded-lg overflow-hidden ">
                    <div className="grid grid-cols-1 sm:grid-cols-2  mt-2  ">
                        <div className=" lg:pt-8 lg:pr-6 p-4 rounded lg:mr-20">
                            <img src={currentImage} alt={"Product image"} className="w-full h-auto thumbnail-image" />
                            <div className='p-0'>
                                <div className=" grid grid-cols-4 gap-4 p-4  border-gray-200 ">
                                    {product.images.map((imageUrl, index) => (
                                        <img
                                            key={index}
                                            src={imageUrl}
                                            alt={"Product image"}
                                            className={`w-full border-lg h-auto cursor-pointer rounded-lg ${imageUrl === currentImage ? 'border-2 border-[#272727]' : 'border-transparent'
                                                }`}
                                            onClick={() => handleThumbnailClick(imageUrl)}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>

                        <div className="lg:mt-8 p-4  lg:ml-5 lg:pt-8 lg:pr-6 font-oswald">
                            <h1 className="text-xl font-semibold mb-2">{product.name}</h1>
                            <p className="text-gray-600 text-sm mb-2">{product.categoryName}</p>
                            <p className="text-gray-600 text-sm mb-4">In {product.condition} Condition</p>
                            <p className="text-base text-gray-700 mb-4">{product.description}</p>
                            <SlRating label="Rating" precision={0.5} value={4.5} />
                            <p className="text-base text-gray-700 mb-4"></p>
                            <div className="flex items-center mb-4">
                                <span className="price-text ">&#8377; {product.price.toFixed(2)} <small> Only</small></span>
                                <span className="ml-2 text-sm text-gray-600">{product.discount}% Off</span>
                            </div>
                            <div className='flex'>
                                <QuantityButton  />
                                <button className="ml-5 flex-none text-white bg-slate-800 rounded-md md:px-3 md:py-2 px-2 font-medium py-1 hover:bg-[#CFDDF7] hover:text-black hover:opacity-70">Add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full'>
                <div style={{ border: "2px", borderRadius: "15px", borderColor: "red" }} class="w-4/5 mx-auto bg-white  rounded-lg p-6 mt-5 description-container">
                    <div class="flex justify-between mb-4">
                        <div className=''>
                            <p class="text-lg font-semibold text-gray-800 font-oswald ">Product Description -</p>

                        </div>


                    </div>
                    <p class="text-sm text-gray-700 leading-relaxed font-oswald">
                        Our Zero Waste Conditioner Bars are made with salon-grade, lightweight formulas that strengthen, hydrate, and replenish hair with shine, volume, and less frizz.
                        <ul className='list-disc mt-5 ml-10'>
                            <li> Free of SLS, silicones, parabens, fragrance, and artificial colors</li>
                            <li> Each 1.7oz bar is equivalent to 3 bottles and lasts 75+ washes</li>
                            <li> We have a bar for all hair types including dull, greasy, and colored</li>
                            <li> Vegan, cruelty free, palm oil free, and plastic free packaging</li>
                            <li> All natural Conditioner Bar</li>
                            <li>Handmade in the USA</li>
                            <li>Perfect for traveling. TSA Approved</li>
                        </ul>
                    </p>


                </div>
            </div>

            <div className=' mt-5 font-oswald '>
                <p className='font-semibold mt-2 lg:ml-36 text-lg ml-12 md:ml-10'>User Reviews -</p>
                <UserReview />
                <UserReview />
                <UserReview />
                <UserReview />
                <UserReview />
                <UserReview />
                <UserReview />
                <UserReview />
                <UserReview />

            </div>

        </>
    );
};

export default ProductPage;
