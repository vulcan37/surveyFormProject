const Theme = require('../models/Theme')

const createTheme = async (req, res) => {
  try {
    const theme = await Theme.create(req.body)
    res.status(201).json({ theme })
  }
  catch (err) {
    console.log(err)
  }
}

const getTheme = async (req, res, next) => {
  try {
    const { id: themeID } = req.params
    const theme = await Theme.findOne({ _id: themeID })
    if (!theme) {
      res.status(404).send('no theme found')
    }

    res.status(200).json({ theme })
  }
  catch (err) {
    console.log(err)
  }
}
const deleteTheme = async (req, res, next) => {
  try {
    const { id: themeID } = req.params
    const theme = await Theme.findOneAndDelete({ _id: themeID })
    if (!theme) {
      res.status(404).json({ msg: 'no theme with that id' })
    }
    res.status(200).json({ theme })
  }
  catch (err) {
    console.log(err)
  }
}
const updateTheme = async (req, res, next) => {
  const { id: themeID } = req.params

  const theme = await Theme.findOneAndUpdate({ _id: themeID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!theme) {
    res.status(404).json({ msg: 'no theme with that id' })
  }

  res.status(200).json({ theme })
}

module.exports = {
  createTheme,
  getTheme,
  updateTheme,
  deleteTheme,
}