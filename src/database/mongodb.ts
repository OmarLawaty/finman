import mongoose from 'mongoose';

import { DB_URI } from '../config';

const connectDB = async () => {
  if (!DB_URI) throw new Error('Define the mongodb DB_URI in the .env');

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(DB_URI, { dbName: 'finman' });
    console.log(`connected to db successfully`);
  } catch (error) {
    console.log('ERROR: error occurred while connecting to db');
  }
};

export default connectDB;
