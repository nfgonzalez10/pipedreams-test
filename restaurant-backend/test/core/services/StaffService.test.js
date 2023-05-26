const StaffRepository = require("../../../src/core/repositories/StaffRepository");
const StaffService = require("../../../src/core/services/StaffService");

describe("StaffService", () => {
  let staffService;
  let staffRepository;

  beforeEach(() => {
    // Create a mock/stub for the staff repository
    staffRepository = new StaffRepository();
    staffService = new StaffService(staffRepository);
  });

  afterEach(() => {
    // Reset the mock/stub after each test
    jest.clearAllMocks();
  });

  describe("addStaff", () => {
    test("should add staff successfully", async () => {
      // Mock the repository method
      staffRepository.insertOne = jest.fn().mockResolvedValue();

      // Test data
      const waiters = ["Waiter 1", "Waiter 2"];
      const cooks = ["Cook 1", "Cook 2"];

      // Call the service method
      await staffService.addStaff(waiters, cooks);

      // Check if the repository method was called with the correct data
      expect(staffRepository.insertOne).toHaveBeenCalledWith(
        expect.objectContaining({
          waiters,
          cooks,
        })
      );
    });
  });

  describe("getWaiters", () => {
    test("Should retorn all the days for waiters", async () => {
      staffRepository.getStaff = jest.fn().mockReturnValue({
        waiters: {
          monday: ["el"],
          tuesday: ["al"],
          wednesday: ["2"],
          thursday: [""],
          friday: [],
        },
        cooks: {
          monday: [""],
          tuesday: [],
          wednesday: ["er"],
          thursday: [],
          friday: [],
        },
      });

      const waiters = await staffService.waiters;
      expect(waiters).toEqual({
        monday: ["el"],
        tuesday: ["al"],
        wednesday: ["2"],
        thursday: [""],
        friday: [],
      });
    });
  });

  describe("getWaitersByDay", () => {
    test("should return waiters working on a specific day", async () => {
      // Mock the repository method
      staffRepository.getStaff = jest.fn().mockReturnValue({
        waiters: {
          monday: ["el"],
          tuesday: ["al"],
          wednesday: ["2"],
          thursday: [""],
          friday: [],
        },
        cooks: {
          monday: [""],
          tuesday: [],
          wednesday: ["er"],
          thursday: [],
          friday: [],
        },
      });

      // Call the service method
      const result = await staffService.getWaitersByDay("monday");
      const upperCaseResult = await staffService.getWaitersByDay("MONDAY");

      // Check the result
      expect(result).toEqual(["el"]);
      expect(upperCaseResult).toEqual(["el"]);
    });

    test("should return an empty array if no waiters work on the specific day", async () => {
      // Mock the repository method
      staffRepository.getStaff = jest.fn().mockReturnValue({
        waiters: {
          monday: ["el"],
          tuesday: ["al"],
          wednesday: ["2"],
          thursday: [""],
          friday: [],
        },
        cooks: {
          monday: [""],
          tuesday: [],
          wednesday: ["er"],
          thursday: [],
          friday: [],
        },
      });

      // Call the service method
      const result = await staffService.getWaitersByDay("sunday");

      // Check the result
      expect(result).toEqual([]);
    });
  });
});
