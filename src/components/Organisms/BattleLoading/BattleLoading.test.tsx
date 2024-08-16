import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { BattleLoading } from "./BattleLoading";
import { MemoryRouter } from "react-router-dom";

describe("Testing <BattleLoading/>", () => {
  test("should be rendered the button in the component ", () => {
    render(
      <MemoryRouter>
        <BattleLoading />
      </MemoryRouter>
    );
    expect(screen.getByRole("buttonContinue")).toHaveClass("buttonMove");
    expect(screen.getByRole("buttonContinue")).toBeInTheDocument();
  });

  test("should be function the button in the component ", () => {
    render(
      <MemoryRouter>
        <BattleLoading />
      </MemoryRouter>
    );
    const button = screen.getByRole("buttonContinue");
    fireEvent.click(button);
  });
});
