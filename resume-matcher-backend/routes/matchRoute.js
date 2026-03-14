const express = require("express")
const multer = require("multer")

const { matchResume } = require("../controllers/matchController")

const router = express.Router()

const upload = multer({ storage: multer.memoryStorage() })

router.post("/match", upload.single("resume"), matchResume)

module.exports = router