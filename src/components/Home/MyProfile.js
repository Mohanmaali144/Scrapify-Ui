export default function MyProfile() {
    return <>
        <div className="w-[200px] h-[300px] bg-slate-50 text-black font-oswald font-medium flex justify-start items-sta">
            <ul className=" w-full">
                <h3 className="p-2 bg-[#272727] text-white w-full h-auto text-center">Deshboard</h3>
                <li className="p-2 bg-slate-50 text-black text-center hover:bg-slate-300 transition ease-in-out delay-150">MyProfile</li>
                <li className="p-2 bg-slate-50 text-black text-center hover:bg-slate-300 transition ease-in-out delay-150">Your Scrap</li>
                <li className="p-2 bg-slate-50 text-black text-center hover:bg-slate-300 transition ease-in-out delay-150">Your Product</li>
            </ul>
        </div>
        {/* your scrap */}
        <div>
            
        </div>
    </>
}