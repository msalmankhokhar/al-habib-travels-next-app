import connectDb from '@/lib/mongoose';
import Package from '@/models/Package';

export default async function handler(req, res) {
    await connectDb(); // Ensure the database is connected
    const title = req.query.title

    if (req.method === 'GET') {
        try {
            const pkg = await Package.findOne({ title }); // Fetch a single package with specific title
            if (pkg) {
                res.status(200).json({ success: true, pkg });
            } else {
                res.status(404).json({ success: false, found: false, msg: 'No package found with this title', pkg });
            }
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(403).json({ success: false, msg: 'Only supports GET request' });
    }
}