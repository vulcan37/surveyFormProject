const jwt = require("jsonwebtoken")
const verifyToken = token => {
    return jwt.verify(token, process.JWT_KEY, (err, decoded) => {
        if (err) {
            return false
        }
        return decoded
    })
}

module.exports = verifyToken