import mongoose from 'mongoose';

const connection = {}; // Connection status

async function connectDb() {
  if (connection.isConnected) {
    console.log('Already Connected to database')
    return true;
  }

  try {
    const db = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 4000
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database");
    return true
    
  } catch (error) {
    console.log(error)
    return false
  }
}

export default connectDb;

export const serializePackages = (pkgList) =>
  pkgList.map((pkg) => {
    const { _id, __v, ...rest } = pkg;
    return rest;
  });