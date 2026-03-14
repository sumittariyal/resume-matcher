# Resume Matcher

Resume Matcher is a web application that compares a **resume with a job description** and calculates a **match score based on relevant skills**.
This helps candidates understand how well their resume fits a particular job role.

---

## 🚀 Features

* Upload or paste resume text
* Add job description
* Extract relevant skills
* Calculate **resume-job match score**
* Simple and responsive UI
* Fast backend processing using Node.js

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* CORS

---

## 📂 Project Structure

```
resume-matcher
│
├── resume-matcher-frontend
│   └── src
│       ├── components
│       │   ├── ResumeUpload.js
│       │   ├── JobDescription.js
│       │   └── MatchButton.js
│       └── App.js
│
├── resume-matcher-backend
│   ├── routes
│   │   └── matchRoute.js
│   ├── controllers
│   │   └── matchController.js
│   ├── skills.js
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/sumittariyal/resume-matcher.git
```

---

### 2️⃣ Install backend dependencies

```
cd resume-matcher-backend
npm install
```

---

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

```
{
  "resume": "JavaScript React Node MongoDB",
  "jobDescription": "Looking for a developer with React and Node experience"
}
```

---

## ⚙️ How Matching Works

1. User enters resume text and job description.
2. Backend extracts skills from both inputs.
3. Skills are compared with the predefined list in **skills.js**.
4. A **match score** is calculated based on common skills.

---

## 📌 Future Improvements

* Resume PDF upload
* NLP based skill extraction
* AI-based resume recommendations
* Improved matching algorithm

---

## 👨‍💻 Author

**Sumit Tariyal**

---

## ⭐ Support

If you like this project, give it a **star ⭐ on GitHub**.
