const pdf = require("pdf-parse")

const extractSkills = require("../utils/extractSkills")
const extractSalary = require("../utils/extractSalary")
const extractExperience = require("../utils/extractExperience")
const matchSkills = require("../utils/matchSkills")

exports.matchResume = async (req,res)=>{

  try{

    const jd = req.body.jd

    const pdfData = await pdf(req.file.buffer)

    const resumeText = pdfData.text

    const resumeSkills = extractSkills(resumeText)
    const jdSkills = extractSkills(jd)

    const salary = extractSalary(jd)
    const experience = extractExperience(jd)

    const { score, skillsAnalysis } =
      matchSkills(resumeSkills, jdSkills)

    res.json({
      salary,
      yearOfExperience: experience,
      resumeSkills,
      skillsAnalysis,
      matchingScore: score
    })

  }catch(err){

    console.log(err)
    res.status(500).send("Error processing resume")

  }

}