import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0, // nombre de produits dans le panier
        total: 0, // prix total des produits dans le panier
    },
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            const productInCart = state.products.find(
                (p) => p.id === product.id
            );
            if (productInCart) {
                productInCart.quantity++;
            } else {
                state.products.push(product);
            }
            state.quantity++;
            state.total += product.price * product.quantity;
            console.log(state)
        }
    },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;