const StaffController = require("../controllers/StaffController");

function staffRoutes(fastify, options, done) {
  const staffController = new StaffController(options.staffService);

  fastify.get("/", (_request, reply) => {
    return reply.send({ hello: "world" });
  });

  fastify.get("/staff/cooks", (request, reply) =>
    staffController.getCooks(request, reply)
  );
  fastify.get("/staff", (request, reply) =>
    staffController.getStaff(request, reply)
  );

  done();
}

module.exports = staffRoutes;
