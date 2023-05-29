require("dotenv").config();
const server = require("./app");
const MongoDBDatabase = require("./adapters/database/MongoDBDatabase");
const StaffRepository = require("./core/repositories/StaffRepository");
const StaffService = require("./core/services/StaffService");
const seedDatabase = require("./scripts/seeds");

const start = async () => {
  let mongoDatabase;
  try {
    mongoDatabase = new MongoDBDatabase();
    await mongoDatabase.connection(
      process.env.CONNECTION_STRING,
      process.env.DATABASE_NAME
    );
    // Creating a repository to inject a database
    const staffRepository = new StaffRepository(mongoDatabase.db);
    const staffService = new StaffService(staffRepository);
    await seedDatabase(staffService);
    startServer({ staffService });
  } catch (error) {
    console.log("🚀 ~ file: server.js:19 ~ start ~ error:", error);
    await mongoDatabase.close();
    process.exit(1);
  }
};

const startServer = ({ staffService }) => {
  server(
    { logger: { level: "info", transport: { target: "pino-pretty" } } },
    { staffService }
  )
    .then((server) => {
      server.listen(
        { port: process.env.PORT || 2023, host: "0.0.0.0" },
        (err, address) => {
          if (err) {
            server.log.error(err);
            process.exit(1);
          }
          console.log(
            "🚀 ~ file: server.js:4 ~ server.listen ~ address:",
            address
          );
        }
      );
    })
    .catch((error) => {
      console.log("🚀 ~ file: server.js:41 ~ ).then ~ error:", error);
    });
};

start();
