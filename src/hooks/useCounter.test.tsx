import useCounter from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe("useCounter", () => {
  it("increment", () => {
    const { result } = renderHook(() => useCounter(1));

    expect(result.current.count).toBe(1);

    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });

  it("decrement", () => {
    const { result } = renderHook(() => useCounter(1));

    expect(result.current.count).toBe(1);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });
});
