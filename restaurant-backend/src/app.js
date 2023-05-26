const fastify = require("fastify");

const build = async (opts, { staffService }) => {
  const app = fastify(opts);
  app.register(require("./adapters/external/http/routes/StaffRoutes"), {
    staffService,
    prefix: "/api/v1"
  });
  return app;
};

module.exports = build;
