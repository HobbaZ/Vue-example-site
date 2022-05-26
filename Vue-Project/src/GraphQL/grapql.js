import gql from 'graphql-tag'

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstname
      lastname
      username
      email
    }
  }
`;

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

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
        username
        email
      }
    }
  }
`;

export const UPDATE_ME = gql`
mutation updateUser($username: String, $email: String) {
  updateUser(username: $username, email: $email) {
      _id
      firstname
      lastname
      username
      email
  }
}
`;

export const DELETE_ME = gql`
  mutation deleteUser {
    deleteUser {
      _id
      firstname
      lastname
      username
      email
    }
}
`;