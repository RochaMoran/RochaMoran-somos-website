import { usePathname } from "next/navigation";
import styles from "../../../../styles/components/Header.module.scss";
import { BsChevronDown } from "react-icons/bs";
import SubMenu from "../SubMenu";
import {
  aboutOptions,
  worksOptions,
  impactOptions,
  eventsOptions,
  actionsOptions,
  newsOptions,
} from "@/app/data/submenu";

export default function NavBar({ isDropdownOpen, updateDropdownOpen, isActiveMenu }: any) {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className={`flex justify-center w-100 bg-white ${styles.navbar} ${isActiveMenu ? styles.showMenu : ''}`}>
      <ul
        className={`flex relative justify-between items-center py-1 2xl:[&>li]:text-[15px] sm:[&>li]:text-[12px] [&>li]:font-semibold ${styles.addressTopBar} ${styles.navbarList}`}
      >
        <li className={`${isActive("/") ? styles.activeItem : ""}`}>
          <a className={styles.navbarItemLink} href="#">
            HOME
          </a>
        </li>
        <li
          className={`flex justify-center items-center ${
            isActive("/about") ? styles.activeItem : ""
          }`}
        >
          <button
            className={styles.navbarItemLink}
            onClick={() => updateDropdownOpen("about")}
          >
            ABOUT US
          </button>
          <BsChevronDown
            className={`ml-2 transition-transform duration-300 ${
              isDropdownOpen === "about" ? "dropdown-active" : ""
            }`}
          />
          {isDropdownOpen === "about" && <SubMenu columns={aboutOptions} />}
        </li>
        <li
          className={`flex justify-center items-center ${
            isActive("/works") ? styles.activeItem : ""
          }`}
        >
          <button
            className={styles.navbarItemLink}
            onClick={() => updateDropdownOpen("works")}
          >
            OUR WORK
          </button>
          <BsChevronDown
            className={`ml-2 transition-transform duration-100 ${
              isDropdownOpen === "works" ? "dropdown-active" : ""
            }`}
          />
          {isDropdownOpen === "works" && <SubMenu columns={worksOptions} />}
        </li>
        <li
          className={`flex justify-center items-center ${
            isActive("/impact") ? styles.activeItem : ""
          }`}
        >
          <button
            className={styles.navbarItemLink}
            onClick={() => updateDropdownOpen("impacts")}
          >
            OUT IMPACT
          </button>
          <BsChevronDown
            className={`ml-2 transition-transform duration-300 ${
              isDropdownOpen === "impacts" ? "dropdown-active" : ""
            }`}
          />
          {isDropdownOpen === "impacts" && <SubMenu columns={impactOptions} />}
        </li>
        <li
          className={`flex justify-center items-center ${
            isActive("/events") ? styles.activeItem : ""
          }`}
        >
          <button
            className={styles.navbarItemLink}
            onClick={() => updateDropdownOpen("events")}
          >
            EVENTS
          </button>
          <BsChevronDown
            className={`ml-2 transition-transform duration-300 ${
              isDropdownOpen === "events" ? "dropdown-active" : ""
            }`}
          />
          {isDropdownOpen === "events" && <SubMenu columns={eventsOptions} />}
        </li>
        <li
          className={`flex justify-center items-center ${
            isActive("/action") ? styles.activeItem : ""
          }`}
        >
          <button
            className={styles.navbarItemLink}
            onClick={() => updateDropdownOpen("actions")}
          >
            TAKE ACTION
          </button>
          <BsChevronDown
            className={`ml-2 transition-transform duration-300 ${
              isDropdownOpen === "actions" ? "dropdown-active" : ""
            }`}
          />
          {isDropdownOpen === "actions" && <SubMenu columns={actionsOptions} />}
        </li>
        <li
          className={`flex justify-center items-center ${
            isActive("/news") ? styles.activeItem : ""
          }`}
        >
          <button
            className={styles.navbarItemLink}
            onClick={() => updateDropdownOpen("news")}
          >
            NEWS
          </button>
          <BsChevronDown
            className={`ml-2 transition-transform duration-300 ${
              isDropdownOpen === "news" ? "dropdown-active" : ""
            }`}
          />
          {isDropdownOpen === "news" && <SubMenu columns={newsOptions} />}
        </li>
        <li>
          <button type="button" className={`${styles.btnFindDoctor}`}>
            <span>FIND A DOCTOR</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
