import styles from '../LandingSection/LandingSection.module.scss'


export const LandingSection = () => {
  return (
    
      <section>
        <div className={styles.Container_Image}>
             <picture className={styles.container_Title}>
                <img className={styles.imgOne} src='src/assets/img/Logo.png' alt="Bulbasor Img" />
              </picture>

            <picture className={styles.container_picture}>
                <img className={styles.imgTwo} src='src/assets/img/bulbasorLanding.png' alt="Pokemon tittle" />
            </picture> 
        </div>
        <div className={styles.title_Page}>
            <h1 className={styles.principal_title}>Are you ready for the challenge ?  </h1>
            <h2 className={styles.principal_subtitle}>Immerse yourself in the ultimate adventure with our interactive platform where you can explore and discover all the Pokémon characters. Not only will you be able to learn about your favorite Pokémon, but you'll also have the opportunity to test your skills in exciting battles.</h2>
        </div>
      </section>
    
  )
}


