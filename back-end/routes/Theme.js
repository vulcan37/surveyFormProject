const express = require('express')
const themeRouter = express.Router()

const {
  createTheme,
  getTheme,
  updateTheme,
  deleteTheme
} = require('../controllers/Themes')

themeRouter.route('/').post(createTheme)
themeRouter.route('/:id').get(getTheme).patch(updateTheme).delete(deleteTheme)
module.exports = themeRouter;
