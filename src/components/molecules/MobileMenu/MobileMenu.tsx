import style from "./MobileMenu.module.scss";
import { NavLink } from "react-router-dom";

export const MobileMenu = () => {
  return (
    <div className={style.mobileMenu}>
      <a>
        <NavLink to="/Character" className={style.option}>
          Characters{" "}
        </NavLink>
      </a>
      <a>
        <NavLink to="/Battle" className={style.option}>
          Pokemon-Battle
        </NavLink>
      </a>
    </div>
  );
};
