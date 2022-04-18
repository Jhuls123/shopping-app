import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
	cartItems: localStorage.getItem("shop")
		? JSON.parse(localStorage.getItem("shop"))
		: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
				toast.info(
					`increase ${state.cartItems[itemIndex].name} quantity to ${state.cartItems[itemIndex].cartQuantity}`,
					{
						position: "bottom-left",
					}
				);
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProduct);
				toast.success(`${action.payload.name} added.`, {
					position: "bottom-left",
				});
			}
			localStorage.setItem("shop", JSON.stringify(state.cartItems));
		},
		removeFromCart(state, action) {
			const nextCartItems = state.cartItems.filter(
				(cartItem) => cartItem.id !== action.payload.id
			);
			state.cartItems = nextCartItems;
			localStorage.setItem("shop", JSON.stringify(state.cartItems));

			toast.error(`${action.payload.name} remove from cart.`, {
				position: "bottom-left",
			});
		},
		deductCartQuantity(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;

				toast.info(`Deducting ${action.payload.name} quantity.`, {
					position: "bottom-left",
				});
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const nextCartItems = state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				);
				state.cartItems = nextCartItems;

				toast.error(`${action.payload.name} remove from cart.`, {
					position: "bottom-left",
				});
			}
			localStorage.setItem("shop", JSON.stringify(state.cartItems));
		},
		clearAllCart(state, action) {
			state.cartItems = [];
			localStorage.setItem("shop", JSON.stringify(state.cartItems));
			toast.error("All items remove successfully!", {
				position: "bottom-left",
			});
		},
		overAllTotal(state) {
			let { total, quantity } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { price, cartQuantity } = cartItem;
					const totalValue = price * cartQuantity;

					cartTotal.total += totalValue;
					cartTotal.quantity += cartQuantity;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},
	},
});

export const { addToCart, removeFromCart, deductCartQuantity, clearAllCart, overAllTotal } =
	cartSlice.actions;
export default cartSlice.reducer;
