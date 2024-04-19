
"use client";
import CarouselHome from "../ui/CarosuelHome";
import CoustumerSectionHome from "../ui/CoustumerSectionHome";
import Footer from "../ui/Footer";
import LockDealNowSection from "../ui/LockDealNowSection";
import OurAim from "../ui/OurAim";
import ProductCard2 from "../ui/ProductCard2";


export default function Home() {
    return (
        <>
            {/* carousel */}
            <div className="h-56 sm:h-64 md:h-96 mt-1" >
                <CarouselHome />
            </div>
            {/* coustomer section  */}
            <div>
                <CoustumerSectionHome />
            </div>
            <div className="grid sm:place-items-center lg:grid-cols-4 lg:gap-5 pl-2 pr-2 sm:grid-cols-2 sm:gap-3 grid-cols-1 place-items-center ">
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
            </div>

            <div>
                <LockDealNowSection />
            </div>
            <div>
                <OurAim />
            </div>
            <div>
                <Footer />
            </div>

        </>
    );
}
