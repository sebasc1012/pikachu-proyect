import styles from "../Landing-page/cardStyles.module.scss"


const imageList = [{
    src : 'src/Landing-page/img/bulbasorCard.png',
    name : 'Bulbasor',
    type : 'Rock',
    imgType : 'src/Landing-page/img/piedra.png',
    background: '#C5B78C'

}, {
    src :  'src/Landing-page/img/CharmanderCard.png',
    name : 'Charmander',
    type : 'fire',
    imgType : 'src/Landing-page/img/fire.png',
     background: '#FF9D55'

}, 
{
    src : 'src/Landing-page/img/SquiterCard.png',
    name : 'Squiter',
    type : 'water',
    imgType : 'src/Landing-page/img/water.png',
     background: '#5090D6'
},
{   
    src : 'src/Landing-page/img/onixCard.png', 
    name : 'Onix',
    type : 'Rock',
    imgType : 'src/Landing-page/img/piedra.png',
     background: '#C5B78C'
}, 
{
    src : 'src/Landing-page/img/pikachuCard.png',
    name : 'Pikachu',
    type : ' Electical',
    imgType : 'src/Landing-page/img/electrical.png',
     background: '#F4D23D'
},
{
    src : 'src/Landing-page/img/aggron.png',
    name : 'Aggron',
    type : 'water',
    imgType : 'src/Landing-page/img/water.png',
     background: '#5090D6'
},
{
    src: 'src/Landing-page/img/blastoise.png',
    name : 'Blastois',
    type: 'water',
    imgType : 'src/Landing-page/img/water.png',
     background: '#5090D6'
}
]
const addAnimation =()=> {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true)
    })
} 

const scrollers = document.querySelectorAll('.scroller')
if(!window.matchMedia("(prefers-reduce-motion: reduce)").matches){
    addAnimation()
}



export const CardSection = () => {


  return (
    <>
    <section className={styles.scroller}>
      <div className={styles.contenedor}>
              {
                imageList.map((item) => (
                    <div className={styles.card} key={item.src}>
                        <img className={styles.imgPersonaje} src={item.src}/>
                        <h2 className={styles.nameCharacter}>{item.name}</h2>
                        <div 
                            className={styles.power}
                            style={{background: item.background }}
                        >
                            <img src= {item.imgType}/>
                            <p>{item.type}</p>
                        </div>
                    </div>

                ))
              }
      </div>
    </section>
    </>
  )
}


