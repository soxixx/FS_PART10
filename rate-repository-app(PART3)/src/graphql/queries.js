import { gql } from '@apollo/client';

export const GET_ALL_REPOSITORIES = gql`
  query{
    repositories{
      edges{
        node{
          id
          ownerName
          name
          createdAt
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          openIssuesCount
          url
          ownerAvatarUrl
          description
          language
        }
      }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
 query {
     authorizedUser {
       id
       username
     }
  }
`;