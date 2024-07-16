import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./index";
describe("Search Component", () => {
  test("renders search input", () => {
    render(<Search handleSearch={() => {}} />);
    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
  });

  test("allows users to enter text", () => {
    render(<Search handleSearch={() => {}} />);
    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test search" } });
    expect(searchInput.value).toBe("test search");
  });
});
