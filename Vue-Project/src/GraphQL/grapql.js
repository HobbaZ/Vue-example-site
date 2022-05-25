import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation createUser($firstname: String!, $lastname: String!, $username: String!, $email: String!, $password: String!) {
    createUser(firstname: $firstname, lastname: $lastname, username: $username, email: $email, password: $password) {
        _id
        firstname
        lastname
        username
        email
        password
    }
  }
`;