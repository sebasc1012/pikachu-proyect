import { MainLayout } from '../molecules/MainContainer/MainContainer';
import "../pages/Home.scss";
import { LandingSection } from '../Organisms/LandingSection/LandingSection';
import { CardMove } from '../Organisms/CardMove/CardMove';

export const Home = () => {
  return (
    <MainLayout className='homeStyle'>
      <LandingSection />
      <CardMove/>
    </MainLayout>
  );
};
