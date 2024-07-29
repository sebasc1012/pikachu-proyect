import React from 'react'
import style from '../styles/secondPage.module.scss'
import { MainLayout } from '../atoms/MainContainer/MainContainer'

export const Character = () => {
  return (
    <>
    <MainLayout className={style.container}>
    <div className={style.image_Container}>
         <img className={style.image} src='src/components/atoms/img/LogoSegundaPagina.png' alt='logo'/>
      </div>

    </MainLayout>
    
    </>
  )
}

