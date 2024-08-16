import style from "../pages/Character.module.scss";
import { MainLayout } from "../molecules/MainContainer/MainContainer";
import { SectionCard } from "../Organisms/SectionCard/SectionCard";

export const Character = () => {
  return (
    <>
      <MainLayout className={style.container}>
        <SectionCard/>
      </MainLayout>
    </>
  );
};
