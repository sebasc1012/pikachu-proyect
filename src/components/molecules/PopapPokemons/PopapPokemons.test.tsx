import { render, screen } from "@testing-library/react";
import { PopapPokemons } from "./PopapPokemons";
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");
const mockData = {
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/34/",
      },
      is_hidden: false,
      slot: 3,
    },
  ],
  base_experience: 64,
  cries: {
    latest: "",
    legacy: "",
  },
  forms: [],
  game_indices: [],
  height: 7,
  held_items: [],
  id: "1",
  is_default: true,
  location_area_encounters: "",
  moves: [
    {
      move: {
        name: "razor-wind",
        url: "https://pokeapi.co/api/v2/move/13/",
      },
    },
  ],
  name: "bulbasaur",
  order: 1,
  past_abilities: [],
  past_types: [],
  species: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon-species/1/",
  },
  sprites: {
    back_default: "",
    back_female: null,
    back_shiny: "",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    front_female: null,
    front_shiny: "url_to_front_shiny_sprite",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default: "url_to_dream_world_sprite",
        front_female: null,
      },
      home: {
        front_default: "url_to_home_sprite",
        front_female: null,
        front_shiny: "url_to_home_shiny_sprite",
        front_shiny_female: null,
      },
      "official-artwork": {
        front_default: "url_to_official_artwork_sprite",
        front_shiny: "url_to_official_artwork_shiny_sprite",
      },
      showdown: {
        back_default: "",
        back_female: null,
        back_shiny: "",
        back_shiny_female: null,
        front_default: "",
        front_female: null,
        front_shiny: "string",
        front_shiny_female: null,
      },
    },
  },
  stats: [],
  types: [],
  weight: 69,
};

const mockPokemonProp = {
  name: "bulbasaur",
  id: "1",
};

const mockSetShowPopap = jest.fn();

describe("Test <PopapPokemons/>", () => {
  beforeEach(() => {
    (useFetch as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      hasError: null,
    });
  });

  test("should rendered state loading", () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(
      <PopapPokemons
        pokemon={mockPokemonProp}
        setShowPopup={mockSetShowPopap}
      />
    );
    expect(screen.getAllByRole("paragraph")).toBeTruthy();
  });
  test("should rendered the img with the alt and src", () => {
    const altTest = "pokeball";
    const UrlTest = "src/assets/img/Pokeball.png";

    render(
      <PopapPokemons pokemon={mockData} setShowPopup={mockSetShowPopap} />
    );
    expect(screen.getAllByRole("imagePokemon")[0]).toHaveAttribute(
      "alt",
      altTest
    );

  test("should rendered the hight of the pokemon", () => {
    render(
      <PopapPokemons pokemon={mockData} setShowPopup={mockSetShowPopap} />
    );

    expect(screen.getByRole("hightPokemon")).toBeTruthy();
    expect(screen.getByRole("hightPokemon")).toBeInTheDocument();
    expect(screen.getByRole("hightPokemon").textContent).toBe("7");
  });

  test("should rendered the name of the pokemon", () => {
    render(
      <PopapPokemons pokemon={mockData} setShowPopup={mockSetShowPopap} />
    );

    expect(screen.getByRole("namePokemon").textContent).toBe("bulbasaur");
  });
});
