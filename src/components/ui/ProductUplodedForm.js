import axios from 'axios';
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../App';

export default function ProductUplodedForm() {
    const [images, setImages] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const { user, setUser } = useContext(UserContext);
    console.log(user._id);

    const { categoryList, isLoading, error } = useSelector((store) => store.category);

    const handleFileChange = (e) => {
        const files = e.target.files;
        let newImages = [];
        let newThumbnail = null;

        for (let i = 0; i < files.length; i++) {
            if (i < 4) {
                if (i === 0) {
                    newThumbnail = files[i];
                } else {
                    newImages.push(files[i]);
                }
            }
        }

        setThumbnail(newThumbnail);
        setImages(newImages);
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!title.trim()) {
            errors.title = 'Title is required';
            isValid = false;
        }

        if (!price.trim()) {
            errors.price = 'Price is required';
            isValid = false;
        }

        if (!category) {
            errors.category = 'Category is required';
            isValid = false;
        }

        if (!description.trim()) {
            errors.description = 'Description is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (validateForm()) {
            const formData = new FormData();
            formData.append('productName', title);
            formData.append('price', price);
            formData.append('category', category);
            formData.append('description', description);
            formData.append('thumbnail', thumbnail);
            formData.append('sellerId', user._id);
            images.forEach((image, index) => {
                formData.append(`images[${index}]`, image);
            });
            
            axios.post("http://localhost:8000/api/product/addProduct", formData)
                .then(response => {
                    console.log('Success:', response.data);
                    setTitle('');
                    setPrice('');
                    setCategory('');
                    setDescription('');
                    setImages([]);
                    setErrors({});
                })
                .catch(error => {
                    console.error('Error:', error);
                    toast.error('Internal Server Error');
                });
        }
    };


    return (

        <div className="w-full h-full flex justify-center items-center border-2 border-slate-800 rounded-xl p-4">
            <ToastContainer />
            <div className="grid-cols-2 w-10/12 grid gap-4" >
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Product Title" />
                    </div>
                    <TextInput
                        id="title"
                        type="text"
                        placeholder="Product Title"
                        required
                        shadow
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                </div>
                <div className='col-span-1'>
                    <div className="mb-2 block">
                        <Label htmlFor="price" value="Scrap Price" />
                    </div>
                    <TextInput
                        id="price"
                        type="text"
                        placeholder="Scrap Price"
                        required
                        shadow
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    {errors.price && <p className="text-red-500">{errors.price}</p>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="category" value="Category" />
                    </div>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {categoryList.map((category, index) => (
                            <option key={index} value={category.categoryName}>{category.categoryName}</option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500">{errors.category}</p>}
                </div>
                <div className='col-span-2'>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Add Scrap Description</span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="Add Scrap Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                </div>
                <div className='col-span-1'>
                    <div className="mb-2 mt-1">
                        <div>
                            <Label htmlFor="small-file-upload" value="Upload Thumbnail" />
                        </div>
                        <FileInput id="small-file-upload" sizing="sm" />
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='bg-[#374151] p-2 w-1/2 text-white text-sm rounded-lg '>
                        <label htmlFor="image-upload" className="cursor-pointer inline-block ">
                            <span className="ml-2 mr-2">+</span> Upload Image
                        </label>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                    <div className='rounded-xl shadow-xl bg-white mt-2 p- w-auto'>
                        {images.length > 0 && (
                            <div>
                                <p>Selected Images:</p>
                                <ul>
                                    {images.map((image, index) => (
                                        <li key={index}>{image.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <Button className='col-span-2 bg-[#374151]' onClick={handleSubmit}>Upload</Button>

            </div>
        </div>
    );
}
