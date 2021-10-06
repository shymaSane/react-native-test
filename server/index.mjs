import express from 'express';
import {graphServer} from './graphql.mjs';

const port = process.env.PORT || 4000;

const startServer = async () => {
  const app = express();
  await graphServer(app);
  app.listen({port}, () => {
    console.log('app is running');
  });
};

startServer();
