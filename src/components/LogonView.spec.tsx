import {render, screen} from "@testing-library/react"
import LogonView from "./LogonView"
import {hashCode} from "../utilities/hash"

it('Check for correct rendering', () => {
    render(<LogonView />);
    const text = screen.getByText("Login")
    expect(text).toBeInTheDocument();
});

test("Check for correct hashing of the string", () => {
    // The mock function is called twice
    expect(hashCode("asd")).toBe(96882);
})
