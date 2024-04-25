import SellProducts from "./SellProducts";

export default function MyProfile() {
    return <>
        <div className="flex justify-center items-centers ">
            <div className="w-3/12 h-auto bg-slate-50 text-black font-oswald font-medium flex justify-start ">
                <ul className=" w-full">
                    <h3 className="p-2 bg-[#272727] text-white w-full h-auto text-center">Deshboard</h3>
                    <li className="p-2 bg-slate-50 text-black text-center hover:bg-slate-300 transition ease-in-out delay-150">MyProfile</li>
                    <li className="p-2 bg-slate-50 text-black text-center hover:bg-slate-300 transition ease-in-out delay-150">Your Scrap</li>
                    <li className="p-2 bg-slate-50 text-black text-center hover:bg-slate-300 transition ease-in-out delay-150">Your Product</li>
                </ul>
            </div>
            {/* your scrap */}
            <div className="p-2 w-9/12">
                <div>
                    <SellProducts />
                </div>

            </div>
        </div>
    </>
}