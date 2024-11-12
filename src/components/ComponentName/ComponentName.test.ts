import { render } from "@testing-library/react";
import { ComponentName } from "./ComponentName";

describe("ComponentName", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ComponentName {...minimumProps} />);
    expect(baseElement).toBeTruthy();
  });
});
