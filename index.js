const express = require('express');
const bodyParser = require('body-parser'); // Required to parse JSON request bodies

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Process the form data here
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Example: Sending email with Nodemailer (optional)
  // const nodemailer = require('nodemailer');
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'your-email@gmail.com',
  //     pass: 'your-email-password'
  //   }
  // });
  // const mailOptions = {
  //   from: email,
  //   to: 'your-email@gmail.com',
  //   subject: 'Contact Form Submission',
  //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  // };
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return res.status(500).send('Error sending email');
  //   }
  //   res.status(200).send('Email sent successfully');
  // });

  res.status(200).send('Form data received');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
