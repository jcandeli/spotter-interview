import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Test Content
      </Modal>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should not render when closed", () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}}>
        Test Content
      </Modal>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
