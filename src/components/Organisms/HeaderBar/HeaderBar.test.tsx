import { render, screen } from "@testing-library/react";
import { HeaderBar } from "./HeaderBar";
import { MemoryRouter } from "react-router-dom";

describe("Testing <HeaderBar/>", () => {
  test("should be rendered the component", () => {
    render(
      <MemoryRouter>
        <HeaderBar />
      </MemoryRouter>
    );
    const navContainer = screen.getByRole("navContainer");
    expect(navContainer).toBeInTheDocument();
    expect(navContainer).toHaveClass("container");
  });

  test("should be rendered the component", () => {
    render(
      <MemoryRouter>
        <HeaderBar />
      </MemoryRouter>
    );
    const linkDirect = screen.getByRole("linkDirect");
    expect(linkDirect).toBeInTheDocument();
    expect(linkDirect.textContent).toBe('Character');
  });
});
