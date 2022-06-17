import { gql } from "@apollo/client";
import PropTypes from "prop-types";

export const PRICE = gql`
	query price($input: String!) {
        markets(filter: { baseSymbol: {_eq: $input}, quoteSymbol: {_eq: "EUR"}}) {
            marketSymbol
            ticker {
                lastPrice
            }
        }
    }
`;

PRICE.propTypes = {
    input: PropTypes.string.isRequired,
    marketSymbol: PropTypes.string,
    ticket: {
        lastPrice: PropTypes.string,
    }
};