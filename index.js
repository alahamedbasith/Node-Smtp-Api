const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
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
  res.send('Hello!');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

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
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'Email sent successfully' });
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
