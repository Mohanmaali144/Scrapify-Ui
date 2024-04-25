import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSelect from '@shoelace-style/shoelace/dist/react/select';
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { useState } from 'react';

export default function ProductUplodedForm() {
    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        const files = e.target.files;
        let newImages = [];
        for (let i = 0; i < files.length; i++) {
            if (i < 4) {
                newImages.push(files[i]);
            }
        }
        setImages(newImages);
    };
    return (
        <div className="w-full h-full flex justify-center items-center border-2 border-slate-800 rounded-xl p-4">
            <form className="grid-cols-2 w-10/12 grid gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Product Title" />
                    </div>
                    <TextInput id="title" type="text" placeholder="Product Title" required shadow />
                </div>
                <div className='col-span-1'>
                    <div className="mb-2 block">
                        <Label htmlFor="price" value="Scrap Price" />
                    </div>
                    <TextInput id="title" type="text" placeholder="Scrap Price" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="category" value="category" />
                    </div>
                    <SlSelect>
                        <SlOption value="option-1">Option 1</SlOption>
                        <SlOption value="option-2">Option 2</SlOption>
                        <SlOption value="option-3">Option 3</SlOption>
                    </SlSelect>
                </div>
                <div className='col-span-2'>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Add Scrap Descritpion</span>
                          
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Add Scrap Descritpion"></textarea>
                    </label>
                </div>
                {/* thumbnail upload */}
                <div className='col-span-1'>
                    <div className="mb-2 mt-1">
                        <div>
                            <Label htmlFor="small-file-upload" value="Upload Thumbnail" />
                        </div>
                        <FileInput id="small-file-upload" sizing="sm" />
                    </div>
                </div>
                {/* images upload */}
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
                <Button className='col-span-2 bg-[#374151]' type="submit">Upload</Button>
            </form>
        </div>
    );
}
