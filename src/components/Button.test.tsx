import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("buttonタグがレンダリングされる", () => {
    render(<Button label="ボタン" onClick={() => alert("click")} />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument(); // レンダリングされていることを確認
    expect(element).toHaveTextContent("ボタン"); // DOM内に指定したテキストが存在することを確認
  });
});
