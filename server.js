const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: 'Terracotta Plate', price: 15.99, image: 'plate.jpg' },
  { id: 2, name: 'Terracotta Bowl', price: 9.99, image: 'bowl.jpg' }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/send-email', (req, res) => {
  const { cart } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your email
      pass: 'your-email-password' // Replace with your email password
    }
  });

  const mailOptions = {
    from: 'aakashambodkar99@gmail.com',
    to: 'aakashambodkar@icloud.com', // Replace with the owner email
    subject: 'New Order',
    text: `You have a new order: \n${cart.map(item => `${item.name} - $${item.price}`).join('\n')}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Order email sent successfully' });
    }
  });
});

const PORT = 5001; // Changed from 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));