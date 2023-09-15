// 5. Find all the mentors with who has the mentee's count more than 15

// Query

db.mentors.aggregate([
  {
    $lookup: {
      from: "mentees",
      localField: "_id",
      foreignField: "mentorID",
      as: "mentees_info",
    },
  },
  {
    $group: {
      _id: "$_id",
      mentorName: { $first: "$mentorName" },
      menteeCount: { $sum: 1 },
    },
  },
  { $match: { menteeCount: { $gte: 15 } } },
]);

// OUTPUT NULL
// Because the number of mentor is 2 and the total count of student is 10 only.
// If we reduce the menteeCount to 5 and the output displays two mentor -
// Because i have assigned both mentor equally students (5).
