import React, { lazy } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = lazy(() => import("component/footer"));
const Header = lazy(() => import("component/header"));
const Hero = lazy(() => import("component/hero"));

function App() {
	return (
		<>
			<div className="bg-primary relative main overflow-hidden">
				<div className="container-fluid pt-6 lg:pl-32 lg:pr-28">
					<Header />
					<Hero />
				</div>
			</div>
			<div className="container-fluid py-6 lg:pl-32 bg-white">
				<Footer />
			</div>
			<ToastContainer />
		</>
	);
}

export default App;
