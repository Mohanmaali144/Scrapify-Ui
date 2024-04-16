"use client";
import SlRating from '@shoelace-style/shoelace/dist/react/rating';
export default function ProductCard() {
    return (
        <>
            <div className="h-[450px] bg-white shadow-xl m-2 rounded-xl p-3 ">
                <div className="w-[200px] rounded-lg" >
                    <img className="rounded-2xl " src={'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg'} />
                    <div className='flex text-lg justify-around mt-3 items-center'>
                        <SlRating label="Rating" precision={0.5} value={4.5} />
                        <p className='font-oswald text-[16px] font-light'>Reviews : {23}</p>
                    </div>
                    <h4 className='font-oswald ml-3'>{'Product Title'}</h4>
                    <p className='font-oswald font-medium text-yellow-600 mt-2 ml-3'>From Rs:{1200}/-</p>
                    <button className='ml-3 mt-4 text-white bg-slate-800 px-4 font-oswald rounded-xl py-2 hover:bg-[#CFDDF7] hover:text-[#272727]'>Add To Cart</button>
                </div>
            </div>
        </>
    );
}
