import React from "react";
import { useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { PRICE } from "../query/query";

export default function useCoinData() {
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
                let coinExist = coins?.find(coin => coin.code === coinCode);
                let noCoinsFound = data?.markets?.length === 0;

                if (coinExist) {
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
                    price: data?.markets[0]?.ticker?.lastPrice
                }]);
                setCode("");
            },
            onError: (error) => {
                toast.error(error.message);
            }
        });

    return { coins, code, loading, error, setCode, setCoins, setCoinCode, fetchPrices };
}