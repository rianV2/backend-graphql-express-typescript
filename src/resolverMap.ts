import { GraphQLResolveInfo } from 'graphql';
import { Context } from './models';
import { IResolvers } from 'graphql-tools';
import { PublicFigure, UpdatePublicFigure, AddPublicFigure } from './modules/recognizedEntity.controller'

const resolverMap: IResolvers = {
  RecognizedEntity: {
    __resolveType(_: void, args: void, ctx: Context, info: GraphQLResolveInfo): Array<any> {
      return [];
    },
  },
  Mutation: {
    putPublicFigures(_: void, { data }, ctx: Context, info: GraphQLResolveInfo): Promise<any> {
      return UpdatePublicFigure(data);
    },
    postPublicFigures(_: void, { data }, ctx: Context, info: GraphQLResolveInfo): Promise<any> {
      return AddPublicFigure(data);
    },
  },
  // createUser(name: String, email: String, job_title: String): Boolean
  // deleteUser(id: Int): Boolean
  Query: {
    testConnection(_: void, args: void, ctx: Context, info: GraphQLResolveInfo): String {
      return `👋 Connection Ok! 👋`;
    },
    getPublicFigures(_: void, { timeFrame, entities }, ctx: Context, info: GraphQLResolveInfo): Promise<any> {
      return PublicFigure(timeFrame, entities);
    },
  },
};

export default resolverMap;
