import { render, screen } from "@testing-library/react";
import { PokemonFight } from "./PokemonFight";

describe("Test component <PokemonFight>", () => {
  const imgTest = "https://imageTest.jpg";
  const name = "TestName";
  const experience = 85;

  test("this component should be rendered the props ImgUrl, name , className, experience", () => {
    render(
      <PokemonFight
        imgUrl={imgTest}
        name={name}
        className="TestClassName"
        experience={experience}
      />
    );
  });

  test("the component should be rendered the name of the pokemon", () => {
    render(
      <PokemonFight
        imgUrl={imgTest}
        name={name}
        className="TestClassName"
        experience={experience}
      />
    );
    expect(screen.getByRole("paragraph").textContent).toBe(name);
  });
  test("this component should be exist the experience in the document", () => {
    render(
      <PokemonFight
        imgUrl={imgTest}
        name={name}
        className="TestClassName"
        experience={experience}
      />
    );
    expect(screen.getByText(experience)).toBeTruthy();
    expect(screen.getAllByRole("img")).toBeTruthy();
  });

  test("should be rendered a img with the src and alt ", () => {
    render(
      <PokemonFight
        imgUrl={imgTest}
        name={name}
        className="TestClassName"
        experience={experience}
      />
    );

    const pokemonFight = screen.getByRole("img");
    expect(pokemonFight).toHaveAttribute("src", imgTest);
    expect(pokemonFight).toHaveAttribute("alt", name);
  });
});
