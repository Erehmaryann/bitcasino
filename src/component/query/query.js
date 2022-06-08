import { gql } from "@apollo/client";

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