const logoutCtrl = async (req, res) => {
    try {
        // get token from header
        const userId = req.headers['userId']
        console.log(userId);
        const token = req.headers['Authorization'].split(" ")[1]
        console.log(token);
        res.status(200).json('Successfully logged out')
    } catch (error) {
        console.log(error);
    }
}

module.exports = logoutCtrl