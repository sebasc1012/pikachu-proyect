// useFetch.test.tsx
import { useFetch } from "./useFetch";
import { renderHook, waitFor } from "@testing-library/react";

const mockFetch = (url: string, response: unknown, status: number = 200) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: status === 200,
    status,
    statusText: "OK",
    json: jest.fn().mockResolvedValue(response),
  }) as jest.Mock;
};

describe("testing <useFetch/>", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should fetch data successfully and use cache", async () => {
    const url = "https://api.example.com/data";
    const mockData = { id: 1, name: "Item 1" };

    mockFetch(url, mockData);

    const { result, rerender } = renderHook(({ url }) => useFetch(url), {
      initialProps: { url },
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toEqual(mockData);
      expect(result.current.hasError).toBe(false);
    });

    rerender({ url });
    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
    });
  });

  test("should handle network errors", async () => {
    const url = "https://api.example.com/data";

    global.fetch = jest
      .fn()
      .mockRejectedValue(new Error("Network Error")) as jest.Mock;

    const { result } = renderHook(() => useFetch<unknown>(url));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
  });
});
