import { useState } from "react";
import SellProducts from "./SellProducts";
import SellScrap from "./SellScrap";
import UserProfile from "./UserProfile";

export default function MyProfile() {
    const [scrapList, setScrapList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [activeTab, setActiveTab] = useState("profile");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="flex justify-center items-start">
                <div className="w-3/12 mt-1 h-auto bg-slate-50 text-black font-oswald font-medium flex justify-start">
                    <ul className="w-full">
                        <h3 className="p-2 bg-[#272727] text-white w-full h-auto text-center">Dashboard</h3>
                        <li
                            className={`p-2 text-center hover:bg-slate-300 transition ease-in-out delay-90 ${activeTab === "profile" ? "bg-slate-300" : "bg-slate-50"}`}
                            onClick={() => handleTabClick("profile")}
                        >
                            MyProfile
                        </li>
                        <li
                            className={`p-2 text-center hover:bg-slate-300 transition ease-in-out delay-90 ${activeTab === "scrap" ? "bg-slate-300" : "bg-slate-50"}`}
                            onClick={() => handleTabClick("scrap")}
                        >
                            Your Scrap
                        </li>
                        <li
                            className={`p-2 text-center hover:bg-slate-300 transition ease-in-out delay-90 ${activeTab === "products" ? "bg-slate-300" : "bg-slate-50"}`}
                            onClick={() => handleTabClick("products")}
                        >
                            Your Product
                        </li>
                    </ul>
                </div>
                {/* your scrap */}
                <div className="p-2 w-9/12">
                    {activeTab === "profile" && <UserProfile />}
                    {activeTab === "products" && <SellProducts />}
                    {activeTab === "scrap" && <SellScrap />}
                </div>
            </div>
        </>
    );
}
