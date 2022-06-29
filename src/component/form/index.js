import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Input } from "../input";

const Form = ({ setCode, setCoinCode, fetchPrices, code, loading, }) => {
    const handleChange = (e) => {
        setCode(e.target.value.toUpperCase());
    };

    const getCoinPrice = (e) => {
        e.preventDefault();
        setCoinCode(code);
        fetchPrices();
    };

    return (
        <div className="flex-1 w-full flex md:justify-end z-10">
            <div className="w-full lg:w-[60%] bg-white p-6 lg:px-8 lg:py-6 flex flex-col rounded">
                <form onSubmit={getCoinPrice} className="flex flex-col" data-testid="form">
                    <Input
                        label="CRYPTOCURRENCY CODE"
                        variant="outlined"
                        size="small"
                        id="outlined-size-small"
                        margin="normal"
                        value={code}
                        autoFocus
                        onChange={handleChange}
                        data-testid="crypto-code-input"
                    />
                    <button
                        type="submit"
                        data-testid="crypto-code-button"
                        disabled={!code || loading}
                        className="disabled:bg-[#fd4c24bc] disabled:cursor-not-allowed border-0 outline-none bg-[#fd4b24] p-[10px] text-white rounded-[20px] text-sm mb-10 flex items-center justify-center">
                        <ClipLoader color="#fff" loading={loading} size={20} />
                        {!loading && "Add"}
                    </button>
                </form>
                <p className="text-sm text-gray-400 text-center tracking-[0.5px]">
                    Use of this service is subject to terms and conditions.
                </p>
            </div>
        </div>
    );
};

export default Form;
