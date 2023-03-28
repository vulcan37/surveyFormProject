const User = require("../models/User");

const logoutCtrl = async (req, res) => {
    try {
      // get token from header
      const userId = req.headers.userId;
      const token = req.headers.authorization.split(" ")[1];
  
      // Find user with userId and delete token
      // pull operator will remove the token
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { token: { token } } }
      );
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json("Successfully logged out");
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  module.exports = logoutCtrl 