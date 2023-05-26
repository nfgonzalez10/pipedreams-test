class StaffRepository {
  constructor(database) {
    this.database = database;
    console.log(
      "🚀 ~ file: StaffRepository.js:4 ~ StaffRepository ~ constructor ~ database:",
      database
    );
  }
  get collection() {
    return this.database.collection("staff");
  }

  getStaff() {
    return this.collection.find();
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
