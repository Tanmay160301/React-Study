/* eslint-disable no-unused-vars */
/**
 * export allows you to export multiple values from a module, while export default is used to export a single value.
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const initialState = {
    value:[]
}

export const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers:{
        deleteProduct: (state, action) => {
            const id = action.payload;
            state.value = state.value.filter((item) => item.id!=id);
        },
        addProduct: (state, action) =>{
            const obj = action.payload;
            obj.rating = {rate:obj.rating}
            // console.log(obj);
            state.value.unshift(obj)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(productsInfo.fulfilled, (state,action) => {
            // console.log(action.payload);
            state.value = action.payload;
        })
        .addCase(productsInfo.pending, () => {
            console.log("State is pending");
        })
    }
})

//Action is created for asynchronous actions
export const productsInfo = createAsyncThunk(
    "Products/getAllProducts",
    async() => {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    }
)

export const {deleteProduct, addProduct} = productSlice.actions;

//Exporting a reducer
export default productSlice.reducer