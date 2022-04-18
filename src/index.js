import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import producsReducer, { productsFetch } from "./features/productsSlice";
import cartReducer, { overAllTotal } from "./features/cartSlice";
import { productsApi } from "./features/productsApi";
import "./index.css";
import App from "./App";

const store = configureStore({
	reducer: {
    products: producsReducer,
    cart: cartReducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(productsApi.middleware);
	},
});
store.dispatch(productsFetch());
store.dispatch(overAllTotal());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
