const User = require("../models/User")
const bcrypt = require("bcryptjs")

const registerCtrl = async (req, res) => {
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
}

module.exports = registerCtrl