import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "./index";
describe("Item Component Tests", () => {
  const mockData = {
    id: "1",
    category: "VIDEOS" as const,
    url: "http://example.com",
    title: "Test Video",
    description: "A description of the test video",
  };

  it("renders correctly with given props", () => {
    render(<Item {...mockData} />);

    // Check if the category chip displays the correct label
    expect(screen.getByText("Video")).toBeInTheDocument();

    // Verify the title and description
    expect(screen.getByText("Test Video")).toBeInTheDocument();
    expect(
      screen.getByText("A description of the test video")
    ).toBeInTheDocument();

    // Ensure the link is correct
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "http://example.com");
    expect(linkElement.textContent).toBe("Test Video");
  });
});
