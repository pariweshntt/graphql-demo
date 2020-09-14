import { gql } from "apollo-boost";

const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`;

const addBookMutation = gql`
    mutation AddBook($name: String!) {
  addBook(name: $name, genre: "fiction") {
    id
    name
  }
}
`

export {getAuthorsQuery, addBookMutation};