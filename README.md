# Student-Campus-Manager-backend

Database credentials are stored in a file called configDB.js which should be located in database/utils/
and contains

module.exports = {
  dbName,
  dbUser,
  dbPwd,
};

There isn't much change from the starter code besides changing the models to include more information.
The code was run with:

await db.sync({ force: true });
await seedDB();

to first seed the database and then commented out to just have:

await db.sync();

to prevent reseeding/overriding the database with seed data.
