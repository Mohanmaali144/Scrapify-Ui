import React, { useEffect } from "react";

export default function UserCreativeProductList() {
    useEffect(()=>{
        
    })
    return (
        <div className="">
            <div className="rounded-xl shadow-2xl p-2 h-auto bg-white m-2 flex justify-around items-center">
                <div className="flex  items-cente w-4/5 ">
                    <div className="h-36 w-36 rounded-xl">
                        <img className="h-36 w-36 rounded-xl" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
                    </div>
                    <div className="flex  items-start ml-4 mt-2 flex-col">
                        {/* scrap title and edit btn and timeing when he posted */}
                        <h3 className="font-oswald font-medium">Cooler Old </h3>
                        <h3 className="font-oswald font-normal">02/02/2024 3:13 PM </h3>
                    </div>
                </div>
                <div className="flex w-1/5 justify-end  h-full  items-center flex-col">
                    <button className="bg-red-500 text-white rounded-xl py-1 m-1 font-oswald font-medium px-6">Delete</button>
                    <button className="bg-red-500 text-white rounded-xl py-1 m-1 font-oswald font-medium px-6">Edit</button>
                    <button className="bg-red-500 text-white rounded-xl py-1 m-1 font-oswald font-medium px-6">View</button>
                </div>
            </div>
        </div>



    );
}
