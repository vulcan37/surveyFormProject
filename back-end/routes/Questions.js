const express = require("express");
const router = express.Router();
const questionModel = require("../models/Questions");

router.post("/questions", async (req, res) => {
  console.log(req.body);
  const questions = req.body.questions;
  const option = req.body.option;
  const response = req.body.answers;

  const data = await questionModel.create({
    questions: questions,
    option: option,
    response: response,
  });
  //console.log(data)
  res.json({
    status: "successful",
    message: "questions added",
    // data: data,
  });
});

router.get("/getquestions", async (req, res) => {
  const query = req.body.id;
  console.log(query);
  const questions = await questionModel.findOne({ question_id: query });
  console.log(questions);
  res.json({
    questions: questions,
  });
});

module.exports = router;
