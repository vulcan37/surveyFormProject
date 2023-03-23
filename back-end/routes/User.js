const express = require("express")
const router = express.Router()
const registerCtrl = require("../controllers/registerCtrl")
const signinCtrl = require("../controllers/signinCtrl")


// register user endpoint
router.post("/register", registerCtrl)

// signin user endpoint
router.post("/signin", signinCtrl)

module.exports = router