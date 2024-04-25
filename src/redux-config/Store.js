
import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from './CategorySlice';
import ProductSlice from "./ProductSlice";
export const Store = configureStore({
    reducer: {
        product: ProductSlice,
        category: CategorySlice
    }
})
