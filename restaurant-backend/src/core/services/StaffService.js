const Staff = require("../entities/Staff");

class StaffService {
  constructor(staffRepository) {
    this.staffRepository = staffRepository;
  }
  get staff() {
    return this.staffRepository.getStaff();
  }
  #formatDay(day) {
    return String(day).toLowerCase();
  }
  async getTypeOfStaff(type = "cookers") {
    const staff = await this.staff;
    if (!staff) {
      throw new Error("Staff is empty");
    }
    return this.staff[type];
  }
  get cookers() {
    return this.getTypeOfStaff("cookers");
  }

  get waiters() {
    return this.getTypeOfStaff("waiters");
  }
  async getCookersByDay(day) {
    day = this.#formatDay(day);
    const cookers = await this.cookers;
    return cookers[day] ?? [];
  }

  async getWaitersByDay(day) {
    day = this.#formatDay(day);
    const waiters = await this.waiters;
    return waiters[day] ?? [];
  }

  addStaff(waiters, cooks) {
    const staff = new Staff(waiters, cooks);
    return this.staffRepository.insertOne(staff);
  }

  deleteStaff() {
    return this.staffRepository.deleteAll();
  }
}

module.exports = StaffService;
