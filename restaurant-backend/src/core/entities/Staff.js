class Staff {
  constructor(waiters, cooks) {
    this.waiters = waiters;
    this.cooks = cooks;
    this.validate(this.cooks);
    this.validate(this.waiters);
  }

  validate(employees) {
    const allArrayType = Object.values(employees).every((employee) =>
      Array.isArray(employee)
    );
    if (
      typeof employees !== "object" &&
      Object.keys(this.cooks).length < 5 &&
      !allArrayType
    ) {
      throw new Error("Validation errof");
    }
  }
}

module.exports = Staff;
