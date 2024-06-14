import Movie from ".";

import { render, screen } from "@testing-library/react";

test("renders a movie", () => {
  render(<Movie name="The Matrix" />);

  const matrixHeading = screen.getByText("The Matrix");
  expect(matrixHeading).toBeInTheDocument();
});

test("renders a movie again", () => {
  render(<Movie name="Matrix Reloaded" />);

  const matrixHeading = screen.getByRole("heading", {
    name: "Matrix Reloaded",
  });

  expect(matrixHeading).toBeInTheDocument();
});
