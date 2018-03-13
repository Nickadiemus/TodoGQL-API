//main apollo server from .meteor
import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import merge from 'lodash/merge';

//GraphQL TodoObject Schema
import TodoObjectsScehma from '../../_api/_Todos/TodoObjects.graphql';
import TodoItemsSchema from '../../_api/_TodoItems/TodoItems.graphql';
import TodoResolvers from '../../_api/_Todos/resolvers.js';
import TodoItemResolvers from '../../_api/_TodoItems/resolvers.js';

// Temporary Query Schemasssss
const titleSchema = `
  extend type Query {
    HomeTitle: String
  }
`;
//Type Definitions
const typeDefs = [
  titleSchema,
  TodoObjectsScehma,
  TodoItemsSchema
];

const resolver = {
  Query: {
    HomeTitle() {
      return "Fooji Todo List"
    }
  }
}

// Merges Queries together from lodash/merge
const resolvers = merge(
  resolver,
  TodoResolvers,
  TodoItemResolvers
)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({schema})
