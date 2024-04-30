
import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from './CategorySlice';
import ProductSlice from "./ProductSlice";
import ScrapCategorySlice from "./ScrapCategory";
export const Store = configureStore({
    reducer: {
        product: ProductSlice,
        category: CategorySlice,
        scrapcategory: ScrapCategorySlice,
    }
})
