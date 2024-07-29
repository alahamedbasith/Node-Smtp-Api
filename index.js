const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/contact', (req, res) => {
  res.send('Hello,!');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Process the form data here
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Example: Sending email with Nodemailer (optional)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alahamedbasithce@gmail.com',
      pass: 'amnbzamsacwumroy'
    }
  });

  const mailOptions = {
    from: email,
    to: 'ahamedbasith006@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });

  // For testing purposes, you might want to comment out the Nodemailer code and just send the response
  // res.status(200).send('Form data received');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
