import { configureStore } from '@reduxjs/toolkit'
import productReducer from './ProductSlice/ProductSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
    }
})

