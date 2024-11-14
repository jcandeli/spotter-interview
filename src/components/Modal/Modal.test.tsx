import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

const minimumProps = {
  isOpen: true,
  onClose: () => {},
  heading: "Heading",
};

describe("Modal", () => {
  it("should render successfully", () => {
    render(<Modal {...minimumProps}>Test Content</Modal>);
  });

  it("should not render when closed", () => {
    render(
      <Modal {...minimumProps} isOpen={false}>
        Test Content
      </Modal>
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should render with a heading", () => {
    render(
      <Modal {...minimumProps} heading="Test Heading">
        Test Content
      </Modal>
    );
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
  });

  it("should render with children", () => {
    render(<Modal {...minimumProps}>Test Content</Modal>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
