import { GraphQLResolveInfo } from 'graphql';
import { Context } from './models';
import { IResolvers } from 'graphql-tools';
import { PublicFigure, UpdatePublicFigure, AddPublicFigure } from './modules/recognizedEntity.controller'
import { CheckLogin } from './modules/auth.controller'
import { GetAccount, CreateAccount, UpdateAccount, DeleteAccount } from './modules/user.controller'

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
  Mutation: {
    putPublicFigures(_: void, { data }, ctx: Context, info: GraphQLResolveInfo): Promise<any> {
      return UpdatePublicFigure(data);
    },
    postPublicFigures(_: void, { data }, ctx: Context, info: GraphQLResolveInfo): Promise<any> {
      return AddPublicFigure(data);
    },
    getAuth(_: void, { username, password }, { req, res }, info: GraphQLResolveInfo): Promise<any> {
      return CheckLogin(username, password, res);
    },
    createAccount(_: void, { username, password, role }, { req, res }, info: GraphQLResolveInfo): Promise<any> {
      if (!req.userId) {
        throw new Error('You are not authenticated!')
      }

      return CreateAccount(username, password, role);
    },
    updateAccount(_: void, { id, username, password, role }, { req, res }, info: GraphQLResolveInfo): Promise<any> {
      if (!req.userId) {
        throw new Error('You are not authenticated!')
      }

      return UpdateAccount(id, username, password, role);
    },
    deleteAccount(_: void, { id }, { req, res }, info: GraphQLResolveInfo): Promise<any> {
      if (!req.userId) {
        throw new Error('You are not authenticated!')
      }

      return DeleteAccount(id);
    }
  },
  // createUser(name: String, email: String, job_title: String): Boolean
  // deleteUser(id: Int): Boolean
};

export default resolverMap;
