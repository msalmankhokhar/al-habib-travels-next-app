// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method == 'GET') {
    const { rating } = req.query;
    const pkgList = await prisma.package.findMany({
      where: rating ? { rating: parseInt(rating) } : {}
    });
    res.status(200).json({ success: true, rating: parseInt(rating), data: pkgList });
  }else{
    res.status(403).json({ success: false, msg: 'Only supports GET request' });
  }
}