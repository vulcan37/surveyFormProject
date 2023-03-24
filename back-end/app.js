const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const router = require('./routes/User');
require('dotenv').config();
const themeRouter = require('./routes/Theme')

// payload
app.use(express.json())

// register
app.use("/api", router)


app.use('/api/v1/themes', themeRouter)
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