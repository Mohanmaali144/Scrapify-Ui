import axios from 'axios';
import React, { useState } from 'react';
import Api from '../WebApi';
function ScrapUploadForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        categoryName: '',
        condition: '',
        price: '',
        seller: '',
        city: '',
        state: '',
        landmark: '',
        fullAddress: '',
        status: '',
        pincode: '',

        thumbnail: null,
        images: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, thumbnail: file });
    };

    const handleImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({ ...formData, images: files });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('categoryName', formData.categoryName);
        formDataToSend.append('condition', formData.condition);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('seller', formData.seller);
        formDataToSend.append('city', formData.city);
        formDataToSend.append('landmark', formData.landmark);
        formDataToSend.append('state', formData.state);
        formDataToSend.append('fullAddress', formData.fullAddress);
        formDataToSend.append('pincode', formData.pincode);
        formDataToSend.append('status', formData.status);
        formDataToSend.append('thumbnail', formData.thumbnail);

        // formData.images.forEach((image, index) => {
        //     formDataToSend.append(images[${index}], image);
        // });
        formData.images.forEach((image, index) => {
            formDataToSend.append(images, image);
        });



        try {
            console.log(formDataToSend);
            console.log("DATAAAAAAAAAAAAAAAAAA :  ", formDataToSend);
            const response = await axios.post(Api.AddScrapProduct, formDataToSend);
            console.log('Product added successfully:', response.data);
            // Optionally, you can redirect to another page or show a success message
        } catch (error) {
            console.log('Error adding product:', error);
            // Handle error (e.g., show error message to the user)
        }
    };

    return (
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <input type="text" name="title" placeholder="Title" onChange={handleInputChange} />
            <input type="text" name="description" placeholder="Description" onChange={handleInputChange} />
            <input type="text" name="categoryName" placeholder="Category Name" onChange={handleInputChange} />
            <input type="text" name="condition" placeholder="Condition" onChange={handleInputChange} />
            <input type="number" name="price" placeholder="Price" onChange={handleInputChange} />
            <input type="text" name="seller" placeholder="Seller" onChange={handleInputChange} />
            <input type="text" name="city" placeholder="city" onChange={handleInputChange} />
            <input type="text" name="state" placeholder="state" onChange={handleInputChange} />
            <input type="text" name="landmark" placeholder="landmark" onChange={handleInputChange} />
            <input type="text" name="fullAddress" placeholder="fullAddress" onChange={handleInputChange} />
            <input type="text" name="pincode" placeholder="pincode" onChange={handleInputChange} />
            <input type="text" name="status" placeholder="Status" onChange={handleInputChange} />
            <input type="file" name="thumbnail" accept="image/*" onChange={handleThumbnailChange} />
            <input type="file" name="images" accept="image/*" multiple onChange={handleImagesChange} />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default ScrapUploadForm;
