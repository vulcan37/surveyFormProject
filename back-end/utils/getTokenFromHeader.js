const getTokenFromHeader = req => {
    const headerObj = req.headers
    const authHeader = headerObj.authorization

    if (authHeader && authHeader.split(" ")[0] === "Bearer") {
        const token = authHeader.split(" ")[1]
        return token
    }
    else {
        return false
    }
}

module.exports = getTokenFromHeader
