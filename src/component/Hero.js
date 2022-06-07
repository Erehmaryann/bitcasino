import React from "react";
import CryptoList from './CryptoList';
import { Input } from './Input';
import {
    useLazyQuery,
    gql
} from "@apollo/client";

const PRICE = gql`
	query price($input: String!) {
        markets(
            filter: { baseSymbol: {_eq: $input}, quoteSymbol: {_eq: "EUR"} }
        ) {
            marketSymbol
                ticker {
                lastPrice
            }
        }
    }
`;


const Hero = () => {
    // const [input, setInput] = React.useState("");

    const [fetchPrices, { loading, error, data, refetch }] = useLazyQuery(PRICE, {
        variables: {
            input: "BTC"
        }
    });

    console.log(data);

    return (
        <main className='my-4 lg:mt-10 lg:mb-9'>
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
                    <div className='flex-1 w-full flex md:justify-end z-10'>
                        <div className='w-full lg:w-[60%] bg-white p-6 lg:px-8 lg:py-6 flex flex-col rounded'>
                            <form className='flex flex-col'>
                                <Input
                                    label='CRYPTOCURRENCY CODE'
                                    variant='outlined'
                                    size='small'
                                    id='outlined-size-small'
                                    margin='normal'
                                // defaultValue='BTC'
                                // value={code}
                                // onChange={handleChange}
                                />
                                <button className='border-0 outline-none bg-[#fd4b24] p-[10px] text-white rounded-[20px] text-sm mb-10 flex items-center justify-center'>
                                    Add
                                </button>
                            </form>
                            <p className='text-sm text-gray-400 text-center tracking-[0.5px]'>
                                Use of this service is subject to terms and conditions.
                            </p>
                        </div>
                    </div>
                </div>

                <CryptoList />
            </section>
        </main>
    );
};

export default Hero;
