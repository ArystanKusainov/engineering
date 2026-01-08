const students = [];

for (let i = 1; i <= 120; i++) {
  students.push({
    id: i - 1,
    name: `Student ${i}`,
    photo: `https://i.pravatar.cc/150?img=${i}`,
    robotics: Math.ceil(Math.random() * 10),
    "3dmodeling": Math.ceil(Math.random() * 10),
    programming: Math.ceil(Math.random() * 10),
    arduino: Math.ceil(Math.random() * 10),
    electronics: Math.ceil(Math.random() * 10),
    certificates: [],
    achievements: []
  });
}

// Auto-calculate total score
students.forEach(s => {
  s.total = s.robotics + s.programming + s.electronics + (s["3dmodeling"] || 0) + (s.arduino || 0);

  // Add sample certificates for some students (every 8th student)
  if (s.id % 8 === 0) {
    const today = new Date().toISOString().slice(0,10);
    s.certificates.push({ title: 'Intro to Robotics', url: `https://example.com/certs/robotics-${s.id}.pdf`, date: today });
  }
  if (s.id % 12 === 0) {
    const today = new Date().toISOString().slice(0,10);
    s.certificates.push({ title: 'Electronics Basics', url: `https://example.com/certs/electronics-${s.id}.pdf`, date: today });
  }

  // Add sample achievements for some students
  if (s.id % 5 === 0) s.achievements.push('Hackathon Winner');
  if (s.id % 7 === 0) s.achievements.push('Community Mentor');
  if (s.id % 11 === 0) s.achievements.push('Course Excellence');
});
