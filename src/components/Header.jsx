import { useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled" + isOpen); // Debugging
    setIsOpen(!isOpen); // Toggle menu
  };

  return (
    <>
      <div className="static flex flex-row justify-between w-full mb-8 bg-white border shadow-2xl border-slate-400 rounded-3xl">
        <div className="transition duration-150 delay-150 hover:scale-110 hover:text-teal-600">
          <a href="/Home">
            <h1 className="mx-8 my-5 text-lg md:mx-10 md:text-xl font-montserrat ">
              Andreas Noah
            </h1>
          </a>
        </div>
        <div className="relative flex flex-row">
          <a
            href="/Portofolio"
            className="transition duration-150 delay-150 hover:scale-110 hover:text-teal-600"
          >
            <h1 className="hidden mx-10 my-5 text-xl font-montserrat md:block">
              Portofolio
            </h1>
          </a>
          <a
            href="/AboutMe"
            className="transition duration-150 delay-150 hover:scale-110 hover:text-teal-600"
          >
            <h1 className="hidden mx-10 my-5 text-xl font-montserrat md:block">
              About Me
            </h1>
          </a>
          <img
            src="./image/hamburger.png"
            className="w-12 px-3 py-3 my-auto ml-auto mr-5 cursor-pointer md:hidden hover:border hover:rounded-xl hover:border-teal-600"
            alt="hamburger icon"
            onClick={toggleMenu}
          />
          {/* Menu dropdown */}
          {isOpen && (
            <div className="absolute right-0 z-10 flex flex-col w-48 bg-white border shadow-md top-full rounded-b-xl">
              <a
                href="/Portofolio"
                className="flex items-center justify-center px-4 py-2 transition duration-150 delay-150 hover:scale-110 hover:text-teal-600 hover:rounded-b-xl" // Centering text
                onClick={() => setIsOpen(false)} // Menutup menu saat item diklik
              >
                <h1 className="text-lg md:mx-10 md:text-xl font-montserrat">
                  Portofolio
                </h1>
              </a>
              <a
                href="/AboutMe"
                className="flex items-center justify-center px-4 py-2 transition duration-150 delay-150 hover:scale-110 hover:text-teal-600" // Centering text
                onClick={() => setIsOpen(false)} // Menutup menu saat item diklik
              >
                <h1 className="text-lg md:mx-10 md:text-xl font-montserrat">
                  About Me
                </h1>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
