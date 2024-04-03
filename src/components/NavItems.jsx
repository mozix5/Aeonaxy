import React from "react";

const NavItems = () => {
  return (
    <div className="flex text-lg font-semibold lg:flex-row flex-col gap-8 lg:gap-0 h-full">
      {["Docs", "APIs & SDKs", "Tools", "Support"].map((item) => (
        <div
          key={item}
          className="px-6 border-b-4 border-transparent text-[#0c0c0d] lg:hover:border-b-[#003087] cursor-pointer flex items-center"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default NavItems;
