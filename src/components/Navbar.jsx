import React from "react";
import PrimaryButton from "./PrimaryButton";
import Logo from "../svg/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import NavItems from "./NavItems";

const Navbar = ({ setter, show }) => {
  return (
    <div className="sticky top-0 h-16 flex items-center justify-between px-6 lg:px-12 z-50 bg-white shadow-xl">
      <div className="flex gap-6 lg:gap-12 items-center">
        <FontAwesomeIcon
          icon={show ? faXmark : faBars}
          className="text-2xl cursor-pointer"
          onClick={() => setter((oldVal) => !oldVal)}
        />
        <Logo />
        <button className=" hidden  py-[0.25rem] px-[0.875rem] border-2 border-[#003087] rounded-3xl capitalize text-[#003087] font-normal lg:flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>Search</span>
        </button>
      </div>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-xl cursor-pointer lg:hidden"
      />
      <div className="lg:flex gap-8 items-center h-full py-[1px] hidden ">
        <NavItems />
        <PrimaryButton name="Log in to Dashboard" />
      </div>
    </div>
  );
};

export default Navbar;
