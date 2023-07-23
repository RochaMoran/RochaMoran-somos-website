import LanguageSelector from "../LanguageSelector";
import styles from "../../../../styles/components/Header.module.scss";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

export default function TopBar({toggleMenu, isActiveMenu}: any) {
  return (
    <div className={`bg-white m-auto flex justify-between items-center ${styles.topBar}`}>
      <button className={`navbar-label ${isActiveMenu ? 'navbar-label__active' : ''}`} onClick={toggleMenu}>
        <span className="line line-top"></span>
        <span className="line line-middle"></span>
        <span className="line line-bottom"></span>
      </button>
      <Link href="/">
        <img
          className={`h-auto lg:w-52 sm:w-34 ${styles.topBarLogo}`}
          src="/images/logo-somos.webp"
          alt="somos-logo"
          width={200}
          height={150}
          loading="lazy"
        />
      </Link>
      <div
        className={`flex [&>div]:mx-10 [&>div]:font-bold ${styles.addressTopBar} ${styles.addressTopBarContainer}`}
      >
        <div>
          <span className="text-[11px]">PHONE NUMBER</span> <br />{" "}
          +1.833.SOMOSNY
        </div>
        <div>
          <span className="text-[11px]">HOURS OF OPERATION</span> <br />
          Mon-Fri (9AM - 5PM)
        </div>
      </div>
      <div className="col-lg-2 flex items-center justify-center text-center text-lg-right lang-container">
        <div className="topbar-search flex justify-between items-center bg-gray-200 rounded-2xl px-2">
          <input type="text" placeholder="search" className="outline-none border-none bg-transparent py-1 p-3" />
          <button>
            <BsSearch className="text-gray-500" />
          </button>
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
}
