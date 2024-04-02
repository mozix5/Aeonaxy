import React from "react";

const HomeBanner = () => {
  return (
    <div className=" bg-dark-blue text-white px-[13rem] pt-6 pb-16">
      <div className=" text-[#d1f1ff] text-[28px] opacity-[0.7] tracking-tight">
        PayPal Developer
      </div>
      <div className=" text-[44px] py-8">
        Build a payment solution that's right for you.
      </div>
      <div className=" text-lg pb-8">
        Find the resources you need to test and go live with online, mobile, or
        in-person payment solutions.
      </div>
      <div>
        <button className=" bg-[#ffc43a] rounded-3xl px-6 py-2 text-dark-blue text-lg">
          Get API Credentials
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
