import React from "react";
import BodyText from "./BodyText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubBanner = () => {
  return (
    <div className="flex gap-4 rounded-full w-full bg-white p-6 items-center">
      <FontAwesomeIcon icon={faGithub} className=" text-[44px]" />
      <BodyText text="To browse PayPal SDKs, see our GitHub library" />
      <a
        href="https://github.com/mozix5"
        target="_blank"
        className=" hover:underline text-lg text-[#337ab7]"
      >
        Learn more
      </a>
    </div>
  );
};

export default GithubBanner;
