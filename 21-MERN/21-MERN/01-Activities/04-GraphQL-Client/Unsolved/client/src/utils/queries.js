import {gql} from '@apollo/client';

const QUERY_BOOKS = gql`
    query books {
        books {
            _id
            title
            author
            pages
        }
    }
`

module.exports = QUERY_BOOKS;