import { getByTestId, render } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { ErrorAndLoadingHandler } from "./ErrorAndLoadingHandler"

describe("ErrorAndLoadingHandler", () => {
  it("renders children when there is no error and not loading", () => {
    const { getByText } = render(
      <ErrorAndLoadingHandler error={null}>
        <div>Child Component</div>
      </ErrorAndLoadingHandler>
    )
    expect(getByText("Child Component")).toBeTruthy()
  })

  it("renders ErrorMessage when there is an error", () => {
    const error = new Error("Test error")
    const { getByText } = render(
      <ErrorAndLoadingHandler error={error}>
        <div>Child Component</div>
      </ErrorAndLoadingHandler>
    )
    expect(getByText("Test error")).toBeTruthy()
  })

  it("renders Loader when it is loading", () => {
    const { container } = render(
      <ErrorAndLoadingHandler isLoading={true} error={null}>
        <div>Child Component</div>
      </ErrorAndLoadingHandler>
    )
    expect(getByTestId(container, "loader")).toBeTruthy()
  })
})
