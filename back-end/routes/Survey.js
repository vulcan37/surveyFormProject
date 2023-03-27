const express = require("express");
const {
  getSurveyList,
  createSurvey,
  surveyDelete,
  updateSurvey,
  getToUpdateSurvey,
} = require("../controllers/SurveyCtrl");
const router = express.Router();

router.get("/list", getSurveyList);
router.post("/createsurvey", createSurvey);
router.post("/delete", surveyDelete);
router.post("/update", updateSurvey);
router.post("/listupdate", getToUpdateSurvey);

module.exports = router;
