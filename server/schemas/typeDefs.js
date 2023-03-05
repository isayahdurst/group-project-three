const { gql } = require('graphql-tag');

const typeDefs = gql`
    type Salesperson {
        _id: ID!
        first_name: String!
        last_name: String!
        phone_number: String
        email: String!
        password: String!
    }

    type Auth {
        token: ID!
        user: Salesperson
    }

    type Client {
        _id: ID!
        first_name: String!
        last_name: String!
        phone_number: String
        email: String!
        sales_person: Salesperson
    }

    type Sms {
        _id: ID!
        body: String
        date: String
        sales_person: Salesperson
        client: Client
        received: Boolean
    }

    type Email {
        _id: ID!
        subject: String
        body: String
        date: String
        sales_person: Salesperson
        client: Client
        received: Boolean
    }

    type Query {
        clients: [Client]
        salespeople: [Salesperson]
        clientsBySalesperson(salespersonId: ID!): [Client]
        salespersonById(id: ID!): [Salesperson]
        clientById(id: ID!): [Client]
        allClientEmails(clientId: ID!): [Email]
        allClientSms(clientId: ID!): [Sms]
        allSalespersonEmails(salespersonId: ID!): [Email]
        allSalespersonSms(salespersonId: ID!): [Sms]
        emailById(id: ID!): [Email]
        smsById(id: ID!): [Sms]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        
        addSalesperson(
            first_name: String!
            last_name: String!
            phone_number: String
            email: String!
            password: String!
        ): Salesperson

        updateSalesperson(
            id: ID!
            first_name: String
            last_name: String
            phone_number: String
            email: String
            password: String
        ): Salesperson

        addClient(
            first_name: String!
            last_name: String!
            phone_number: String
            email: String
            sales_person: ID!
            status: String!
        ): Client

        updateClient(
            id: ID!
            first_name: String
            last_name: String
            phone_number: String
            email: String
            status: String
        ): Client

        addEmail(
            subject: String
            body: String
            date: String!
            sales_person: ID!
            client: ID!
            received: Boolean!
        ): Email

        addSms(
            body: String
            date: String!
            sales_person: ID!
            client: ID!
            received: Boolean!
        ): Sms
    }
`;

module.exports = typeDefs;
