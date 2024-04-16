
"use client";
import CarouselHome from "../ui/CarosuelHome";
import CartCarosuel from "../ui/CartCarosuel";
import CoustumerSectionHome from "../ui/CoustumerSectionHome";


export default function Home() {
    return (
        <>
            {/* carousel */}
            <div className="h-56 sm:h-64 md:h-96" >
                <CarouselHome />
            </div>
             {/* coustomer section  */}
            <div>
                <CoustumerSectionHome />
            </div>
            <div>
                <CartCarosuel />
            </div>
        </>
    );
}
