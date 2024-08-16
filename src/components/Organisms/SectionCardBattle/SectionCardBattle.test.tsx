import { fireEvent, render, screen } from "@testing-library/react";
import { SectionCardBattle } from "./SectionCardBattle";
import { useFetch } from "../../../hooks/useFetch";
import { useSearch } from "../../molecules/SearchBar/useSearch";
import { MemoryRouter } from "react-router-dom";
import { urlDefault } from "../../../Constant";

jest.mock("../../../hooks/useFetch", () => ({
  useFetch: jest.fn(),
}));

jest.mock("../../molecules/SearchBar/useSearch", () => ({
  useSearch: jest.fn(),
}));

describe("SectionCardBattle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


  
  test("should render loading state", () => {
    (useFetch as jest.Mock).mockReturnValue({ data: null, isLoading: true });
    (useSearch as jest.Mock).mockReturnValue({ pokemonsFiltered: [] });

    render(<SectionCardBattle />, { wrapper: MemoryRouter });

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("should render Pokémon list when not loading", async () => {
    const mockData = {
      results: [
        { name:jest.fn(), url: "https://pokeapi.co/api/v2/pokemon/25/" },
      ],
    };
    (useFetch as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    (useSearch as jest.Mock).mockReturnValue({ pokemonsFiltered: [] });

    render(<SectionCardBattle />, { wrapper: MemoryRouter });

      expect(screen.getByRole('inputRole')).toHaveClass('inputContainer');
  });

  test('should call pokemonToBattle when a Pokémon card is clicked', async () => {
    const mockData = { results: [{ name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }] };
    (useFetch as jest.Mock).mockReturnValue({ data: mockData, isLoading: false });
    (useSearch as jest.Mock).mockReturnValue({ pokemonsFiltered: [] });

    render(<SectionCardBattle />, { wrapper: MemoryRouter });

    const pokemonCard = screen.getByRole('inputRole');
    fireEvent.click(pokemonCard);

    expect(pokemonCard).toBeTruthy()
  });

  test('should handle pagination button click', () => {
    const mockData = { results: [{ name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }] };
    (useFetch as jest.Mock).mockReturnValue({ data: mockData, isLoading: false });
    (useSearch as jest.Mock).mockReturnValue({ pokemonsFiltered: [] });

    render(<SectionCardBattle />, { wrapper: MemoryRouter });

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(useFetch).toHaveBeenCalledWith(`${urlDefault}?limit=200&offset=200`);
  });
});




