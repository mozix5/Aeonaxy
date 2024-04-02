import React from "react";
import SupportSvg from "../svg/SupportSvg";
import HeadingText from "./HeadingText";
import BodyText from "./BodyText";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="p-large flex">
        <div className="flex-1 pr-12">
          <HeadingText title="Looking for something else?" />
          <div className="my-4">
            <BodyText text="If you need additional help, check out our support articles, community resources, and more." />
          </div>
          <div className="my-8">
            <PrimaryButton name="Find support" />
          </div>
          <div className="flex gap-8">
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
        <div>
          <SupportSvg />
        </div>
      </div>
      <div className="flex gap-8 justify-end pt-16 px-12">
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
