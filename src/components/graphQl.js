import { gql } from '@apollo/client';


export const getProducts = gql`
            query{
                products{
                    id
                    title
                    image_url
                    price(currency:USD)
                    product_options{
                        title
                    }
                }
            }`
    ;
