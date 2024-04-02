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
    <div className="py-6 px-8 bg-white flex flex-col md:flex-row rounded-2xl gap-4 lg:gap-8 md:ml-4 md:mr-4">
      <div className="pt-2 text-center">
        <FontAwesomeIcon icon={icon} className="text-3xl text-[#c58c5f]" />
      </div>
      <div>
        <div className=" text-center md:text-justify">
          <SubHeadingText title={title} />
        </div>
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
    <div className="lg:p-large bg-[#fff0d7] flex md:flex-row flex-col p-small gap-12 md:gap-0">
      <div className="flex-1 pt-8">
        <div>
          <HeadingText title="Developer Tools & Resources" />
        </div>
        <div className=" pt-8 w-full hidden md:block">
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
