const Staff = require("../../../src/core/entities/Staff");

describe("Entity Staff", () => {
  test("Create a new Staff entify", () => {
    const waiters = {
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
    };
    const cooks = {
      monday: ["John", "William", "James", "Charles"],
      tuesday: ["George", "Frank", "Joseph"],
      wednesday: ["Thomas", "Henry", "Robert", "Edward", "Harry", "Walter"],
      thursday: ["Albert", "Samuel", "David", "Louis", "Joe", "Charlie"],
      friday: ["Clarence", "Richard", "Andrew", "Daniel", "Ernest"],
    };

    const staff = new Staff(waiters, cooks);
    expect(staff).toMatchObject({ waiters, cooks });
  });
});
