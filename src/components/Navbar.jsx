import React from "react";
import PrimaryButton from "./PrimaryButton";
import Logo from "../svg/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-16 flex items-center justify-between px-12 z-50 bg-white shadow-xl">
      <div className="flex gap-12 items-center">
        <Logo />
        <button className="py-[0.25rem] px-[0.875rem] border-2 border-[#003087] rounded-3xl capitalize text-[#003087] font-normal flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>Search</span>
        </button>
      </div>
      <div className="flex gap-8 items-center h-full py-[1px]">
        <div className="flex text-lg font-semibold h-full">
          {["Docs", "APIs & SDKs", "Tools", "Support"].map((item) => (
            <div
              key={item}
              className="px-6 border-b-4 border-transparent text-[#0c0c0d] hover:border-b-[#003087] cursor-pointer flex items-center"
            >
              {item}
            </div>
          ))}
        </div>
        <PrimaryButton name="Log in to Dashboard" />
      </div>
    </div>
  );
};

export default Navbar;
