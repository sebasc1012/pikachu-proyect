import { useState } from "react";
import style from "./HeaderBar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { MobileMenu } from "../../molecules/MobileMenu/MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <>
      <nav role="navContainer" className={style.container}>
        <div title="Home" aria-label="Home" className={style.imgContainerLogo}>
          <nav  ><Link className={style.link} to="/"></Link>{" "}</nav>
        </div>
        <ul className={style.sectionContainer}>
          <li role="linkDirect">
            <NavLink to="/Character" className={style.text}>
              Character
            </NavLink>
          </li>
          <li>
            <NavLink to="/Battle" className={style.text}>
              Battle
            </NavLink>
          </li>
        </ul>
        <div
          className={style.containerIcon}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <GiHamburgerMenu className={style.icon} />
        </div>
        {showMobileMenu && <MobileMenu />}
      </nav>
    </>
  );
};
