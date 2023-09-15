// 1. Find all the topics and tasks which are thought in the month of October

// Query

db.tasks.find({
  date: { $gte: ISODate("2020-10-01"), $lte: ISODate("2020-10-31") },
});

// OUTPUT

[
  {
    _id: {
      $oid: "65040e8573ed9405ff6f202e",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f202f",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2030",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2031",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2032",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2033",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2034",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2035",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2036",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2037",
    },
    name: "HTML",
    topicID: 1,
    date: {
      $date: "2020-10-21T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2038",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2039",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f203a",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f203b",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f203c",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f203d",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f203e",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f203f",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2040",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2041",
    },
    name: "CSS",
    topicID: 2,
    date: {
      $date: "2020-10-22T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2042",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2043",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2044",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2045",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2046",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2047",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2048",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2049",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f204a",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f204b",
    },
    name: "JavaScript",
    topicID: 3,
    date: {
      $date: "2020-10-25T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f204c",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f204d",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f204e",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f204f",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2050",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2051",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2052",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2053",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2054",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2055",
    },
    name: "Bootstrapp",
    topicID: 4,
    date: {
      $date: "2020-10-27T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2056",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2057",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2058",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2059",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f205a",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f205b",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f205c",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f205d",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f205e",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f205f",
    },
    name: "MUI",
    topicID: 5,
    date: {
      $date: "2020-10-28T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2060",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2061",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2062",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2063",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2064",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2065",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2066",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2067",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2068",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2069",
    },
    name: "React.js",
    topicID: 6,
    date: {
      $date: "2020-10-29T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f206a",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f206b",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f206c",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f206d",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f206e",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f206f",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2070",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2071",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2072",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2073",
    },
    name: "MongoDB",
    topicID: 7,
    date: {
      $date: "2020-10-30T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2074",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2075",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2076",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2077",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2078",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f2079",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f207a",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f207b",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f207c",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "65040e8573ed9405ff6f207d",
    },
    name: "Node.js",
    topicID: 8,
    date: {
      $date: "2020-10-31T00:00:00.000Z",
    },
  },
];
