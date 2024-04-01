import React from "react";
import Navbar from "./components/Navbar";
import Payments from "./pages/Payments";
import HomeBanner from "./components/HomeBanner";
import PaymentsBanner from "./components/PaymentsBanner";
import Solutions from "./pages/Solutions";
import Explore from "./Explore";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <HomeBanner />
      <Payments />
      <PaymentsBanner />
      <Solutions />
      <Explore/>
    </div>
  );
};

export default App;
