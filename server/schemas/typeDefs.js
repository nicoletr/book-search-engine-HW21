const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: string
    email: string
    bookCount: Int
    books: [Book]
  }

  type Book {
    bookId: string
    authors: [string]
    description: string
    title: string
    image: string
    link: string
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
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(userId: ID!, book: String!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
