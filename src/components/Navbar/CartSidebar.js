import { FaCartPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
export default function CartSidebar({ closeCartbar }) {
    return <>
        <div className="absolute top-0 z-30 md:w-6/12 lg:w-5/12 sm:w-7/12 w-full bg-slate-600 h-screen right-0">
            <div className="size-full bg-slate-300">
                <div className="h-[50px] bg-black flex justify-around  items-center ">
                    <div className="text-center font-oswald w-10/12  text-white text-2xl py-2 flex justify-center items-center">
                        <h3 className="p-5">Cart</h3>
                        <FaCartPlus />
                    </div>
                    <IoCloseSharp onClick={() => { closeCartbar(false) }} className="text-white h-full text-center -mr-2   text-3xl" />
                </div>
            </div>
        </div></>
}