export default function ResumeUpload({ setResumeFile }) {

  return (

    <div className="card">

      <label>Upload Resume (PDF)</label>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setResumeFile(e.target.files[0])}
      />

    </div>

  )

}