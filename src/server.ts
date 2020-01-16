import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { verify } from "jsonwebtoken";
import "./lib/env"

const config = require('../config/config.json')
const appConfig = config[`${process.env.NODE_ENV}`]["app"]

const PORT = appConfig["port"];
const HOST = appConfig["host"];
const JWTKEY = appConfig["jwt-key"]

const app = express();
// const auth = jwt({
//   secret: myConfig["development"]["jwt_secret"],
//   credentialsRequired: false
// })
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context: ({ req, res }: any) => ({ req, res })
});

app.use((req, res, next) => {
  try {
    const authorization: any = req.headers["authorization"]
    const accessToken = authorization.split(" ")[1]
    // console.log(accessToken)

    const data = verify(accessToken, JWTKEY) as any
    (req as any).userId = data.userId
  } catch { }
  next()
})

app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);
httpServer.listen({ port: PORT, host: HOST }, (): void =>
  console.log(`\n🚀      GraphQL is now running on http://${HOST}:${PORT}/graphql`)
);
