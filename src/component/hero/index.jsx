import React, { lazy } from "react";
import PropTypes from "prop-types";
import useCoinData from "hooks/useCoinData";

const CryptoList = lazy(() => import("../cryptoList"));
const Form = lazy(() => import("../form"));
const Intro = lazy(() => import("../intro"));

const Hero = () => {
	const {
		coins,
		code,
		loading,
		error,
		setCode,
		setCoinCode,
		fetchPrices,
		setCoins,
	} = useCoinData();

	if (error)
		return (
			<p style={{ color: "red", paddingTop: "2rem", fontSize: "1.5rem" }}>
				Error! `${error}`
			</p>
		);

	return (
		<main className="my-4 lg:mt-10 lg:mb-9" data-testid="hero">
			<section>
				<div className="w-full flex flex-col lg:flex-row flex-wrap gap-y-6 items-center justify-between">
					<Intro />
					<Form
						setCode={setCode}
						setCoinCode={setCoinCode}
						fetchPrices={fetchPrices}
						code={code}
						loading={loading}
					/>
				</div>

				<CryptoList data={coins} setCoins={setCoins} />
			</section>
		</main>
	);
};

Hero.propTypes = {
	coins: PropTypes.array,
	setCoins: PropTypes.func,
	code: PropTypes.string,
	setCode: PropTypes.func,
	coinCode: PropTypes.string,
	setCoinCode: PropTypes.func,
	fetchPrices: PropTypes.func,
	loading: PropTypes.bool,
	error: PropTypes.string,
};

export default Hero;
