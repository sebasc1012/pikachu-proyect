import { NavLink } from "react-router-dom";
import style from "./PopPapFight.module.scss";

interface ResultProps {
  result: string;
}

export const PopPapFight = ({ result }: ResultProps) => {
  return (
    <>
      <div className={style.popPapContainer}>
        <h1 role="resultBattle" className={style.result}>
          {result}
        </h1>

        <button className={style.buttonGame}>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/Battle"
          >
            END GAME
          </NavLink>
        </button>
      </div>
    </>
  );
};
