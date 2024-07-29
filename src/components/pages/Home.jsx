import React from "react";
import { CardMove } from "../organismos/CardMove/CardMove";
import { LandingSection } from "../organismos/LandingSection/LandingSection";
import { MainLayout } from "../atoms/MainContainer/MainContainer";
import "../pages/Home.scss";

export const Home = () => {
  return (
    <MainLayout>
      <LandingSection />
      <CardMove />
    </MainLayout>
  );
};
