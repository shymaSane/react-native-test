//this import for ORM and stays on the top
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {User} from './entity/User';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'stories-admin',
  password: 'stories-admin',
  database: 'stories-admin',
  entities: [User],
  synchronize: true,
  logging: false,
})
  .then(connection => {
    console.log(connection);
  })
  .catch(err => {
    console.log(err);
  });
