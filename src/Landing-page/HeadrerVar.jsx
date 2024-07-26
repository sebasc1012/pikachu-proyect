import style from './headre.module.scss'

export const HeadrerVar = () => {
  return (
    <>
      <nav className={style.container}>
        <a className={style.text}>Characters</a>
        <a className={style.text}>Pokemon-Battle</a>
      </nav>
    </>
  )
}


