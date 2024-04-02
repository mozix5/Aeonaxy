import React from "react";
import SubHeadingText from "../components/SubHeadingText";
import BodyText from "../components/BodyText";
import LinkText from "../components/LinkText";
import DeveloperSvg from "../svg/DeveloperSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptop,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import HeadingText from "../components/HeadingText";

const FeatureCard = ({ icon, title, description, linkText }) => {
  return (
    <div className="py-6 px-8 bg-white flex rounded-2xl gap-8 ml-4 mr-4">
      <div className="pt-2">
        <FontAwesomeIcon icon={icon} className="text-3xl text-[#c58c5f]" />
      </div>
      <div>
        <SubHeadingText title={title} />
        <div className="mt-4">
          <BodyText text={description} />
        </div>
        <div className="py-2">
          <LinkText name={linkText} />
        </div>
      </div>
    </div>
  );
};

const Developer = () => {
  const features = [
    {
      icon: faLaptopCode,
      title: "Demo Portal",
      description:
        "Explore PayPal product experiences from the customer's perspective.",
      linkText: "View Demos",
    },
    {
      icon: faCode,
      title: "API Executor",
      description:
        "Try out PayPal API requests and responses in multiple programming languages.",
      linkText: "Try APIs",
    },
    {
      icon: faLaptop,
      title: "Sandbox Testing Guide",
      description:
        "Learn how to test and go live with your integration with the PayPal Sandbox.",
      linkText: "Learn More",
    },
  ];

  return (
    <div className="p-large bg-[#fff0d7] flex">
      <div className="flex-1 pt-8">
        <div>
          <HeadingText title="Developer Tools & Resources" />
        </div>
        <div className=" pt-8 w-full">
          <DeveloperSvg />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6 ">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Developer;
