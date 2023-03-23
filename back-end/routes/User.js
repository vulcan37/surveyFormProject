const express = require("express")
const User = require("../models/User")
const router = express.Router()
const bcrypt = require("bcryptjs")
const generateToken = require("../utils/generateToken")


// register user
router.post("/register", async (req, res) => {
    const { name, username, email, phone, password, profession } = req.body
    try {
        // check if email exist
        const userFound = await User.findOne({ email })
        if (userFound) {
            return res.json("User Already Exist")
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create the user
        const user = await User.create({
            name,
            username,
            email,
            phone,
            password: hashedPassword,
            profession
        })

        res.json({
            status: 'success',
            data: user
        })

    } catch (error) {
        res.json(error.message)
    }
})

// signin user
router.post("/signin", async (req, res) => {
    const { email, password } = req.body
    try {
        // check if email exist
        const userFound = await User.findOne({ email })
        if (!userFound) {
            return res.json("Invalid login credentials")
        }
        // console.log(userFound);
        // verify password
        const isPasswordMatched = await bcrypt.compare(password, userFound.password)

        if (!isPasswordMatched) {
            return res.json("Invalid login credentials")
        }
        res.json({
            status: 'Success',
            data: {
                name: userFound.name,
                email: userFound.email,
                token: generateToken(userFound._id)
            }
        })
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = router