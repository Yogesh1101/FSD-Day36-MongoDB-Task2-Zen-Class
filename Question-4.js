// 4. Find the number of problems solved by the user in codekata

// Query

db.codekata.aggregate([
  {
    $group: {
      _id: "$userID",
      totalProblemsSolved: { $sum: "$problemsSolved" },
    },
  },
]);

// OUTPUT

[
  { _id: 10, totalProblemsSolved: 30 },
  { _id: 1, totalProblemsSolved: 50 },
  { _id: 4, totalProblemsSolved: 18 },
  { _id: 3, totalProblemsSolved: 10 },
  { _id: 2, totalProblemsSolved: 48 },
  { _id: 6, totalProblemsSolved: 45 },
  { _id: 9, totalProblemsSolved: 25 },
  { _id: 7, totalProblemsSolved: 36 },
  { _id: 8, totalProblemsSolved: 11 },
  { _id: 5, totalProblemsSolved: 35 },
];
