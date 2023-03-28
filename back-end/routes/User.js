const express = require("express")
const router = express.Router()
const registerCtrl = require("../controllers/registerCtrl")
const signinCtrl = require("../controllers/signinCtrl")
const logoutCtrl = require("../controllers/logoutCtrl")


// register user endpoint
router.post("/register", registerCtrl)

// signin user endpoint
router.post("/signin", signinCtrl)


module.exports = router