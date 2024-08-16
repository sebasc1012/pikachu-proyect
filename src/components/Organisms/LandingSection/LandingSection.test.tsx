import { render, screen } from "@testing-library/react";
import { LandingSection } from "./LandingSection";

describe("Testing <LandingSection/>", () => {
  test("should be contain the img with the appropriate src and alt", () => {
    const urlTest = "src/assets/img/Logo.png";
    const altTesting = "Bulbasor Img";
    render(<LandingSection />);
    expect(screen.getByRole("principalImage")).toBeTruthy();
    expect(screen.getByRole("principalImage")).toBeInTheDocument();
    expect(screen.getByRole("principalImage")).toHaveAttribute(
      "alt",
      altTesting
    );
  });

  test("should be show the tittle", () => {
   
    render(<LandingSection/>);
    expect(screen.getAllByRole('tittleRole')[0]).toBeInTheDocument()
    expect(screen.getAllByRole('tittleRole')[0]).toHaveClass('principal_title')
    expect(screen.getAllByRole('tittleRole')[0].textContent).toBe('Are you ready for the challenge ?')
  });


  test("should be show the Subtitle", () => {
   
    render(<LandingSection/>);
    expect(screen.getAllByRole('subtitle')).toBeTruthy()
    expect(screen.getAllByRole('subtitle')[0]).toBeInTheDocument()
    expect(screen.getAllByRole('subtitle')[0]).toHaveClass('principal_subtitle')
  });
});
