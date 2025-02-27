import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   orderStack: [],
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const newCartItem = action.payload
         const existingItemIndex = state.orderStack.findIndex(item => item._id === newCartItem._id);
         if (existingItemIndex !== -1) {
            // If item already exists, increment quantityOrder
            state.orderStack[existingItemIndex].quantityOrder++;
          } else {
            // If item doesn't exist, add it with quantityOrder 1
            state.orderStack = [...state.orderStack, { ...newCartItem, quantityOrder: 1 }];
          }
      },
      removeItem: (state, action) => {
         state.orderStack = state.orderStack.filter(item => item._id !== action.payload);
      },
      clearCart: (state) => {
         state.orderStack = [];
      },
      addQuantity: (state, action) => {
         const existingItemIndex = state.orderStack.findIndex(item => item._id === action.payload);
         if (existingItemIndex !== -1) {
            state.orderStack[existingItemIndex].quantityOrder++;
          }
      },
      minusQuantity: (state, action) => {
         const existingItemIndex = state.orderStack.findIndex(item => item._id === action.payload);
         if (existingItemIndex !== -1) {
            state.orderStack[existingItemIndex].quantityOrder--;
          }
      }
   }
})

export const {addToCart, removeItem, clearCart, addQuantity, minusQuantity} = cartSlice.actions

export default cartSlice.reducer