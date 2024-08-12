import { useEffect, useRef } from "react";
import "../CardMove/CardMove.scss";

interface imageItems {
  src: string;
  name: string;
  type: string;
  imgType: string;
  background: string;
}
const imageList: imageItems[] = [
  {
    src: "src/assets/img/bulbasorCard.png",
    name: "Bulbasor",
    type: "Rock",
    imgType: "src/assets/img/rock.png",
    background: "#C5B78C",
  },
  {
    src: "src/assets/img/CharmanderCard.png",
    name: "Charmander",
    type: "fire",
    imgType: "src/assets/img/fire.png",
    background: "#FF9D55",
  },
  {
    src: "src/assets/img/SquiterCard.png",
    name: "Squiter",
    type: "water",
    imgType: "src/assets/img/water.png",
    background: "#5090D6",
  },
  {
    src: "src/assets/img/onixCard.png",
    name: "Onix",
    type: "Rock",
    imgType: "src/assets/img/rock.png",
    background: "#C5B78C",
  },
  {
    src: "src/assets/img/pikachuCard.png",
    name: "Pikachu",
    type: " Electical",
    imgType: "src/assets/img/electrical.png",
    background: "#F4D23D",
  },
  {
    src: "src/assets/img/aggron.png",
    name: "Aggron",
    type: "water",
    imgType: "src/assets/img/water.png",
    background: "#5090D6",
  },
  {
    src: "src/assets/img/blastoise.png",
    name: "Blastois",
    type: "water",
    imgType: "src/assets/img/water.png",
    background: "#5090D6",
  },
];

export const CardMove = () => {
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduce-motion: reduce)").matches) {
      const innerCounter = Array.from(
        scrollerInnerRef?.current?.children ?? []
      );
      innerCounter.forEach((item) => {
        const duplicateItem = item.cloneNode(true) as HTMLElement;
        duplicateItem.setAttribute("aria-hidden", "true");
        scrollerInnerRef?.current?.appendChild(duplicateItem);
      });
    }
  }, []);

  return (
    <>
      <section className="scroller" data-animated="true">
        <div className="scroller_inner" ref={scrollerInnerRef}>
          {imageList.map((item) => (
            <div className="card" key={item.src}>
              <div className="imgContainer">
                <img
                  className="imgCharacter"
                  alt="character image"
                  src={item.src}
                />
              </div>
              <h2 className="nameCharacter">{item.name}</h2>

              <div className="power" style={{ background: item.background }}>
                <div className="containerButton">
                  <img alt="character type" src={item.imgType} />
                  <p className="typeButton">{item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
