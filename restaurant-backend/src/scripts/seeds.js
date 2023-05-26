const fs = require("fs/promises");
const path = require("path");

const seedDatabase = async (staffService) => {
  if (!staffService) {
    throw new Error("Staff serivce is required");
  }
  const [cooks, waiters] = await Promise.all([
    fs.readFile(path.resolve(__dirname, "cooks.json"), { encoding: "utf8" }),
    fs.readFile(path.resolve(__dirname, "waiters.json"), { encoding: "utf8" }),
  ]);
  await staffService.deleteStaff();
  await staffService.addStaff(JSON.parse(waiters), JSON.parse(cooks));
};

module.exports = seedDatabase;
