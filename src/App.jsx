import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Payments from "./pages/Payments";
import HomeBanner from "./components/HomeBanner";
import PaymentsBanner from "./components/PaymentsBanner";
import Solutions from "./pages/Solutions";
import Explore from "./pages/Explore";
import Developer from "./pages/Developer";
import Footer from "./components/Footer";
import NavbarMobile from "./components/NavbarMobile";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar setter={setIsOpen} show={isOpen}/>
      <div className="lg:hidden">
        <NavbarMobile setter={setIsOpen} open={isOpen}/>
      </div>
      <HomeBanner />
      <Payments />
      <PaymentsBanner />
      <Solutions />
      <Explore />
      <Developer />
      <Footer/>
    </div>
  );
};

export default App;
