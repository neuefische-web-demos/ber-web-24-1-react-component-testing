import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Movies from ".";

const mockInitialMovies = [
  {
    id: "0",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "2",
    name: "Spiderman",
    isLiked: false,
  },
  {
    id: "1",
    name: "Lord of the Rings",
    isLiked: false,
  },
];

test("renders the initialMovies", () => {
  render(<Movies initialMovies={mockInitialMovies} />);

  const hulkHeading = screen.getByRole("heading", {
    name: "The Incredible Hulk",
  });
  expect(hulkHeading).toBeInTheDocument();

  const spidermanHeading = screen.getByRole("heading", {
    name: "Spiderman",
  });
  expect(spidermanHeading).toBeInTheDocument();

  const lordOfTheRingsHeading = screen.getByRole("heading", {
    name: "Lord of the Rings",
  });
  expect(lordOfTheRingsHeading).toBeInTheDocument();
});

test("renders a new movie when the form is submitted with a new movie name", async () => {
  render(<Movies initialMovies={mockInitialMovies} />);

  const user = userEvent.setup();
  const input = screen.getByLabelText("Name");

  await user.type(input, "The Matrix");

  const button = screen.getByRole("button", { name: "Add" });
  await user.click(button);

  const matrixHeading = screen.getByRole("heading", { name: "The Matrix" });
  expect(matrixHeading).toBeInTheDocument();
});
