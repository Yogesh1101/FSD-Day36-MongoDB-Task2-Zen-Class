// 2. Find all the company drives which appeared between 15 oct-2020 and 31 oct-2020

// Query

db.companyDrives.find({
  date: { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") },
});

// OUTPUT

[
  {
    _id: 1,
    name: "Google",
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: 2,
    name: "Amazon",
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: 3,
    name: "Guvi",
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: 4,
    name: "Zoho",
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: 5,
    name: "TCS",
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: 6,
    name: "Wipro",
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: 7,
    name: "IppoPay",
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
];
