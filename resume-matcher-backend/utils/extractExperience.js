function extractExperience(text) {

  const regex = /(\d+)\+?\s*(years?|yrs?)/i

  const match = text.match(regex)

  return match ? parseInt(match[1]) : 0
}

module.exports = extractExperience