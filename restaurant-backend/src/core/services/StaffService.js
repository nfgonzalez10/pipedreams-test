const Staff = require("../entities/Staff");

class StaffService {
  constructor(staffRepository) {
    this.staffRepository = staffRepository;
  }
  async getStaff() {
    const { cooks, waiters } = await this.staffRepository.getStaff();
    return { cooks, waiters };
  }
  #formatDay(day) {
    return String(day).toLowerCase();
  }
  async getTypeOfStaff(type = "cookers") {
    const staff = await this.getStaff();
    if (!staff) {
      throw new Error("Staff is empty");
    }
    return staff[type];
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
