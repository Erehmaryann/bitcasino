import React from "react";
import CryptoList from './CryptoList';
import { useLazyQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PRICE } from "./query/query";
import Form from './Form';

const Hero = () => {
    const [coins, setCoins] = React.useState([]);
    const [code, setCode] = React.useState("");
    const [coinCode, setCoinCode] = React.useState("");

    const [fetchPrices, { loading, error, refetch }] = useLazyQuery(PRICE);

    const handleChange = (e) => {
        setCode(e.target.value.toUpperCase());
    };

    const getCoinPrice = (e) => {
        e.preventDefault();
        setCoinCode(code);
        fetchPrices({
            variables: {
                input: coinCode
            },
            fetchPolicy: "no-cache",
            onCompleted: (data) => {
                let coinsExist = coins.find(coin => coin.code === coinCode);
                let noCoinsFound = data.markets.length === 0;
                if (coinsExist) {
                    toast.error("Coin already exists");
                    setCode("");
                    return;
                } else if (noCoinsFound) {
                    toast.error("Coin not found");
                    setCode("");
                    return;
                };

                if (data && !noCoinsFound) {
                    setCoins([...coins, {
                        code: coinCode,
                        price: data.markets[0].ticker.lastPrice
                    }]);
                    setCode("");
                };

            },
            onError: (error) => {
                alert(error.message);
            }
        });
        refetch();
    };

    const deleteCoin = (e, code) => {
        e.preventDefault();
        setCoins(coins.filter(coin => coin.code !== code));
    };

    if (error) return <p style={{ color: "white", paddingTop: "2rem", fontSize: "1.5rem" }}>Error! `${error}`</p>;

    return (
        <main className='my-4 lg:mt-10 lg:mb-9' data-testid="hero">
            <section>
                <div className='w-full flex flex-col lg:flex-row flex-wrap gap-y-6 items-center justify-between'>
                    <div className='flex-1 z-10'>
                        <h1 className='text-[36px] lg:text-[42px] lg:w-[390px] lg:leading-[52px] font-medium text-white mb-5'>
                            Now you can track <br />
                            all your cryptos here!
                        </h1>
                        <p className='text-[20px] lg:w-[270px] leading-[26px] tracking-wide text-[#9484a4]'>
                            Just enter the <br />
                            cryptocurrency code on the
                            <br />
                            form to the right.
                        </p>
                    </div>
                    <Form handleChange={handleChange} getCoinPrice={getCoinPrice} code={code} loading={loading} />
                </div>

                <CryptoList data={coins} deleteCoin={deleteCoin} />
            </section>
            <ToastContainer />
        </main>
    );
};

export default Hero;
