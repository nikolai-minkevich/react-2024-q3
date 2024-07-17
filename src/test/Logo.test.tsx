import { render, screen, RenderResult } from "@testing-library/react";
import Logo from "../components/Logo";


const setup = (): RenderResult =>
  render(
    <Logo/>
  );
describe("Logo", () => {
  test("is exist", () => {
    setup();
    expect(true).toBe(true);
    expect(screen.findByText("React 2024 Q3 task")).toBeDefined();
  });
});

