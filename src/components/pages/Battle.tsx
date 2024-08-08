import { MainLayout } from "../atoms/MainContainer/MainContainer";
import { SectionCardBattle } from "../Organisms/SectionCardBattle/SectionCardBattle";
import style from "../pages/Battle.module.scss";

export const Battle = () => {
  return (
    <MainLayout className={style.containerBattle}>
     <SectionCardBattle/>
    </MainLayout>
  );
};
