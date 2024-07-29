import { useState } from "react";
import style from "../HeaderBar/HeaderBar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { MobileMenu } from "../../moleculas/MobileMenu/MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderBar = () => {

  const [showmobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <nav className={style.container}>
          <h4 >{""}<Link className={style.logo} to="/">Home</Link> </h4>
            <ul className={style.sectionContainer}>
              <li>
                <NavLink to="/Character" className={style.text}>Characters</NavLink>
              </li>
              <li>
                <NavLink to="/Batle" className={style.text}>Pokemon-Battle</NavLink>
              </li>
          </ul>
          <div  className={style.containerIcon} onClick={()=> setShowMobileMenu(!showmobileMenu)}>
            <GiHamburgerMenu className={style.icon}/>
          </div>
            {
              showmobileMenu && <MobileMenu />
            }

      </nav>
    </>
  );
};
