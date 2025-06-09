import express from 'express';

import { PORT } from './const';
import { transactionRouter, walletRouter } from './routes';
import connectDB from './database/mongodb';

const app = express();

// CORS
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/wallet', walletRouter);
app.use('/transaction', transactionRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
