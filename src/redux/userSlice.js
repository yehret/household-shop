import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   currentUser: null,
   loading: false,
   error: false
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      loginStart: (state) => {
         state.loading = true;
      },
      loginSuccess: (state, action) => {
         state.loading = false;
         state.currentUser = action.payload
      },
      loginFailure: (state) => {
         state.loading = false;
         state.error = true;
      },
      logout: (state) => {
         state.currentUser =  null;
         state.loading = false;
         state.error= false;
      },
      favourite: (state, action) => {
         if(state.currentUser.favourites.includes(action.payload)){
            state.currentUser.favourites.splice(state.currentUser.favourites.findIndex(productId => productId === action.payload), 1)
         }
         else {
            state.currentUser.favourites.push(action.payload)
         }
      }
   }
})

export const {loginStart, loginSuccess, loginFailure, logout, favourite} = userSlice.actions

export default userSlice.reducer