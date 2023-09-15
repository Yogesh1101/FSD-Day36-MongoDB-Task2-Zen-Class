// 6. Find the number of users who are absent and task is not submitted between
//    15 oct-2020 and 31 oct-2020

// Query

db.users.aggregate([
  {
    $lookup: {
      from: "attendance",
      localField: "_id",
      foreignField: "userID",
      as: "attendance_info",
    },
  },
  {
    $lookup: {
      from: "tasks",
      localField: "_id",
      foreignField: "userID",
      as: "tasks_info",
    },
  },
  {
    $match: {
      "attendance_info.status": "Absent",
      "tasks_info.date": {
        $not: { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") },
      },
    },
  },
]);

// OUTPUT

[
  {
    _id: 2,
    userName: "Thiyanesh",
    userEmail: "thiyanesh@gmail.com",
    attendance_info: [
      {
        _id: ObjectId("65040e6b73ed9405ff6f1ff3"),
        userID: 2,
        date: ISODate("2020-10-28T00:00:00Z"),
        status: "Absent",
      },
      {
        _id: ObjectId("65040e6b73ed9405ff6f2011"),
        userID: 2,
        date: ISODate("2020-10-31T00:00:00Z"),
        status: "Absent",
      },
    ],
    tasks_info: [],
  },
  {
    _id: 3,
    userName: "Sharvesh",
    userEmail: "sharvesh@gmail.com",
    attendance_info: [
      {
        _id: ObjectId("65040e6b73ed9405ff6f1fd6"),
        userID: 3,
        date: ISODate("2020-10-22T00:00:00Z"),
        status: "Absent",
      },
      {
        _id: ObjectId("65040e6b73ed9405ff6f2008"),
        userID: 3,
        date: ISODate("2020-10-30T00:00:00Z"),
        status: "Absent",
      },
    ],
    tasks_info: [],
  },
  {
    _id: 4,
    userName: "Vishnu",
    userEmail: "vishnu@gmail.com",
    attendance_info: [
      {
        _id: ObjectId("65040e6b73ed9405ff6f2027"),
        userID: 4,
        date: ISODate("2020-11-02T00:00:00Z"),
        status: "Absent",
      },
    ],
    tasks_info: [],
  },
  {
    _id: 5,
    userName: "Suntosh",
    userEmail: "suntosh@gmail.com",
    attendance_info: [
      {
        _id: ObjectId("65040e6b73ed9405ff6f1fec"),
        userID: 5,
        date: ISODate("2020-10-27T00:00:00Z"),
        status: "Absent",
      },
    ],
    tasks_info: [],
  },
  {
    _id: 7,
    userName: "Venkat",
    userEmail: "venkat@gmail.com",
    attendance_info: [
      {
        _id: ObjectId("65040e6b73ed9405ff6f1fd0"),
        userID: 7,
        date: ISODate("2020-10-21T00:00:00Z"),
        status: "Absent",
      },
      {
        _id: ObjectId("65040e6b73ed9405ff6f1fee"),
        userID: 7,
        date: ISODate("2020-10-27T00:00:00Z"),
        status: "Absent",
      },
      {
        _id: ObjectId("65040e6b73ed9405ff6f1ff8"),
        userID: 7,
        date: ISODate("2020-10-28T00:00:00Z"),
        status: "Absent",
      },
      {
        _id: ObjectId("65040e6b73ed9405ff6f2020"),
        userID: 7,
        date: ISODate("2020-11-01T00:00:00Z"),
        status: "Absent",
      },
    ],
    tasks_info: [],
  },
  {
    _id: 9,
    userName: "Prasanth",
    userEmail: "prasanth@gmail.com",
    attendance_info: [
      {
        _id: ObjectId("65040e6b73ed9405ff6f1fdc"),
        userID: 9,
        date: ISODate("2020-10-22T00:00:00Z"),
        status: "Absent",
      },
      {
        _id: ObjectId("65040e6b73ed9405ff6f2022"),
        userID: 9,
        date: ISODate("2020-11-01T00:00:00Z"),
        status: "Absent",
      },
    ],
    tasks_info: [],
  },
  {
    _id: 10,
    userName: "Sasi",
    userEmail: "sasi@gmail.com",
    attendance_info: [
      {
        _id: ObjectId("65040e6b73ed9405ff6f1fd3"),
        userID: 10,
        date: ISODate("2020-10-21T00:00:00Z"),
        status: "Absent",
      },
      {
        _id: ObjectId("65040e6b73ed9405ff6f200f"),
        userID: 10,
        date: ISODate("2020-10-30T00:00:00Z"),
        status: "Absent",
      },
      {
        _id: ObjectId("65040e6b73ed9405ff6f2019"),
        userID: 10,
        date: ISODate("2020-10-31T00:00:00Z"),
        status: "Absent",
      },
    ],
    tasks_info: [],
  },
];
