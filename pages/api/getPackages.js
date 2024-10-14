import connectDb from '@/lib/mongoose';
import Package from '@/models/Package';

export default async function handler(req, res) {
  await connectDb(); // Ensure the database is connected

  if (req.method === 'GET') {
    try {
      const packages = await Package.find(); // Fetch all packages
      res.status(200).json({ success: true, data: packages });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(403).json({ success: false, msg: 'Only supports GET request' });
  }
}