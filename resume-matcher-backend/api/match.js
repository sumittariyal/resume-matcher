export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const matchingScore = Math.floor(Math.random() * 100)

  res.status(200).json({
    matchingScore: matchingScore,
    salary: "12 LPA",
    yearOfExperience: 2,
    resumeSkills: ["JavaScript", "React", "Node.js"],
    skillsAnalysis: [
      { skill: "JavaScript", presentInResume: true },
      { skill: "React", presentInResume: true },
      { skill: "Python", presentInResume: false }
    ]
  })

}