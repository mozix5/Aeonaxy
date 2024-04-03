import React from "react";
import NavItems from "./NavItems";
import PrimaryButton from "./PrimaryButton";

const NavbarMobile = ({ open, setter }) => {
  const appendClass = open ? "ml-0" : "ml-[-380px]";
  const ModalOverlay = () => (
    <div
      className={`flex lg:hidden overflow-y-hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-10`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div
        className={`h-screen flex flex-col gap-32 fixed z-50 w-[15rem] md:w-[20rem] bg-white p-small ${appendClass}`}
      >
        <div>
          <NavItems />
        </div>
        <PrimaryButton name="Login" />
        <div className=""></div>
      </div>
      {open && <ModalOverlay />}
    </>
  );
};

export default NavbarMobile;
