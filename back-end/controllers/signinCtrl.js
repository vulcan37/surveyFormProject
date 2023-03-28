const User = require("../models/User")
const bcrypt = require("bcryptjs")
const generateToken = require("../utils/generateToken")


const signinCtrl = async (req, res) => {
    const { email, password } = req.body
    try {
        // check if email exist
        const userFound = await User.findOne({ email })
        if (!userFound) {
            return res.status(400).json({ error: "Invalid login credentials" })
        }
        // console.log(userFound);
        // verify password
        const isPasswordMatched = await bcrypt.compare(password, userFound.password)

        if (!isPasswordMatched) {
            return res.status(400).json({ error: "Invalid login credentials" })
        }
        // generate token
        const token = generateToken(userFound._id);
        // save token to user document
        userFound.token = token;
        await userFound.save();
        res.status(200).json({
            status: 'Success',
            data: {
                userId: userFound._id,
                name: userFound.name,
                email: userFound.email,
                token
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

module.exports = signinCtrl