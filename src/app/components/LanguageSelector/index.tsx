"use client";
import { useRef, useState } from "react";
import { BsChevronDown } from 'react-icons/bs'
import styles from "../../../../styles/components/LanguageSelector.module.scss";
import Image from "next/image";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "zh", name: "Chino" },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (language: any) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((dropDown) => !dropDown);
  };

  return (
    <div
      className={styles.languageSelector}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className={styles.selectedLanguage} onClick={toggleDropdown}>
        <Image
          src={`/icons/langs/${selectedLanguage.code}.svg`}
          alt="us-flag"
          width={20}
          height={20}
          className="md:min-w-[25px] lg:min-w-[35px]"
        />
        <BsChevronDown className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? styles.dropdownActive : ''}`} />
      </div>
      {isDropdownOpen && (
        <ul ref={dropdownRef} className={`animate-fade-left animate-duration-200 animate-ease-in-out ${styles.languageList}`}>
          {languages.map((language) => (
            <li
              key={language.code}
              className={styles.languageItem}
              onClick={() => handleLanguageChange(language)}
            >
              <Image
                src={`/icons/langs/${language.code}.svg`}
                alt="us-flag"
                width={25}
                height={25}
                className="mx-2"
              />
              <span>{language.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
