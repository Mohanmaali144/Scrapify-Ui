import { IoCloseSharp } from "react-icons/io5";
export default function Sidebar({ closeSidebar, openSidebar }) {
    return <>
        <div className={`absolute top-0 z-30 md:w-6/12 lg:w-5/12 sm:w-7/12 w-full bg-slate-600 h-screen transition-transform duration-900 ease-in-out transform ${openSidebar ? 'translate-x-0' : '-translate-x-full'} `}>
            <div className="size-full bg-slate-300">
                <div className="h-[50px] bg-black flex justify-around  items-center ">
                    <h3 className="text-center font-oswald w-10/12  text-white text-2xl py-2">Screpify</h3>
                    <IoCloseSharp onClick={() => closeSidebar(false)} className="text-white h-full text-center -mr-4 text-3xl" />
                </div>
                {/* links */}
                <div className="ml-5 mt-2">
                    <h3 className="font-oswald text-xl font-medium text-slate-600">Tranding</h3>
                    <ul className="text-slate-600 cursor-pointer list-item ml-5 font-oswald text-lg font-light">
                        <li >New Arraivals</li>
                        <li >Top- 10 Products</li>
                    </ul>
                </div>
                <div className="ml-5 mt-2">
                    <h3 className="font-oswald text-xl  text-slate-600 font-medium">Category</h3>
                    <ul className="list-item ml-5 cursor-pointer font-oswald text-lg text-slate-600 font-light">
                        <li >C 1</li>
                        <li >C 2</li>
                    </ul>
                </div>
            </div>
        </div></>
}