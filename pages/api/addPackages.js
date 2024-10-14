// pages/api/addPackages.js
import connect from '@/lib/mongoose';
import Package from '@/models/Package';

export default async function handler(req, res) {
  await connect(); // Connect to MongoDB

  if (req.method === 'POST') {
    try {
      const packages = req.body.data; // Get the array of packages from the request body

      // Validate that it's an array
      if (!Array.isArray(packages)) {
        return res.status(400).json({ success: false, message: 'Data should be an array of packages' });
      }

      // Insert the array of packages into the database
      const insertedPackages = await Package.insertMany(packages);
      
      // Respond with success and the inserted packages
      res.status(201).json({ success: true, msg: "Added successfully in the database" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed, only POST requests are allowed' });
  }
}