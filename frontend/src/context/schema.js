import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query products {
        products {
            status
            body {
                id
                title
                image
                description
                price
            }
        }
    }
`;

export const GET_PRODUCT_BY_ID = gql`
    query getProductById($id: ID!) {
        getProductById(id: $id) {
            status
            body {
                id
                title
                description
                image
                price
            }
        }
    }
`;
