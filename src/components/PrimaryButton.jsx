import React from "react";

const PrimaryButton = ({ name }) => {
  return (
    <button className="bg-[#003087] text-white rounded-3xl px-6 py-3 text-[16px] font-semibold">
      {name}
    </button>
  );
};

export default PrimaryButton;
