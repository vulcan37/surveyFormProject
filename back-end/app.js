const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

// app.get('/', (req, res) => {
//   res.send('hello');
//   console.log('check')
// })
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