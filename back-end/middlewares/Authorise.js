import getTokenFromHeader from "../utils/getTokenFromHeader"
import verifyToken from "../utils/verifyToken"

const Authorise = (req, res, next) => {
    // get token from header
    const token = getTokenFromHeader(req)

    // verify token
    const decoded = verifyToken(token)

    // save the user token in req object
    req.userAuth = decoded.id
    if (!decoded) {
        return res.status(501).json("Invalid/Expired token, Please login again!")
    }
    else {
        next()
    }
}

module.exports = Authorise