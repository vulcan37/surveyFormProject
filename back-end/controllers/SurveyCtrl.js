const surveyModel = require("../models/Survey");

const createSurvey = async (req, res) => {
  const { name, startDate, endDate, description, typeOfSurvey, criteria, img } =
    req.body;
  try {
    const survey = await surveyModel.create({
      name: name,
      startDate: startDate,
      endDate: endDate,
      description: description,
      typeOfSurvey: typeOfSurvey,
      criteria: criteria,
      image: img,
    });
    res.status(200).json({
      status: "Success",
      data: survey,
      message: "Data Save Successfully!",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getSurveyList = async (req, res) => {
  try {
    const list = await surveyModel.find({});

    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

const getToUpdateSurvey = async (req, res) => {
  try {
    const list = await surveyModel.findOne({ _id: req.body.id });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

const surveyDelete = async (req, res) => {
  try {
    const del = await surveyModel.findOneAndDelete({ _id: req.body.id });
    console.log(del);
    res.json({
      message: "Record Deleted Succesfully !",
    });
  } catch (error) {
    res.json({ message: "Unable to delete data !" });
  }
};

const updateSurvey = async (req, res) => {
  try {
    const updatedSurvey = req.body;
    const survey = await surveyModel.findOne({ _id: updatedSurvey.id });
    survey.name = updatedSurvey.name;
    survey.startDate = updatedSurvey.startDate;
    survey.endDate = updatedSurvey.endDate;
    survey.description = updatedSurvey.description;
    survey.typeOfSurvey = updatedSurvey.typeOfSurvey;
    survey.critera = updatedSurvey.criteria;
    await survey.save();

    res
      .status(200)
      .json({ status: "Success", message: "Successfully Updated!", survey });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  createSurvey,
  getSurveyList,
  surveyDelete,
  updateSurvey,
  getToUpdateSurvey,
};
