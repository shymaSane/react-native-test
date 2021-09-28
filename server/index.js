const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    userName: String!
    email: String!
    password: String!
    # birthday: String
    avatar: String
    stories: [Story]
  }

  type Story {
    id: ID!
    author: User
    title: String
    body: String
    date: Int
    time: Int
  }

  type Query {
    users: [User!]!
    stories: [Story!]!
    user(id: ID!): User
  }

  type Mutation {
    newUser(userName: String!, email: String!, password: String!): User!
  }
`;

const writers = [
  {
    id: '1',
    userName: 'Delaney	kDSmdpnXlI',
    email: 'dcasine0@themeforest.net',
    avatar:
      'https://robohash.org/voluptatibusnullaquas.png?size=50x50&set=set1',
  },
  {
    id: '2',
    userName: 'Delaney	kDSmdpnXlI',
    email: 'dcasine0@themeforest.net',
    avatar:
      'https://robohash.org/voluptatibusnullaquas.png?size=50x50&set=set1',
  },
  {
    id: '3',
    userName: 'Delaney	kDSmdpnXlI',
    email: 'dcasine0@themeforest.net',
    avatar:
      'https://robohash.org/voluptatibusnullaquas.png?size=50x50&set=set1',
  },
  {
    id: '4',
    userName: 'Delaney	kDSmdpnXlI',
    email: 'dcasine0@themeforest.net',
    avatar:
      'https://robohash.org/voluptatibusnullaquas.png?size=50x50&set=set1',
  },
];

const resolvers = {
  Query: {
    users: () => writers,
    user: (parent, args) => {
      return writers.find(writer => writer.id === args.id);
    },
  },
  Mutation: {
    newUser: (parent, args) => {
      let userValue = {
        id: writers.length + 1,
        userName: args.userName,
        email: args.email,
        password: args.password,
      };
      writers.push(userValue);
      return userValue;
    },
  },
};

//how to query for it :

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
