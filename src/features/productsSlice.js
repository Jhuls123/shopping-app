import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	items: [],
	status: null,
};

export const productsFetch = createAsyncThunk(
	"products/productsFetch",
	async () => {
            const response = await axios.get("http://localhost:8000/products");
            return response?.data;
	}
);

const producsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[productsFetch.pending]: (state, action) => {
			state.status = "fetching data please wait...";
		},
		[productsFetch.fulfilled]: (state, action) => {
			state.status = "fetching data success...";
			state.items = action.payload;
		},
		[productsFetch.rejected]: (state, action) => {
			state.status = "fetching data failed...";
		},
	},
});

export default producsSlice.reducer;
