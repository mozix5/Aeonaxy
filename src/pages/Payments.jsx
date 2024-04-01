import React from "react";
import LinkText from "../components/LinkText";
import PaymentsImage from "../svg/PaymentsHeroSvg";

const Payments = () => {
  return (
    <div className="p-large flex">
      <div className="w-full">
        <div className=" text-[44px]">Accept Payments</div>
        <div className=" flex mt-8">
          <div className="flex-1">
            <div className=" text-[28px]">Online</div>
            <div className=" text-lg py-4 w-[90%]">
              Build a scalable checkout solution for web and mobile with our
              REST APIs and JavaScript SDK
            </div>
            <div className=" flex gap-3 flex-col ">
              <LinkText name="Checkout" />
              <LinkText name="Subscriptions" />
              <LinkText name="Invoicing" />
              <LinkText name="Donate" />
            </div>
          </div>
          <div className="flex-1">
            <div className=" text-[28px]">In-Person</div>
            <div className=" text-lg py-4 w-[90%]">
              Set up a ready-made point-of-sale solution or integrate a payment
              solution to your service
            </div>
            <div className=" flex gap-3 flex-col ">
              <LinkText name="Point of Sale Solutions" />
            </div>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="flex-1">
            <div className=" text-[28px]">Multiparty</div>
            <div className=" text-lg py-4 w-[90%]">
              Create an onboarding and payments solution for your marketplace or
              payments platform
            </div>
            <div className=" flex gap-3 flex-col ">
              <LinkText name="Build a Marketplace" />
            </div>
          </div>
          <div className="flex-1">
            <div className=" text-[28px]">3rd-Party</div>
            <div className=" text-lg py-4 w-[90%]">
              Integrate PayPal with a 3rd-party shopping cart or plugin
            </div>
            <div className=" flex gap-3 flex-col ">
              <LinkText name="Partners" />
              <LinkText name="Plugins" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[550px] pt-6">
        <PaymentsImage />
      </div>
    </div>
  );
};

export default Payments;
