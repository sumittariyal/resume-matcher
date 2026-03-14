import { useState } from "react"
import axios from "axios"

import ResumeUpload from "./components/ResumeUpload"
import JobDescription from "./components/JobDescription"
import MatchButton from "./components/MatchButton"

import "./App.css"

function App() {

  const [resumeFile, setResumeFile] = useState(null)
  const [jd, setJD] = useState("")
  const [result, setResult] = useState(null)

  const handleSubmit = async () => {

    if (!resumeFile || !jd) {
      alert("Please upload resume and enter job description")
      return
    }

    const formData = new FormData()
    formData.append("resume", resumeFile)
    formData.append("jd", jd)

    try {

      const response = await axios.post(
        "http://localhost:5000/api/match",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      )

      console.log(response.data)

      setResult(response.data)

    } catch (error) {

      console.error("Error:", error)
      alert("Error connecting to backend")

    }

  }

  return (

    <div className="container">

      <h1 style={{ textAlign: "center" }}>Resume Job Matching System</h1>

      <ResumeUpload setResumeFile={setResumeFile} />

      <JobDescription setJD={setJD} />

      <MatchButton handleSubmit={handleSubmit} />

      {result && (

        <div className="result">

          <h2>Matching Score: {result.matchingScore}%</h2>

          <p>
  <b>Salary:</b>{" "}
  {result.salary && /₹|\$|USD|LPA|K|M/i.test(result.salary)
    ? result.salary
    : `$${result.salary}`}
</p>

          <p><b>Experience:</b> {result.yearOfExperience} years</p>

          <h3>Resume Skills</h3>

          <div className="skills-card">
            {result.resumeSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))}
          </div>

          <h3>Skills Analysis</h3>

          <div className="analysis-grid">
            {result.skillsAnalysis.map((item, index) => (
              <div className="analysis-card" key={index}>

                <span className="skill-name">
                  {item.skill}
                </span>

                <span
                  className={
                    item.presentInResume
                      ? "status present"
                      : "status missing"
                  }
                >
                  {item.presentInResume ? "✔ Present" : "✖ Missing"}
                </span>

              </div>
            ))}
          </div>

        </div>

      )}

    </div>

  )

}

export default App