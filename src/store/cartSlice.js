import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState :{
        cart:[]
    },
    reducers:{
        addToCart : (state, action) => {
            var data = {
                id:nanoid,
                product:action.payload.product,
                quantity:action.payload.quantity
            }
            state.cart.push(data);
        }

    }
})

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;