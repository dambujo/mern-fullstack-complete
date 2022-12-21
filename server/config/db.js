import { default as mongoose } from 'mongoose';

mongoose.set('strictQuery', false);

const dbConnect = () => {
  try {
    const conn = mongoose.connect('mongodb://localhost:27017/');
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Database connection failed');
  }
};

export default dbConnect;
