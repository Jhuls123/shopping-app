import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
	return (
		<div className='h-screen'>
			<BrowserRouter>
				<ToastContainer />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
