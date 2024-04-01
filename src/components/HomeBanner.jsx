import React from "react";

const HomeBanner = () => {
  return (
    <div className=" bg-dark-blue text-white p-large">
      <div className=" text-[#d1f1ff]">PayPal Developer</div>
      <div>Build a payment solution that's right for you.</div>
      <div>
        Find the resources you need to test and go live with online, mobile, or
        in-person payment solutions.
      </div>
      <button className=" bg-[#ffc43a] rounded-2xl px-4 py-2 text-dark-blue">
        Get API Credentials
      </button>
    </div>
  );
};

export default HomeBanner;
