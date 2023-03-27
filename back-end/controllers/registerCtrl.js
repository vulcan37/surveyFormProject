const User = require("../models/User")
const bcrypt = require("bcryptjs")

const registerCtrl = async (req, res) => {
    const { name, email, phone, password, profession } = req.body
    try {
        // check if email exist
        const userFound = await User.findOne({ email })
        if (userFound) {
            return res.status(400).json("User Already Exist")
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create the user
        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
            profession
        })

        res.status(200).json({
            status: 'success',
            data: user
        })

    } catch (error) {
        // console.log(error.message.split(":")[2].trim());
        res.status(400).json(error)
    }
}

module.exports = registerCtrl