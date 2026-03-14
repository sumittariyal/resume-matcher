function matchSkills(resumeSkills, jdSkills) {

  const matched = jdSkills.filter(skill =>
    resumeSkills.includes(skill)
  )

  const score = jdSkills.length
    ? ((matched.length / jdSkills.length) * 100).toFixed(2)
    : 0

  const skillsAnalysis = jdSkills.map(skill => ({
    skill,
    presentInResume: resumeSkills.includes(skill)
  }))

  return {
    score,
    skillsAnalysis
  }

}

module.exports = matchSkills