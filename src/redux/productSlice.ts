import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInformation, Sale } from "../utils/type";

interface ProductState {
    productInformation: ProductInformation
}

const initialState: ProductState = {
    productInformation: {
        "id": "",
        "title": "",
        "image": "",
        "subtitle": "",
        "brand": "",
        "reviews": [],
        "retailer": "",
        "details": [],
        "tags": [],
        "sales": []
    }
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductInformation: (state, action: PayloadAction<ProductInformation>) => {
            state.productInformation = action.payload
        },
        setSalesinformation: (state, action: PayloadAction<Array<Sale>>) => {
            state.productInformation.sales = action.payload;
        }
    }
});

export const { setProductInformation, setSalesinformation } = productSlice.actions;
export default productSlice.reducer;