class StaffRepository {
  constructor(database) {
    this.database = database;
  }
  get collection() {
    return this.database.collection("staff");
  }

  getStaff() {
    return this.collection.findOne();
  }

  deleteAll() {
    return this.collection.deleteMany();
  }

  insertOne(staff) {
    return this.collection.insertOne(staff);
  }

  insertMany(staffs) {
    return this.collection.inserMany(staffs);
  }
}

module.exports = StaffRepository;
