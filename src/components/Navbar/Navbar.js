import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Login from "../Home/Login";
import Signup from "../Home/Signup";
import SearchProductMobile from "../ui/SearchProductMobile";
import CartSidebar from "./CartSidebar";
import Sidebar from "./Sidebar";
export default function Navbar() {

    const [openSidebar, closeSidebar] = useState(false);
    const [showCart, closeCartbar] = useState(false);
    const [seachOnMobile, setSeachOnMobile] = useState(false);
    const [signup, setSignup] = useState(false)
    const [login, setLogin] = useState(false)


    return <>

        <div className="relative h-[100px]">

            <div className=" h-[60px] flex ml-6 sm:-ml-4 justify-center items-center ">
                <div className=" h-full visible sm:hidden w-1/3  flex ">
                    <button onClick={() => closeSidebar(true)} className=""> <IoMdMenu className="text-3xl" /></button>
                </div>

                <div className="sm:w-1/4  w-1/2 ml-6 font-oswald flex  justify-center items-start sm:pl-11 flex-col h-[60px]">
                    {/* logo */}
                    <h3 className="text-2xl font-extrabold">SCREPIFY</h3>
                    <span className="text-sm font-bold opacity-65">Slogan paste here</span>
                </div>
                <div className=" sm:visible  hidden sm:w-1/2 font-oswald sm:flex justify-center items-center  h-[60px]">
                    {/* searchbar */}
                    <input placeholder="Search Product . . . . . . ." className="p-3  w-10/12 h-[40px] rounded-l-2xl border-l-2 border-slate-800 border-y-2"></input>
                    <button className=" w-[80px] text-slate-600 transition duration-600 ease-in-out hover:bg-black hover:text-white bg-[#CFDDF7] h-[40px] rounded-r-2xl font-oswald font-semibold border-r-2 border-slate-800 border-y-2">Serach</button>
                </div>
                <div className="sm:w-1/4 1/2  font-oswald h-[60px] flex justify-around items-center ">
                    <div className="hidden md:block">
                        {/* signup/signin */}
                        <div className="">
                            👋 Hello UserName,
                        </div>
                        <div >
                            <button onClick={()=>setLogin(true)} className="cursor-pointer">Login in</button>
                            &nbsp;&&nbsp;
                            <button onClick={()=>setSignup(true)} className="cursor-pointer">Register</button>
                        </div>
                    </div>
                    <div className="flex justify-around md:w-1/3 items-center">

                        {/* add to cart / notification */}
                        <FaSearch className="text-xl sm:text-2xl mr-5 sm:hidden cursor-pointer" onClick={() => setSeachOnMobile(true)} />
                        <div>
                            <MdOutlineNotificationsNone className="text-3xl hidden sm:block cursor-pointer" />
                            <p className="h-[18px] hidden sm:block text-center absolute top-2  w-[18px] bg-black text-[12px] rounded-full text-white">1</p>
                        </div>
                        <div>
                            <RiShoppingCartLine onClick={() => closeCartbar(true)} className="text-3xl mr-4 sm:m-2  cursor-pointer" />
                            <p className="h-[18px] text-center absolute top-2 sm:right-11 md:right-5 w-[18px] bg-black text-[12px] rounded-full text-white">2</p>

                        </div>
                    </div>
                </div>
            </div>
            {/* s=navbar second section */}
            <div className="h-[1px] opacity-40 ml-2 mr-2 bg-black  "></div>
            <div className="pl-5 pr-5 h-[40px] flex justify-between ml-3 mr-3 items-center">

                <button onClick={() => closeSidebar(true)} className="hidden sm:visible font-oswald sm:flex justify-center cursor-pointer items-center"> <IoMdMenu className="text-2xl" /> &nbsp;<span className="cursor-pointer">All</span></button>

                <div className="font-oswald ">
                    <NavLink to={'/'}>Home</NavLink>
                </div>
                <div className="hidden sm:block font-oswald ">
                    <NavLink to={'shop'}>Shop</NavLink>
                </div>
                <div className="hidden sm:block font-oswald ">
                    <NavLink to={'/category'}>Category</NavLink>
                </div>
                <div className="font-oswald ">
                    <NavLink to={'/sellproduct'}>
                        Sell-Creatives
                    </NavLink>
                </div>
                <div className="font-oswald ">
                    <NavLink to={'/list-scrap'}>
                        List-Scrap
                    </NavLink>
                </div>
                <div className="hidden sm:block font-oswald ">
                    <NavLink to={'/ourbrand'}>Our Brand</NavLink>
                </div>

            </div>
            <div className="h-[1px] opacity-40 ml-2 mr-2 bg-black"></div>

            {openSidebar ? <Sidebar closeSidebar={closeSidebar} openSidebar={openSidebar} /> : ''}
            {showCart ? <CartSidebar closeCartbar={closeCartbar} /> : ''}
            {seachOnMobile ? <SearchProductMobile setSeachOnMobile={setSeachOnMobile} /> : ''}
        </div>
        {/*Sigup login modal */}

        {signup ? <Signup setLogin={setLogin} setSignup={setSignup}  /> : ''}
        {login ? <Login setLogin={setLogin} setSignup={setSignup}  /> : ''}

    </>

}