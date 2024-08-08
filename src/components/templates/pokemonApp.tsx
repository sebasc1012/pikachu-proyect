import { Route, Routes } from "react-router-dom";
import { Character, Battle, Home } from "../pages";
import { HeaderBar } from "../Organisms/HeaderBar/HeaderBar";
import { Fight } from "../pages/Fight";

export const PokemonApp = () => {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Character" element={<Character />} />
        <Route path="/Battle" element={<Battle />} />
        <Route path="/Fight/:id" element={<Fight />} />
      </Routes>
    
    </>
  );
};

/* src */
