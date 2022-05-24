import { gql } from '@apollo/client/core';

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