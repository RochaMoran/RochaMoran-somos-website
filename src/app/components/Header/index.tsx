"use client";
import TopBar from "../TopBar";
import NavBar from "../Navbar";
import { useState, useEffect } from "react";
import styles from "../../../../styles/components/Header.module.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export  default function Header () {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string>("");
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const updateDropdownOpen = (option: string) => {
    if (isDropdownOpen === option) {
      setIsDropdownOpen("");
      return;
    }
    setIsDropdownOpen(option);
  };

  const closeDropdown = () => {
    if (window.innerWidth >= 1000) {
      setIsDropdownOpen("");
    }
  };

  const toggleMenu = () => {
    const newActiveMenu = !isActiveMenu;
    setIsActiveMenu(newActiveMenu);

    if (newActiveMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, [])
  

  return (
    <header className={`bg-white ${styles.header} ${roboto.className}`} onMouseLeave={closeDropdown}>
      <TopBar toggleMenu={toggleMenu}  isActiveMenu={isActiveMenu}/>
      <NavBar
        isDropdownOpen={isDropdownOpen}
        isActiveMenu={isActiveMenu}
        updateDropdownOpen={updateDropdownOpen}
      />
    </header>
  );
};
