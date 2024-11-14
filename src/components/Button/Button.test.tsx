import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", () => {
    render(
      <Button disabled onClick={() => {}}>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("applies custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    render(
      <Button onClick={() => {}} style={customStyle}>
        Click me
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ backgroundColor: "red" });
  });
});
