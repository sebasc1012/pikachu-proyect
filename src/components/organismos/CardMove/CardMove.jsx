import { useEffect, useRef } from 'react'
import '../CardMove/CardMove.scss'


const imageList = [{
    src : 'src/components/atoms/img/bulbasorCard.png',
    name : 'Bulbasor',
    type : 'Rock',
    imgType : 'src/components/atoms/img/piedra.png',
    background: '#C5B78C'

}, {
    src :  'src/components/atoms/img/CharmanderCard.png',
    name : 'Charmander',
    type : 'fire',
    imgType : 'src/components/atoms/img/fire.png',
     background: '#FF9D55'

}, 
{
    src : 'src/components/atoms/img/SquiterCard.png',
    name : 'Squiter',
    type : 'water',
    imgType : 'src/components/atoms/img/water.png',
     background: '#5090D6'
},
{   
    src : 'src/components/atoms/img/onixCard.png', 
    name : 'Onix',
    type : 'Rock',
    imgType : 'src/components/atoms/img/piedra.png',
     background: '#C5B78C'
}, 
{
    src : 'src/components/atoms/img/pikachuCard.png',
    name : 'Pikachu',
    type : ' Electical',
    imgType : 'src/components/atoms/img/electrical.png',
     background: '#F4D23D'
},
{
    src : 'src/components/atoms/img/aggron.png',
    name : 'Aggron',
    type : 'water',
    imgType : 'src/components/atoms/img/water.png',
     background: '#5090D6'
},
{
    src: 'src/components/atoms/img/blastoise.png',
    name : 'Blastois',
    type: 'water',
    imgType : 'src/components/atoms/img/water.png',
     background: '#5090D6'
}
]

export const CardMove = () => {

    const scrollerInnerRef = useRef(null)

    useEffect(()=>{
        if(!window.matchMedia("(prefers-reduce-motion: reduce)").matches){
            const innerConter = Array.from(scrollerInnerRef?.current.children); 
            innerConter.forEach((item) => {
                                const duplicateItem = item.cloneNode(true);
                                duplicateItem.setAttribute("aria-hidden", true);
                                scrollerInnerRef?.current.appendChild(duplicateItem);
                            }) 
            }
    },[])


  return (
    <>
    <section className="scroller" data-animated='true'>
      <div className="scroller_inner" ref={scrollerInnerRef}>
              {
                imageList.map((item) => (
                    <div className="card" key={item.src}>
                        <img className="imgPersonaje" src={item.src}/>
                        <h2 className="nameCharacter">{item.name}</h2>
                        <div 
                            className="power"
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


