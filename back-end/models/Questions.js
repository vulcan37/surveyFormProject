const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questions: {
      type: Array,
    },
    option: {
      type: Array,
    },
    correct: {
      type: String,
    },
  },
  { timestamps: true }
);

const questionModel = mongoose.model("qustions", questionSchema);
module.exports = questionModel;
