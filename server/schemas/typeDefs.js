const { gql } = require("graphql-tag");

const typeDefs = gql`
    type Salesperson {
        _id: ID!
        first_name: String!
        last_name: String!
        phone_number: String
        email: String!
    }

    type Client {
        _id: ID!
        first_name: String!
        last_name: String!
        phone_number: String
        email: String!
        sales_person: Salesperson
    }

    type Query {
        clients: [Client]
        salespeople: [Salesperson]
        clientsBySalesperson(salespersonId: ID!): [Client]
    }

    type Mutation {
        addSalesperson(first_name: String!, last_name: String!, phone_number: String, email: String!, password: String!): Salesperson
        addClient(first_name: String!, last_name: String!, phone_number: String, email: String!, sales_person: ID!, status: String!): Client
      }
      
`;

module.exports = typeDefs;
