export default function JobDescription({ setJD }) {

  return (

    <div className="card">

      <h3>Job Description</h3>

      <textarea
        placeholder="Paste job description here"
          style={{ width: "95%", height: "150px" }}
        onChange={(e) => setJD(e.target.value)}
      />

    </div>

  )

}