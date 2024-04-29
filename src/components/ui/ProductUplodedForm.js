import axios from 'axios';
import { Button, FileInput, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { UserContext } from '../../App';
import Api from '../WebApi';
function ProductUplodedForm() {

    const { categoryList, isLoading, error } = useSelector((store) => store.category);
    const { user, setUser } = useContext(UserContext);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        categoryName: '',
        price: '',
        seller: '',
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
        formDataToSend.append('productName', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('sellerId', user._id);
        formDataToSend.append('thumbnail', formData.thumbnail);
        formData.images.forEach((image, index) => {
            formDataToSend.append('images', image);
        });



        try {
            console.log(formDataToSend);
            console.log("DATAAAAAAAAAAAAAAAAAA :  ", formDataToSend);
            const response = await axios.post(Api.AddProductByUserID, formDataToSend);
            console.log('Product added successfully:', response.data);
        } catch (error) {
            console.log('Error adding product:', error);
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center border-2 border-slate-800 rounded-xl p-4">
            <form className='grid-cols-2 w-10/12 grid gap-4' onSubmit={handleSubmit} enctype="multipart/form-data">

                <div className='col-span-2'>
                    <div> <Label htmlFor="title" value="Title" /></div>
                    <TextInput type="text" name="title" placeholder="Title" onChange={handleInputChange} />
                </div>

                <div className='col-span-1'>
                    <div> <Label htmlFor="category" value="Category" /></div>
                    <select className="select select-bordered" name="category" onChange={handleInputChange}>
                        <option disabled selected>Pick one</option>
                        {categoryList.map((category, index) => (
                            <option key={category._id} value={category.categoryName}>
                                {category.categoryName}
                            </option>
                        ))}
                    </select>
                </div>


                <div className='col-span-2'>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Add Scrap Description</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24"
                            placeholder="Add Scrap Description" type="text" name="description" onChange={handleInputChange}>
                        </textarea>
                    </label>
                </div>
                <div className='cols-span-2'>
                    <div> <Label htmlFor="price" value="Price" /></div>
                    <TextInput type="number" name="price" placeholder="Price" onChange={handleInputChange} />
                </div>

                <div className='col-span-2'>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="file-upload" value="Upload File" />
                        </div>
                        <FileInput type="file" name="thumbnail" accept="image/*" onChange={handleThumbnailChange} id="file-upload" />
                    </div>
                    <input />
                </div>

                <div className='col-span-2'>
                    <div className="mb-2 block">
                        <Label htmlFor="file-upload" value="Upload Images" />
                    </div>
                    <FileInput type="file" name="images" accept="image/*" multiple onChange={handleImagesChange} />
                </div>
                <div className='col-span-2'>
                    <Button className='b' type="submit">Add Product</Button>
                </div>
            </form >
        </div >
    );
}

export default ProductUplodedForm;
