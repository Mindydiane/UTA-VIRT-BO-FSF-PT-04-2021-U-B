// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql` 
type User {
   _id: ID
   name: String
   email: String
   password: String
   job: String
   country: String 
}

type Query {
    users: [User]
}
`;

module.exports = typeDefs;