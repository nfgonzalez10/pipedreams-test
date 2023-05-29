const fastify = require("fastify")();
const staffRoutes = require("../../../../../src/adapters/external/http/routes/StaffRoutes");

describe("Staff routes", () => {
  let mockStaffService;
  const STAFF = {
    cooks: {
      monday: ["John", "William", "James", "Charles"],
      tuesday: ["George", "Frank", "Joseph"],
      wednesday: ["Thomas", "Henry", "Robert", "Edward", "Harry", "Walter"],
      thursday: ["Albert", "Samuel", "David", "Louis", "Joe", "Charlie"],
      friday: ["Clarence", "Richard", "Andrew", "Daniel", "Ernest"],
    },
    waiters: {
      monday: [],
      tuesday: ["Roy", "Herbert", "Jacob", "Tom", "Elmer", "Carl", "Lee"],
      wednesday: ["Peter", "Benjamin", "Frederick", "Willie", "Alfred", "Sam"],
      thursday: ["Will", "Jesse", "Oscar", "Lewis"],
      friday: [
        "Herman",
        "Jim",
        "Francis",
        "Harvey",
        "Earl",
        "Eugene",
        "Ralph",
        "Ed",
      ],
    },
  };
  beforeAll(async () => {
    // Mock the injection of the userService into the controller
    mockStaffService = {
      getTypeOfStaff: jest.fn().mockResolvedValue({
        monday: ["John", "William", "James", "Charles"],
        tuesday: ["George", "Frank", "Joseph"],
        wednesday: ["Thomas", "Henry", "Robert", "Edward", "Harry", "Walter"],
        thursday: ["Albert", "Samuel", "David", "Louis", "Joe", "Charlie"],
        friday: ["Clarence", "Richard", "Andrew", "Daniel", "Ernest"],
      }),
      getStaff: jest.fn().mockResolvedValue(STAFF),
    };

    // Register the mockUserService instead of the actual userService
    fastify.register(staffRoutes, {
      staffService: mockStaffService,
      prefix: "/api/v1",
    });
    await fastify.ready();
  });
  afterAll(async () => {
    await fastify.close();
  });
  test("default route", async () => {
    const res = await fastify.inject({
      url: "/api/v1/",
    });
    expect(res.json()).toEqual({ hello: "world" });
  });
  test("Get success staff", async () => {
    const res = await fastify.inject({
      url: "/api/v1/staff",
    });
    expect(res.json()).toEqual(STAFF);
    expect(res.statusCode).toBe(200);
  });
});
