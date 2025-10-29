import SnapshotComponent from "./SnapshotComponent";
import { render } from "@testing-library/react";

it("SnapshotTest", () => {
  const { container } = render(<SnapshotComponent text="React" />);
  expect(container).toMatchSnapshot();
});
