const fastify = require("fastify");
const cors = require("@fastify/cors")
const build = async (opts, { staffService }) => {
  const app = fastify(opts);
  await app.register(cors)
  app.register(require("./adapters/external/http/routes/StaffRoutes"), {
    staffService,
    prefix: "/api/v1"
  });
  return app;
};

module.exports = build;
