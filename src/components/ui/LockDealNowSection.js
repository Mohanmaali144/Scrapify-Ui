import truck from './img/truck.png'
export default function LockDealNowSection() {
    return <>
        <div className="h-auto sm:flex  sm:justify-center sm:pl-16 pt-5 bg-[#f6f6f6]  ">
            <div className="flex justify-start items-center sm:flex sm:justify-center sm:items-start sm:w-1/2 flex-col">
                <div className="sm:text-lg text-center sm:text-left font-bold">BEGIN YOUR JOURNEY SELL YOUR SCRAP</div>
                <div className="sm:text-3xl text-xl text-center sm:text-left font-oswald mt-4 font-semibold ">Sell Your Scrap Find Scrap Dealer Now !</div>
                <div className="mt-6 sm:text-xl"><span className="font-extrabold font-oswald">SAVE </span> YOUR <span className="font-bold font-oswald">TIME </span> WITH US MAKE DAY <br></br> HAPPY 1ST DEAL <span className="font-bold font-oswald">50% OFF </span> OFFER!!!</div>
                <button className='mt-4 text-white bg-slate-800 px-4 font-oswald rounded-xl py-2 hover:bg-[#CFDDF7] hover:text-[#272727]'>Lock Deal Now</button>
            </div>
            <div className="h-full -mt-5 flex justify-center items-center sm:w-1/2 p-4">
                <img src={truck} className=' ' />
            </div>
        </div >
    </>
}

