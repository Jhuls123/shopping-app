import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, deductCartQuantity, clearAllCart, overAllTotal } from "../features/cartSlice";

function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch()
	const handleRemoveFromCart = (cartItem) => {
		dispatch(removeFromCart(cartItem))
	}
	const handleDeductCart = (cartItem) => {
		dispatch(deductCartQuantity(cartItem))
	}
	const handleAddingCart = (cartItem) => {
		dispatch(addToCart(cartItem))
	}
	const removeAllCartItems = () => {
		dispatch(clearAllCart())
	}
	useEffect(()=>{
		dispatch(overAllTotal())
	},[cart, dispatch]);
	return (
		<div className="py-8 px-16">
			<h2 className="text-center font-Pacifico font-normal text-red-500">Shopping Cart</h2>
			{cart.cartItems.length === 0 ? (
				<div className="flex flex-col justify-center items-center mt-10">
					<h6 className="font-Dongle text-3xl">Your cart is currently empty!</h6>
					<div className="group mt-5">
						<Link to='/' className="flex items-center">
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 mr-3 text-gray-500 group-hover:text-red-500'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M7 16l-4-4m0 0l4-4m-4 4h18'
								/>
							</svg>
							<span className="font-Pacifico text-gray-500 group-hover:text-red-500">Start Shopping</span>
						</Link>
					</div>
				</div>
			) : (
				<div>
					<div className="mt-8 mr-0 mb-4 ml-0 uppercase grid items-center grid-cols-4 font-Dongle">
						<h6 className="pl-0.5 text-3xl">Product</h6>
						<h6 className=" text-3xl">Price</h6>
						<h6 className=" text-3xl">Quantity</h6>
						<h6 className="justify-self-end pr-0.5 text-3xl">Total</h6>
					</div>
					<div>
						{cart.cartItems.map((cartItem) => {
							return (
								<div key={cartItem.id} className="grid items-center grid-cols-4 border-t-2 broder-gray-900 py-4 px-0">
									<div className="flex">
										<img src={cartItem.image} alt={cartItem.name} className="w-28 mr-4" />
										<div>
											<h6 className="font-Dongle text-3xl">{cartItem.name}</h6>
											<span className="font-Dongle text-2xl">{cartItem.desc}</span>
											<button className='mt-0.7 cursor-pointer block text-gray-400 border-2 px-3 rounded-md hover:border-red-500 hover:text-red-500 font-Pacifico' onClick={() => handleRemoveFromCart(cartItem)}>remove</button>
										</div>
									</div>
									<div className="font-Pacifico">${cartItem.price}</div>
									<div className="flex justify-center w-28 border-2 rounded-md hover:border-blue-300">
										<button className='btn py-0.5 px-5 font-Pacifico hover:text-red-500' onClick={()=>handleDeductCart(cartItem)}>-</button>
										<div className="self-center font-Pacifico">{cartItem.cartQuantity}</div>
										<button className='btn py-0.5 px-5 font-Pacifico hover:text-green-500' onClick={()=>handleAddingCart(cartItem)}>+</button>
									</div>
									<div className="justify-self-end pr-0.5 font-Pacifico">${cartItem.price * cartItem.cartQuantity}</div>
								</div>
							);
						})}
					</div>
					<div className="flex justify-between items-center border-t-4 pt-8">
						<button className='border-2 py-1 px-3 rounded-lg font-Pacifico hover:border-red-500 hover:text-red-500 text-md' onClick={()=>removeAllCartItems()}>Clear Cart</button>
						<div className="flex flex-col py-3">
							<div className="flex justify-between items-center">
								<span className="font-Pacifico">Subtotal</span>
								<span className="text-5xl font-Dongle text-red-500">${cart.cartTotalAmount}</span>
							</div>
							<span className="font-semibold text-xl my-2 font-Dongle">Taxes and Shipping calculated at out.</span>
							<button className="btn bg-blue-500 py-1 px-2 tracking-widest text-gray-100 hover:bg-blue-600 flex-1 block font-Pacifico font-normal">Checkout</button>
							<div className="">
								<Link to='/' className="group flex mt-3">
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 mr-3 text-gray-500 group-hover:text-red-500'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth={2}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M7 16l-4-4m0 0l4-4m-4 4h18'
										/>
									</svg>
									<span className="font-Pacifico cursor-pointer text-gray-500 group-hover:text-red-500">Continue Shopping</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Cart;
