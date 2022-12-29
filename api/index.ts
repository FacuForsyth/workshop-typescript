import {sequelize} from './src/db';
import app from './src/app';

sequelize
 .sync({ force: true, logging: false })
 .then(() => {
  console.log('db ok');
  app.listen(3001, function () {
   console.log('App is listening on port 3001!');
  });
 })
 .catch((err) => console.error(err));