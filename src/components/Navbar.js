import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
	const cart = useSelector((state) => state.cart);

	return (
		<div className='bg-blue-500 h-20 flex items-center justify-between px-10'>
			<Link to='/'>
				<h1 className='text-gray-100 font-Pacifico font-normal tracking-widest'>
					Shopme
				</h1>
			</Link>
			<Link to='/cart'>
				<div className='flex items-center relative'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8 text-white text-right'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
						/>
					</svg>
					<div className='absolute -right-2 -top-1 text-white bg-red-500 h-5 w-5 rounded-full flex justify-center items-center pt-1'>
						<span className='font-Dongle text-2xl'>
							{cart.cartTotalQuantity}
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Navbar;
