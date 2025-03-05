"use client";
import Logo from "../components/Navbar/Logo";
import Nav from "../components/Navbar/Nav";
import MobileNav from "../components/Navbar/MobileNav";


const Header = () => {
  return (
    <header className="fixed top-0 w-full py-2 md:py-6 border-b border-b-primary/10">
      <div className="container mx-auto px-5 md:px-0"> 
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Logo />
          {/* NAV ITEMS */}
          <div className="hidden md:flex">
            <Nav />
          </div>
          {/* MOBILE NAV */}
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
