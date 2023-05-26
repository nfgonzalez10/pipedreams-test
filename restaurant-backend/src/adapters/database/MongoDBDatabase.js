const { MongoClient } = require("mongodb");

class MongoDBDatabase {
  constructor() {
    this.client = null;
    this.db = null;
  }

  async connection(connectionString, databaseName) {
    console.log(
      "🚀 ~ file: MongoDBDatabase.js:10 ~ MongoDBDatabase ~ connection ~ connectionString:",
      connectionString
    );
    this.client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await this.client.connect();

    this.db = this.client.db(databaseName);
  }

  async close() {
    await this.client.close();
  }
}

module.exports = MongoDBDatabase;
