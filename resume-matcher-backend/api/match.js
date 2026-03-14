export default async function handler(req, res) {

  if (req.method === "POST") {

    const { jd } = req.body

    // Example response
    res.status(200).json({
      matchingScore: 80,
      salary: "10 LPA",
      yearOfExperience: 2,
      resumeSkills: ["JavaScript", "React", "Node.js"],
      skillsAnalysis: [
        { skill: "JavaScript", presentInResume: true },
        { skill: "Python", presentInResume: false }
      ]
    })

  } else {
    res.status(405).json({ message: "Method not allowed" })
  }

}