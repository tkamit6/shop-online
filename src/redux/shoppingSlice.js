import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null,
    orderData: []
}

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const existingProduct = state.productData.find((item) => {
                return item._id === action.payload._id
            })
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find((item) => {
                return item._id === action.payload._id
            })
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find((item) => {
                return item._id === action.payload._id
            })
            if (existingProduct.quantity === 0) {
                existingProduct.quantity = 0
            } else {
                existingProduct && existingProduct.quantity--;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(item => item.id !== action.payload);
            console.log("delete");
        },
        resetCart: (state) => {
            state.productData = [];
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        deleteUser: (state) => {
            state.userInfo = null;
        },
        saveOrder: (state, action) => {
            state.orderData = action.payload;
        },
        resetOrder: (state) => {
            state.orderData = []
        }
    }
});

export const { addtoCart, increaseQuantity, decreaseQuantity, resetCart, deleteProduct, addUser, deleteUser, saveOrder, resetOrder } = shoppingSlice.actions;
export default shoppingSlice.reducer;