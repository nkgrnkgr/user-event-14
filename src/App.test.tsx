import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);

  const user = userEvent.setup();

  const button = await screen.findByRole("button");
  button.focus();

  await user.keyboard("{space}");

  const dialog = await screen.findByRole("dialog");

  expect(dialog).toBeInTheDocument();
});
