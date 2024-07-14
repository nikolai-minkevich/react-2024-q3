import { render, screen, RenderResult } from "@testing-library/react";
import Item from "../components/Item";
import { MemoryRouter } from "react-router-dom";

const contentFixture = {
  uid: "111",
  title: "title",
  titleGerman: "titleGerman",
  titleJapanese: "titleJapanese",
  titleItalian: "titleItalian",
  usAirDate: "usAirDate",
  yearFrom: 2000,
  yearTo: 2025,
};

const setup = (): RenderResult =>
  render(
    <MemoryRouter>
      <Item content={contentFixture} />
    </MemoryRouter>,
  );
describe("test", () => {
  test("demo", () => {
    setup();
    expect(true).toBe(true);
    expect(screen.findByText("title")).toBeDefined();
  });
});
