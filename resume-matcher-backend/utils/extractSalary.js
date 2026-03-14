function extractSalary(text){

  // salary with currency or units
  const currencyRegex = /(?:₹|\$)\s?\d{1,3}(?:,\d{3})*(?:\.\d+)?(?:\s*(?:-|–|to)\s*(?:₹|\$)?\s?\d{1,3}(?:,\d{3})*(?:\.\d+)?)?|\d+\s*(?:LPA|USD|K|k|M)/i

  // numeric salary ranges (like 61087 - 104364)
  const rangeRegex = /\b\d{4,6}\s*[-–]\s*\d{4,6}\b/

  // check currency salary first
  let match = text.match(currencyRegex)

  if(!match){
    match = text.match(rangeRegex)
  }

  return match ? match[0] : null

}

module.exports = extractSalary