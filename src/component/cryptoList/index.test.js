/* eslint-disable testing-library/no-unnecessary-act */
import CryptoList from '.';
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from 'react-dom/test-utils';

describe('CryptoList', () => {
    // check if the component renders
    it("rendered correctly", () => {
        render(<CryptoList />);
        expect(screen.getByTestId('crypto-list')).toBeTruthy();
    });

    // check if the component renders with data
    it("rendered correctly with data", () => {
        render(<CryptoList data={[{ code: "BTC", price: "1.2" }, { code: "ETH", price: "1.3" }]} />);
        expect(screen.getByTestId('crypto-list')).toBeTruthy();
    });

    // Test to render the component with no data
    it("rendered correctly with no data", () => {
        render(<CryptoList />);
        expect(screen.queryByTestId('crypto-list-item')).toBeFalsy();
    });

    // test deleteCoin function
    it("deleteCoin function", () => {
        const deleteCoin = jest.fn();
        act(async () => {
            render(<CryptoList deleteCoin={deleteCoin} />);
            const deleteButton = screen.getByTestId('delete-coin');
            await fireEvent.click(deleteButton);
            expect(deleteCoin).toHaveBeenCalled();
        });
    });
});