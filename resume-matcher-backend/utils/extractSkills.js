const skillsDB = require("../skills")

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function extractSkills(text) {

  const lowerText = text.toLowerCase()
  const foundSkills = []

  skillsDB.forEach(skill => {

    const safeSkill = escapeRegex(skill)

    const regex = new RegExp(`\\b${safeSkill}\\b`, "i")

    if (regex.test(lowerText)) {
      foundSkills.push(skill)
    }

  })

  return [...new Set(foundSkills)]
}

module.exports = extractSkills