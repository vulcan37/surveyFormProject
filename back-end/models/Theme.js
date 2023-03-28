const mongoose = require('mongoose');
const themeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    enum: ['light', 'dark'],
    default: 'light'
  },
  type: {
    type: String,
    default: 'Survey',
    enum: [Survey]

  },
  formType: {
    type: String,
    enum: ['One to one', 'single-page'],
    default: 'single-page'
  },
  mandatory: {
    type: String,
    default: 'yes',
    enum: ['no', 'yes']
  },
  skipButton: {
    type: String,
    default: no,
    enum: ['no', 'yes']
  },
  optionType: {
    type: String,
    enum: ['radio', 'checkbox'],
    default: 'radio'
  },
  font: {
    type: String,
    default: 'Roboto'
  },
  color: {
    type: String,
    default: 'black'
  },
  surveyId: { type: Schema.Types.ObjectId, ref: 'Survey', required: true }
});

const Theme = mongoose.model('Theme', themeSchema);
module.exports = Theme