class StaffController {
  constructor(staffService) {
    this.staffService = staffService;
  }

  async getCooks(req, reply) {
    try {
      return reply.send();
    } catch (error) {
      console.error("Error retrieving user:", error);
      return reply.code(500).send({ error: "Internal server error" });
    }
  }

  async getStaff(_request, reply) {
    try {
      const currentStaff = await this.staffService.staff;
      if (!currentStaff) {
        throw new Error("Staff is empty");
      }
      console.log(currentStaff)
      return reply.send(currentStaff);
    } catch (error) {
      return reply.code(404).send({ error });
    }
  }

}

module.exports = StaffController;
