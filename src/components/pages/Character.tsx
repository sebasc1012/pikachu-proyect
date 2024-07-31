import style from '../pages/Character.module.scss'
import { MainLayout } from '../atoms/MainContainer/MainContainer';
import { SectionCard } from '../Organisms/sectionCard/SectionCard';

export const Character = () => {
  return (
    <>
      <MainLayout className={style.container}> 
        <SectionCard/>
      </MainLayout>
    </>
  )
}

