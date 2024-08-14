import { useEffect, useRef } from "react";
import "../CardMove/CardMove.scss";
import { imageList } from "../../../Constant";




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
