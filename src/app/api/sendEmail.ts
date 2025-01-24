import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, number, email, message } = req.body;

  if (!name || !number || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider or SMTP server
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email
      to: 'ashish23jordson@gmail.com', // Replace with your email address
      subject: 'New Enquiry',
      text: `
        Name: ${name}
        Number: ${number}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
