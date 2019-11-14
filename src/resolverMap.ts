import { GraphQLResolveInfo } from 'graphql';
import { Context } from './models';
import { IResolvers } from 'graphql-tools';
import { PublicFigure } from './modules/recognizedEntity.controller'

const resolverMap: IResolvers = {
  RecognizedEntity: {
    __resolveType(_: void, args: void, ctx: Context, info: GraphQLResolveInfo): Array<any> {
      return [];
    },
  },
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
