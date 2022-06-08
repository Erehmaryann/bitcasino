import React from 'react';
import CloseIcon from "@mui/icons-material/Close";

const CryptoList = ({ data, deleteCoin }) => {

    return (
        <div className='mt-[32px] z-[20] pb-[28px]' data-testid="crypto-list">
            {data && data.map((coin, index) => (
                <div className='flex items-center justify-between w-full lg:w-[280px] py-3 border-b-[1px] border-[#9484a4]' key={index} data-testid="crypto-list-item">
                    <div className='flex items-center gap-x-8'>
                        <img src='/assets/svg/icon.svg' alt='trophy' />
                        <div className='flex flex-col gap-2'>
                            <div className='text-white capitalize'>{coin.code}</div>
                            <div className='text-[#9484a4] text-[13px]'>{Number(coin.price).toFixed(2)}€</div>
                        </div>
                    </div>
                    <div className='text-white cursor-pointer'
                        onClick={(e) => deleteCoin(e, coin.code)}
                        data-testid="delete-coin"
                    >
                        <CloseIcon color='inherit' style={{ height: "15px" }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CryptoList;