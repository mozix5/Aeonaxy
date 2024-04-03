import React from "react";
import SupportSvg from "../svg/SupportSvg";
import HeadingText from "./HeadingText";
import BodyText from "./BodyText";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="lg:p-large flex p-small md:p-medium">
        <div className="flex-1 lg:pr-12">
          <HeadingText title="Looking for something else?" />
          <div className="my-4">
            <BodyText text="If you need additional help, check out our support articles, community resources, and more." />
          </div>
          <div className="my-8">
            <PrimaryButton name="Find support" />
          </div>
          <div className="flex gap-4 lg:gap-8 justify-center">
            {["FAQs", "Community", "Blog", "Docs Archive"].map((item) => {
              return (
                <div
                  key={item}
                  className="text-lg font-semibold text-[#0c0c0d] leading-[24px]"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block">
          <SupportSvg />
        </div>
      </div>
      <div className="flex gap-4 lg:gap-8 lg:justify-end pt-16 lg:px-12 flex-wrap justify-center">
        {[
          "Reference",
          "PayPal.com",
          "Privacy",
          "Cookies",
          "Support",
          "Legal",
          "Contact",
        ].map((item) => {
          return (
            <div className="text-lg font-semibold text-[#0c0c0d] leading-[24px] underline">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
