import React from "react";
import HeadingText from "../components/HeadingText";
import SubHeadingText from "../components/SubHeadingText";
import BodyText from "../components/BodyText";
import LinkText from "../components/LinkText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faFlag,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const SolutionItem = ({ icon, title, description }) => {
  return (
    <div>
      <div className="flex gap-6 items-center">
        <FontAwesomeIcon icon={icon} className="text-link-text text-xl" />
        <SubHeadingText title={title} />
      </div>
      <div className="mt-1">
        <BodyText text={description} />
      </div>
      <div className="mt-4">
        <LinkText name="Get Started" />
      </div>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      icon: faFlag,
      title: "Disputes",
      description:
        "Automate your dispute management, from initial claim to final resolution",
    },
    {
      icon: faClipboardList,
      title: "Reporting",
      description:
        "Get transaction-level insights to help manage your day-to-day operations",
    },
    {
      icon: faIdCard,
      title: "Identity",
      description:
        "Let your customers log in to your website using their PayPal credentials",
    },
  ];

  return (
    <div className="p-large">
      <HeadingText title="Additional Solutions" />
      <div className="mt-14 flex">
        {solutions.map((solution, index) => (
          <SolutionItem key={index} {...solution} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
