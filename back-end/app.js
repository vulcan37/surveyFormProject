const express = require('express');
const app = express();
const cors = require("cors")
const connectDB = require('./db/connect');
const router = require('./routes/User');
require('dotenv').config();
const themeRouter = require('./routes/Theme')
const survey = require("./routes/Survey");
const questions = require("./routes/Questions");
const Authorise = require('./middlewares/Authorise');

//allowing cross origin resource sharing
app.use(cors())

// payload
app.use(express.json())

// register
app.use("/api/v1", router)

//survey
app.use("/api/v1/survey", Authorise, survey);

//questions
app.use("/api/v1/question", Authorise, questions);

//theme router
app.use('/api/v1/themes', Authorise, themeRouter)

const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('DB is connected');
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();