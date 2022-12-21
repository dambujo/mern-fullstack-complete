import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
dbConnect();

app.use('/', (req, res) => {
  res.send('Backend');
});
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
