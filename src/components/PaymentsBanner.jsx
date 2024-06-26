import React from "react";
import PaymentsBannerSvg from "../svg/PaymentsBannerSvg";
import LinkText from "./LinkText";
import HeadingText from "./HeadingText";
import SubHeadingText from "./SubHeadingText";
import BodyText from "./BodyText";

const PaymentsBanner = () => {
  return (
    <div className=" bg-[#f7f5f0] lg:p-large p-small md:p-medium">
      <div className="flex lg:gap-12">
        <div className="flex-1 lg:justify-end md:flex w-40 hidden">
          <PaymentsBannerSvg />
        </div>
        <div className="flex-1">
          <div className=" mt-5">
            <HeadingText title="Make Payments" />
          </div>
          <div className="mt-6">
            <SubHeadingText title="payouts" />
          </div>
          <div className=" w-[70%] mt-2 mb-6">
            <BodyText
              text="Code a solution to send mass payments to contract workers,
            claimants, freelancers, and sellers around the world"
            />
          </div>
          <LinkText name="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default PaymentsBanner;
