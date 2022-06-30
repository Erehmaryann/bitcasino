import React from "react";

const Intro = () => {
    return (
        <div className="flex-1 z-10">
            <h1 className="text-[36px] lg:text-[42px] lg:w-[390px] lg:leading-[52px] font-medium text-white mb-5">
                Now you can track <br />
                all your cryptos here!
            </h1>
            <p className="text-[20px] lg:w-[270px] leading-[26px] tracking-wide text-[#9484a4]">
                Just enter the <br />
                cryptocurrency code on the
                <br />
                form to the right.
            </p>
        </div>
    );
};

export default Intro;