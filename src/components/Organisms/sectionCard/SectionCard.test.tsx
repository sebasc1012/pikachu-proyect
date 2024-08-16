// SectionCard.test.tsx
import { render, screen} from "@testing-library/react";
import { SectionCard } from "./SectionCard";
import { useFetch } from "../../../hooks/useFetch";
import { useSearch } from "../../molecules/SearchBar/useSearch";

jest.mock("../../../hooks/useFetch", () => ({
  useFetch: jest.fn(),
}));

jest.mock("../../molecules/SearchBar/useSearch", () => ({
  useSearch: jest.fn(),
}));

describe('SectionCard Component', () => {
  beforeEach(() => {
    (useFetch as jest.Mock).mockImplementation(() => ({
      data: {
        results: [
          { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
          { name: "Ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
        ]
      },
      isLoading: false,
    }));

    (useSearch as jest.Mock).mockImplementation(() => ({
      pokemonsFiltered: [],
    }));
  });

  test('should render loading state', () => {
    (useFetch as jest.Mock).mockImplementation(() => ({
      data: null,
      isLoading: true,
    }));

    render(<SectionCard />);

    expect(screen.getByRole('containerRol')).toBeInTheDocument();
  });

  test('should render Pokémon cards when data is loaded', async () => {
    render(<SectionCard />);

    expect(screen.getByRole('cardRole')).toBeInTheDocument();
    
  });

  test('should handle pagination',  () => {
    render(<SectionCard />);

    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    });
   
})