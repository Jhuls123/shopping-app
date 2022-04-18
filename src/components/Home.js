import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";

function Home() {
	const dispatch = useDispatch();
	const { data, error, isLoading } = useGetAllProductsQuery();
	const navigate = useNavigate();

	const handleAddCart = (product) => {
		dispatch(addToCart(product));
		navigate("/cart");
	};
	return (
		<div className='py-8 px-16'>
			{isLoading ? (
				<h6>Loading...</h6>
			) : error ? (
				<h6>Somethin went wrong...</h6>
			) : (
				<>
					<h3 className='text-center font-Dongle text-6xl font-normal tracking-wider'>New Arrival</h3>
					<div className='flex justify-between flex-wrap mt-8'>
						{data?.map((product) => (
							<div
								key={product.id}
								className='w-64 max-w-full h-96 flex flex-col justify-between my-4 mx-auto p-4 shadow-2xl rounded-lg'>
								<h4 className="font-Dongle text-3xl">{product.name}</h4>
								<img
									src={product.image}
									alt={product.name}
									className='w-4/5 ml-auto mr-auto my-4'
								/>
								<div className='flex justify-between items-center'>
									<span className='text-gray-900 font-Dongle text-2xl font-extrabold'>
										{product.desc}
									</span>
									<span className='text-gray-900 font-Pacifico font-normal text-2xl'>
										{product.price}
									</span>
								</div>
								<button
									className='btn bg-blue-500 py-1 px-2 font-mono text-gray-100 hover:bg-blue-600'
									onClick={() => handleAddCart(product)}>
									Add To Cart
								</button>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Home;
