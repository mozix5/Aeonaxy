import React from "react";
import LinkText from "../components/LinkText";
import PaymentsImage from "../svg/PaymentsHeroSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faHandshakeSimple,
  faShop,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import HeadingText from "../components/HeadingText";
import SubHeadingText from "../components/SubHeadingText";
import BodyText from "../components/BodyText";

const Payments = () => {
  return (
    <div className="lg:p-large flex p-small md:p-medium">
      <div className="w-full">
        <HeadingText title="Accept Payments" />
        <div className="flex mt-8 md:flex-row flex-col gap-8 md:gap-0 lg:px-6">
          <PaymentCategory
            title="Online"
            description="Build a scalable checkout solution for web and mobile with our REST APIs and JavaScript SDK"
            links={["Checkout", "Subscriptions", "Invoicing", "Donate"]}
            icon={faDisplay}
          />
          <PaymentCategory
            title="In-Person"
            description="Set up a ready-made point-of-sale solution or integrate a payment solution to your service"
            links={["Point of Sale Solutions"]}
            icon={faWallet}
          />
        </div>
        <div className="flex mt-10 md:flex-row flex-col gap-8 md:gap-0 lg:px-6">
          <PaymentCategory
            title="Multiparty"
            description="Create an onboarding and payments solution for your marketplace or payments platform"
            links={["Build a Marketplace"]}
            icon={faShop}
          />
          <PaymentCategory
            title="3rd-Party"
            description="Integrate PayPal with a 3rd-party shopping cart or plugin"
            links={["Partners", "Plugins"]}
            icon={faHandshakeSimple}
          />
        </div>
      </div>
      <div className="w-550 pt-6 hidden">
        <PaymentsImage />
      </div>
    </div>
  );
};

const PaymentCategory = ({ title, description, links, icon }) => {
  return (
    <div className="flex-1">
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={icon} className=" text-link-text text-xl" />
        <SubHeadingText title={title} />
      </div>
      <div className="py-4 md:w-[90%]">
        <BodyText text={description} />
      </div>
      <div className="flex gap-3 flex-col">
        {links.map((link) => (
          <LinkText key={link} name={link} />
        ))}
      </div>
    </div>
  );
};

export default Payments;
