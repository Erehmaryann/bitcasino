import { render, screen, } from "@testing-library/react";
import Form from "../Form";

describe("form component", () => {
    // check if the component renders
    it("rendered correctly", () => {
        render(<Form />);
        expect(screen.getByTestId('form')).toBeTruthy();
    });

    // rendered input
    it("rendered input", () => {
        render(<Form />);
        expect(screen.getByTestId('crypto-code-input')).toBeTruthy();
    });

    // rendered button
    it("rendered button", () => {
        render(<Form />);
        expect(screen.getByTestId('crypto-code-button')).toBeTruthy();
    });

    // rendered button disabled
    it("rendered button disabled", () => {
        render(<Form />);
        expect(screen.getByTestId('crypto-code-button').disabled).toBeTruthy();
    });
});