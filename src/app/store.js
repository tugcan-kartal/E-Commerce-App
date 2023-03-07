import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import productsSlice from "../features/productsSlice";

export const store=configureStore({
    reducer:{
        productReducer: productsSlice,
        cartReducer: cartSlice
    }
});