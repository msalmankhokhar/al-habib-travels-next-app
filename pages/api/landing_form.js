// pages/api/query_form.js
import connect from '@/lib/mongoose';
import mailer from '@/lib/mailer';
import ejs from 'ejs';
import { readFileSync } from 'fs'
import { join } from 'path';

export default async function handler(req, res) {
  await connect(); // Connect to MongoDB

  if (req.method === 'POST') {
    try {
      const data = JSON.parse(req.body);
      const { name, email } = data;

      {
        // generating html for user
        const templatePath = join(process.cwd(), 'email_templates', 'user_landing_form.html');
        const template = readFileSync(templatePath, 'utf-8');
        const htmlContent = ejs.render(template, { name, data })
  
        // // sending Email
        await mailer.sendMail({
          from: `"Al Habib Travel" <${process.env.SMTP_USER}>`,
          to: email,
          subject: 'Your query has been recorded',
          html: htmlContent
        })
      }
      {
        // generating html for owner
        const templatePath = join(process.cwd(), 'email_templates', 'owner_alert_landing_form.html');
        const template = readFileSync(templatePath, 'utf-8');
        const htmlContent = ejs.render(template, { name, data })
  
        // // sending Email
        await mailer.sendMail({
          from: `"Al Habib Travel" <${process.env.SMTP_USER}>`,
          to: email,
          subject: 'Your query has been recorded',
          html: htmlContent
        })
      }

      res.status(200).json({ success: true, msg: "recieved the query", data });
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: error.message });
    }
  } else if (req.method === 'GET') {
    // generating html
    const templatePath = join(process.cwd(), 'email_templates', 'user_welcome.html');
    const template = readFileSync(templatePath, 'utf-8');
    const htmlContent = ejs.render(template, { name: "arooj" })
    res.send(htmlContent)
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed, only POST requests are allowed' });
  }
}