import React from "react";

const Navbar = () => {
  return (
    <div className=" sticky top-0 h-16 flex items-center justify-between px-16">
      <div className=" flex gap-6">
        <div>logo</div>
        <div>input box</div>
      </div>
      <div className="flex gap-8">
        <div className="flex gap-4">
          <div>Docs</div>
          <div>APIs & SDKs</div>
          <div>Tools</div>
          <div>Support</div>
        </div>
        <button>Login to Dashboard</button>
      </div>
    </div>
  );
};

export default Navbar;
