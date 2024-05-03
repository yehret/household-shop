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
         state.order = [];
      }
   }
})

export const {fetchStart, fetchSuccess, fetchFailure, clearProfileOrders} = profileOrdersSlice.actions

export default profileOrdersSlice.reducer