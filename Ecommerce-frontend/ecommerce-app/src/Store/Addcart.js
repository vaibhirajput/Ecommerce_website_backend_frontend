// import createSlice from "@reduxjs/toolkit";
const {createSlice} = require('@reduxjs/toolkit')


const initialState = [];

const cartSlice = createSlice({

  name : 'cart',
  initialState,
  reducers:{
    add(state, action){
        state.push(action.payload);
    },
  remove(state, action){
      return state.filter(item => item._id !== action.payload)
  }, 

  }
});
// export const cartdata = state=> state.cart;
export const {add , remove} = cartSlice.actions;
export default cartSlice.reducer;