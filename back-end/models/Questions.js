const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questions: {
      type: String,
    },
    option: {
      type: Array,
    },
    response: {
      type: Array,
    },
  },
  { timestamps: true }
);

const questionModel = mongoose.model("questions", questionSchema);
module.exports = questionModel;
