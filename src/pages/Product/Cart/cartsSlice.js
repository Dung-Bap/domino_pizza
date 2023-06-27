const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [
              // {
              //     id: 1,
              //     name: 'Pizza Hải Sản Xốt Cà Chua - Seafood Delight',
              //     img: 'https://img.dominos.vn/Menu+BG+1.jpg',
              //     price: '209000',
              //     thin: 'Đế dày xốp',
              //     size: 'Cỡ 9 inch',
              //     cartQuantity: 1
              // },
          ],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addProduct(state, action) {
            const existingIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + action.payload.cartQuantity,
                };
            } else {
                let tempProductItem = { ...action.payload };
                state.cartItems.unshift(tempProductItem);
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        deletedProduct(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    const nextCartItems = state.cartItems.filter((item) => item.id !== cartItem.id);

                    state.cartItems = nextCartItems;
                }
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
                return state;
            });
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 2) {
                const nextCartItems = state.cartItems.filter((item) => item.id !== action.payload);
                state.cartItems = nextCartItems;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        increaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);

            if (state.cartItems[itemIndex].cartQuantity > 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter((item) => item.id !== action.payload);
                state.cartItems = nextCartItems;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    },
});
