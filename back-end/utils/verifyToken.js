const jwt = require("jsonwebtoken")

const verifyToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_KEY)
    return decoded
  } catch (err) {
    return false
  }
}

module.exports = verifyToken
