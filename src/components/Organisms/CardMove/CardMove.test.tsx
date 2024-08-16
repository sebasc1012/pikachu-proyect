// CardMove.test.tsx
import { render, screen } from "@testing-library/react";
import { CardMove } from "./CardMove";

jest.mock("../../../Constant", () => ({
  imageList: [
    { src: "image1.png", name: "Character 1", background: "blue", imgType: "type1.png", type: "Type 1" },
    { src: "image2.png", name: "Character 2", background: "green", imgType: "type2.png", type: "Type 2" },
  ],
}));

describe('Testing <CardMove/>', () => { 
    

    beforeAll(() => {
        window.matchMedia = jest.fn().mockImplementation(query => ({
          matches: query === "(prefers-reduce-motion: reduce)" ? false : true,
          addListener: jest.fn(),
          removeListener: jest.fn(),
        }));
      });

    beforeEach(() => {
        jest.clearAllMocks();
      });

      test('should rendered the image ', () => {
        
        render(<CardMove />);
        expect(screen.getAllByRole('imgCharacter')).toBeTruthy();
        expect(screen.getAllByRole("img")).toBeTruthy();
      });

      

 })