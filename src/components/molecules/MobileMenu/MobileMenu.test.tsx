import { render, screen } from "@testing-library/react";
import { MobileMenu } from "./MobileMenu";
import { MemoryRouter } from "react-router-dom";

describe("Testing <MobileMenu>", () => {
  test("should be contain NavLinks ", () => {
    render(
      <MemoryRouter>
        <MobileMenu />
      </MemoryRouter>
    );
    expect(screen.getByRole("linkTest")).toBeInTheDocument();
  });

  test("should be contain the text", () => {
    render(
      <MemoryRouter>
        <MobileMenu />
      </MemoryRouter>
    );

    expect(screen.getByRole("linkTest").textContent).toBe("Characters");
  });
});
