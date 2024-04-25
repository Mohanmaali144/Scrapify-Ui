
"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux-config/CategorySlice";
import { getProduct } from "../../redux-config/ProductSlice";
import CarouselHome from "../ui/CarosuelHome";
import CoustumerSectionHome from "../ui/CoustumerSectionHome";
import LockDealNowSection from "../ui/LockDealNowSection";
import OurAim from "../ui/OurAim";
import ProductCard from "../ui/ProductCard";


export default function Home() {
    const { categoryList, isLoading, error } = useSelector((store) => store.category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct());
        dispatch(getCategory())
    }, []);
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
                <ProductCard />
            </div>

            <div>
                <LockDealNowSection />
            </div>
            <div>
                <OurAim />
            </div>

        </>
    );
}
