const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: string
    email: string
    password: string
    books: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(userId: ID!, book: String!): User
    deleteBook(book: String!): User
  }
`;

module.exports = typeDefs;
