import React from "react";
import CryptoList from './CryptoList';
import { useLazyQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PRICE } from "./query/query";
import Form from './Form';
import Intro from './Intro';

const Hero = () => {
    const [coins, setCoins] = React.useState([]);
    const [code, setCode] = React.useState("");
    const [coinCode, setCoinCode] = React.useState("");

    const [fetchPrices, { loading, error }] = useLazyQuery(PRICE,
        {
            variables: {
                input: coinCode
            },
            fetchPolicy: "network only",
            onCompleted: (data) => {
                let coinsExist = coins.find(coin => coin.code === coinCode);
                let noCoinsFound = data.markets.length === 0;

                if (coinsExist) {
                    toast.error("Coin already exists");
                    setCode("");
                    return;
                }

                if (data && noCoinsFound) {
                    toast.error("Coin not found");
                    setCode("");
                    return;
                }

                setCoins([...coins, {
                    code: coinCode,
                    price: data.markets[0].ticker.lastPrice
                }]);
                setCode("");
            },
            onError: (error) => {
                toast.error(error.message);
            }
        });

    if (error) return <p style={{ color: "white", paddingTop: "2rem", fontSize: "1.5rem" }}>Error! `${error}`</p>;

    return (
        <main className='my-4 lg:mt-10 lg:mb-9' data-testid="hero">
            <section>
                <div className='w-full flex flex-col lg:flex-row flex-wrap gap-y-6 items-center justify-between'>
                    <Intro />
                    <Form setCode={setCode} setCoinCode={setCoinCode} fetchPrices={fetchPrices} code={code} loading={loading} />
                </div>

                <CryptoList data={coins} setCoins={setCoins} />
            </section>
            <ToastContainer />
        </main>
    );
};

export default Hero;
