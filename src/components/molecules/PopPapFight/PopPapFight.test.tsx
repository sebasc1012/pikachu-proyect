import { render, screen } from "@testing-library/react";
import { PopPapFight } from "./PopPapFight";
import { MemoryRouter } from "react-router-dom";

describe("Testing <PopapFight>", () => {
  test("should be rendered the result of the fight ", () => {
    render(
      <MemoryRouter>
        <PopPapFight result="" />
      </MemoryRouter>
    );
    expect(screen.getByRole("resultBattle")).toBeInTheDocument();
    expect(screen.getByRole("resultBattle")).toHaveClass("result");
    expect(screen.getByRole("resultBattle").textContent).toContain("");
  });

  test("The button should be functional", () => {
    render(
      <MemoryRouter>
        <PopPapFight result="" />
      </MemoryRouter>
    );
    expect(screen.getByRole("button").textContent).toBe("END GAME");
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
