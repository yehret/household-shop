import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   orders: [],
}

export const profileOrdersSlice = createSlice({
   name: 'profileOrders',
   initialState,
   reducers: {
      fetchStart: (state) => {
         state.loading = true;
      },
      fetchSuccess: (state, action) => {
         state.loading = false;
         state.orders = action.payload;
      },
      fetchFailure: (state) => {
         state.loading = false;
         state.error = true;
      },
      clearProfileOrders: (state) => {
         state.orders = [];
      },
      cancelOrder: (state, action) => {
         const updatedOrders = state.orders.map(order => order._id === action.payload ? {...order, status: 'скасовано'} : order)
         state.orders = updatedOrders;
      },
      readyOrder: (state, action) => {
         const updatedOrders = state.orders.map(order => order._id === action.payload ? {...order, status: 'готово до видачі'} : order)
         state.orders = updatedOrders;
      },
      completeOrder: (state, action) => {
         const updatedOrders = state.orders.map(order => order._id === action.payload ? {...order, status: 'виконано'} : order)
         state.orders = updatedOrders;
      }

   }
})

export const {fetchStart, fetchSuccess, fetchFailure, clearProfileOrders, cancelOrder, readyOrder, completeOrder} = profileOrdersSlice.actions

export default profileOrdersSlice.reducer