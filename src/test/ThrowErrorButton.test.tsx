import { render, screen, RenderResult } from "@testing-library/react";
import ThrowErrorButton from "../components/ThrowErrorButton";


const setup = (): RenderResult =>
  render(
    <ThrowErrorButton/>
  );
describe("ThrowErrorButton", () => {
  test("is exist", () => {
    setup();
    expect(true).toBe(true);
    expect(screen.findByText("Throw an error")).toBeDefined();
  });
});

