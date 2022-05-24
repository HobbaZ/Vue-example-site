import { gql } from '@apollo/client/core';

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
