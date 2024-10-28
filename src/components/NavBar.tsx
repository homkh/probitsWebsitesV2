"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import log from "../../public/assets/icon/whilteLog.svg";
import ContactBtn from "./ui/button/ContactBtn";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Blogs", path: "/blogs" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [prevScrollpos, setPrevScrollpos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrevScrollpos(window.pageYOffset);
    }

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <nav>
      {/* Desktop Menu */}
      <div
        className={`hidden md:block fixed top-4 left-0 right-0 bg-gradient-to-r from-[#8FB2FB1F]/10 to-[#8FB2FB33]/20 bg-opacity-90 backdrop-blur-md py-2 rounded-[48px] border-[1px] border-solid border-[#464747ce] mx-auto z-50 w-11/12 transition-all duration-1000 ${
          visible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <section>
            <Link href="/">
              <Image
                src={log}
                height={40}
                width={131}
                alt="probts icon"
                className="object-contain"
              />
            </Link>
          </section>
          <section>
            <ul className="flex space-x-5 items-center justify-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className={`text-[#DBDBE1] font-gotham font-medium text-base hover:text-gray-300 ${
                      pathname === item.path
                        ? "font-semibold underline decoration-gray-400 underline-offset-2 decoration-2"
                        : ""
                    }`}
                    href={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <Link href="/contact-us">
              <ContactBtn />
            </Link>
          </section>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className={`md:hidden fixed top-4 right-4 z-50 ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-sky-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-40 transition-all duration-300">
          <div className="flex flex-col gap-6 items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className={`text-white font-gotham font-medium text-xl hover:text-gray-300 ${
                      pathname === item.path
                        ? "font-semibold underline decoration-gray-400 underline-offset-2 decoration-2"
                        : ""
                    }`}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              <ContactBtn />
            </Link>
          </div>
        </div>
      )}
      {/* <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-40 transition-all duration-300`}
      >
        <div className="flex flex-col gap-6 items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  className={`text-white font-gotham font-medium text-xl hover:text-gray-300 ${
                    pathname === item.path
                      ? "font-semibold underline decoration-gray-400 underline-offset-2 decoration-2"
                      : ""
                  }`}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact-us" onClick={() => setIsOpen(false)}>
            <ContactBtn />
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;
