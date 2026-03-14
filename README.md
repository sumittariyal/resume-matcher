# Resume Matcher

A web application that analyzes a resume against a job description and calculates a **match score** based on relevant skills.
The project helps candidates quickly understand how well their resume fits a specific job role.

---

## 🚀 Features

* Upload or paste resume text
* Add job description
* Extract and compare skills
* Calculate **resume-job match score**
* Simple and responsive UI
* Fast backend processing

---

## 🛠 Tech Stack

**Frontend**

* React.js
* Axios
* CSS

**Backend**

* Node.js
* Express.js
* CORS

**Processing**

* Python (for resume-job matching logic)

---

## 📂 Project Structure

```
resume-matcher
│
├── resume-matcher-frontend
│   ├── src
│   │   ├── components
│   │   │   ├── ResumeUpload.js
│   │   │   ├── JobDescription.js
│   │   │   └── MatchButton.js
│   │   └── App.js
│
├── resume-matcher-backend
│   ├── routes
│   │   └── matchRoute.js
│   ├── controllers
│   │   └── matchController.js
│   ├── python
│   │   └── matcher.py
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/resume-matcher.git
```

### 2️⃣ Install backend dependencies

```
cd resume-matcher-backend
npm install
```

### 3️⃣ Install frontend dependencies

```
cd resume-matcher-frontend
npm install
```

---

## ▶️ Run the Project

### Start Backend

```
cd resume-matcher-backend
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### Start Frontend

```
cd resume-matcher-frontend
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoint

**POST**

```
/api/match
```

Example request:

```json
{
  "resume": "JavaScript Node React MongoDB",
  "jobDescription": "Looking for a developer with Node and React experience"
}
```

Example response:

```
Match Score: 75%
```

---

## 🌐 Deployment

Frontend and backend can be deployed using:

* Vercel
* Netlify
* Render

Example flow:

```
React Frontend → API Request → Node.js Backend → Python Matching Script → Response
```

---

## 📸 Future Improvements

* Resume PDF parsing
* NLP based skill extraction
* Better similarity scoring
* Authentication system
* Job recommendation system

---

## 👨‍💻 Author

**Sumit Tariyal**

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
