import { render } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { ErrorMessage } from "./ErrorMessage"

describe("ErrorMessage", () => {
  it("renders the error message", () => {
    const error = new Error("Test error message")
    const { getByText } = render(<ErrorMessage error={error} />)
    expect(getByText("Test error message")).toBeTruthy()
  })
})
