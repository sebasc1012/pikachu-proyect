import style from "./MobileMenu.module.scss";
import { NavLink } from "react-router-dom";

export const MobileMenu = () => {
  return (
    <div className={style.mobileMenu}>
      
        <NavLink  role="linkTest" to="/Character" className={style.option}>
          Characters
        </NavLink>
      
      
        <NavLink to="/Battle" className={style.option}>
          Pokemon-Battle
        </NavLink>
    
    </div>
  );
};
