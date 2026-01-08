const students = [];

for (let i = 1; i <= 120; i++) {
  students.push({
    id: i - 1,
    name: `Student ${i}`,
    photo: `https://i.pravatar.cc/150?img=${i}`,
    robotics: Math.ceil(Math.random() * 10),
    programming: Math.ceil(Math.random() * 10),
    electronics: Math.ceil(Math.random() * 10),
    badges: []
  });
}

// Auto-calculate total score
students.forEach(s => {
  s.total = s.robotics + s.programming + s.electronics;

  // Auto badges
  if (s.total >= 25) s.badges.push("Top Performer");
  if (s.programming >= 9) s.badges.push("Code Master");
  if (s.robotics >= 9) s.badges.push("Robotics Star");
});
