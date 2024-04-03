import React from "react";
import HeadingText from "../components/HeadingText";
import ApiSvg from "../svg/ApiSvg";
import SubHeadingText from "../components/SubHeadingText";
import BodyText from "../components/BodyText";
import LinkText from "../components/LinkText";
import EventSvg from "../svg/EventSvg";
import SdkSvg from "../svg/SdkSvg";
import GithubBanner from "../components/GithubBanner";

const Section = ({ icon, title, text, links }) => {
  return (
    <div className="flex-1">
      <div className="bg-[#d5f4ee] rounded-t-2xl h-32 flex items-center justify-center">
        {icon}
      </div>
      <div className="bg-white px-6 pb-4 rounded-b-2xl">
        <div className="my-4">
          <SubHeadingText title={title} />
        </div>
        <BodyText text={text} />
        <div className="my-4 flex flex-col gap-4">
          {links.map((link, index) => (
            <LinkText key={index} name={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Explore = () => {
  const sections = [
    {
      icon: <ApiSvg />,
      title: "APIs",
      text: "PayPal offers APIs for new and legacy integrations.",
      links: ["REST APIs", "NVP/SOAP APIs", "Braintree GraphQL API"],
    },
    {
      icon: <SdkSvg />,
      title: "SDKs",
      text: "Try our SDKs to streamline the integration experience.",
      links: ["JavaScript SDK", "Donate SDK", "Braintree SDKs"],
    },
    {
      icon: <EventSvg />,
      title: "Event Notifications",
      text: "Stay informed of API transaction events with our notification tools.",
      links: [
        "Webhooks",
        "Instant Payment Notification (IPN)",
        "Payment Data Transfer (PDT)",
      ],
    },
  ];

  return (
    <div className="bg-[#fafafa] p-small lg:p-large md:p-medium">
      <HeadingText title="Explore our APIs & SDKs" />
      <div className="flex gap-12 mt-6 py-4 lg:px-6 flex-col lg:flex-row">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
      <GithubBanner />
    </div>
  );
};

export default Explore;
