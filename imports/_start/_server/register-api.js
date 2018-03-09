//main apollo server from .meteor
import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
//GraphQL TodoObject Schema
import TodoObjectsScehma from '../../_api/_Todos/TodoObjects.graphql';

const testSchema = `
  type Query {
    TodoObject: String
    TodoObjects: [TodoObject]
  }
`;
const typeDefs = [
  testSchema,
  TodoObjectsScehma
];

const resolvers = {
  Query: {
    TodoObject() {
      return "This is a my first query"
    },
    TodoObjects(){
      return[
        {
          _id:"asfdsaf",
          name:"TodoObject 1"
        },
        {
          _id:"gjdfag",
          name:"TodoObject 2"
        }
      ];
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({schema})
