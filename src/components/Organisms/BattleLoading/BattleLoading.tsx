import { SectionCard } from "../SectionCard/SectionCard"
import {  NavLink } from "react-router-dom";
import style from 'src/components/Organisms/BattleLoading/BattleLoading.module.scss'

 export const BattleLoading = () => {
  return (
    <>

    <section>
           <SectionCard/>
        <button className={style.buttonMove}><NavLink to="/Fight"> Continue </NavLink></button>
    </section>


      
    </>
  )
}

