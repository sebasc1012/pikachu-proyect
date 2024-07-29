import React from 'react'
import style from '../MobileMenu/MobileMenu.module.scss'
import { NavLink } from 'react-router-dom';

export const MobileMenu = () => {


  return (
    

      <div className={style.movileMenu}>
          <a>
            <NavLink to="/Character" className={style.option} >Characters </NavLink>
          </a>
          <a>
            <NavLink to="/Batle" className={style.option} >Pokemon-Battle</NavLink>
          </a>
      </div>
        
   
  )
}

