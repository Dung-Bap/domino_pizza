const { createSlice } = require('@reduxjs/toolkit');

const productSlice = createSlice({
    name: 'products',
    initialState: {
        id: 1,
    },
    reducers: {
        getIdProduct: (state, action) => {
            state.id = action.payload;
        },
    },
});
export default productSlice;
