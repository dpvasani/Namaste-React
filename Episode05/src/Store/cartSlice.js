import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
    initialState: {
        items: ["Burger", "Pizza", "Pasta"], // Initial state of the cart
        totalItems: 3,
        totalPrice: 100,
    },
    reducers: {
        // Reducer Again an Object with key-value pairs
        // The key is the action name and the value is the function that updates the state
        // Actions to manage the cart state
        // addItem, removeItem, clearCart are the action names and the functions are the reducers
        // These functions take the current state and an action as arguments
        addItem: (state, action) => {
            // modify the state directly based on the action
            // action.payload contains the item to be added
            const item = action.payload;
            state.items.push(item);
            state.totalItems += 1;
            state.totalPrice += item.price;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                state.items.splice(itemIndex, 1);
                state.totalItems -= 1;
                state.totalPrice -= item.price;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        },
    },
});

// The createSlice function automatically generates action creators and action types
// based on the reducers defined in the slice.
// For example, the addItem action will be available as cartSlice.actions.addItem
// and the action type will be 'cart/addItem'.
// cart Slice is sort of big objcet which contains the actions and the reducer
// The actions are the functions that will be used to update the state
// and the reducer is the function that will be used to update the state based on the actions.

// Export the actions to be used in components
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;