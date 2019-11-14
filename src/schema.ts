import 'graphql-import-node';
import typeDefs from './graphql/index';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// addMockFunctionsToSchema({ schema });

export default schema;
