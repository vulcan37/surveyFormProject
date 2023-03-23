const User = require("../models/User")
const bcrypt = require("bcryptjs")
const generateToken = require("../utils/generateToken")


const signinCtrl = async (req, res) => {
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
}

module.exports = signinCtrl