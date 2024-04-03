import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    cart : []
}


export const cartSlice = createSlice ({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state, action) => {

            const cartItem = {
                id : nanoid(),
                product : action.payload,
            }
            state.cart.push(cartItem);
        },
        removeFromCart : (state,action) => {
            state.cart = state.cart.filter((cartItem) => cartItem.id != action.payload)
        }
    }

})



export const {addToCart, removeFromCart} = cartSlice.actions 

export default cartSlice.reducer