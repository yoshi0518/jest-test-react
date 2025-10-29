import { render, screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Form", () => {
  it("初期状態ではテキストは空欄", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument(); // レンダリングされていることを確認
    expect(input).toHaveTextContent(""); // テキストが空欄であることを確認
  });

  it("入力したテキストがサブミットされる", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockReturnValue();
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    await user.type(input, "Test Text");
    expect(screen.getByDisplayValue("Test Text")).toBeInTheDocument(); // 「Test Text」が入力されている要素が存在することを確認

    const button = screen.getByRole("button");
    await user.click(button);
    expect(alertSpy).toHaveBeenCalledWith("submitted: Test Text");
    alertSpy.mockRestore();
  });
});
