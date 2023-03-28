const mongoose = require('mongoose');
const themeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['light', 'dark'],
    default: 'light'
  },
  formType: {
    type: String,
    enum: ['one-one', 'single-page', 'multi-page'],
    default: 'single-page'
  },
  allQuestionsMandatory: {
    type: Boolean,
    default: false
  },
  showSkipButton: {
    type: Boolean,
    default: true
  },
  optionType: {
    type: String,
    enum: ['radio', 'checkbox'],
    default: 'radio'
  },
  font: {
    type: String,
    default: 'roboto'
  },
  color: {
    type: String,
    default: '#000000'
  },
});

const Theme = mongoose.model('Theme', themeSchema);
module.exports = Theme