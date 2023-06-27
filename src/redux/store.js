import productSlice from '~/ProductPages/PizzaListing/productSlice';
import { cartsSlice } from '~/pages/Product/Cart/cartsSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        carts: cartsSlice.reducer,
    },
});

export default store;
