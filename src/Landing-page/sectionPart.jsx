import styles from '../Landing-page/section.module.scss'


export const SectionPart = () => {
  return (
    <>
      <section>
        <div className={styles.imgContainer}>
             <picture className={styles.contenedorUno}>
                <img className={styles.imgUno} src='src/Landing-page/img/Logo.png' alt="Bulbasor Img" />
            </picture>

            <picture className={styles.contenedorDos}>
                <img className={styles.imgDos} src='src/Landing-page/img/bulbasorLanding.png' alt="Pokemon tittle" />
            </picture> 
        </div>
        <div className={styles.contenedorTitle}>
            <h1 className={styles.title}>Are you ready for the challenge ?  </h1>
            <h2 className={styles.subtitle}>Immerse yourself in the ultimate adventure with our interactive platform where you can explore and discover all the Pokémon characters. Not only will you be able to learn about your favorite Pokémon, but you'll also have the opportunity to test your skills in exciting battles.</h2>
        </div>
      </section>
    </>
  )
}


