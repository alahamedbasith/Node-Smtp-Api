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

app.post('/sendemail', (req, res) => {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "alahamedbasithce@gmail.com", // Use environment variables
        pass: "amnbzamsacwumroy"
      }
    });
  
    const mailOptions = {
      from: email,
      to: 'ahamedbasith006@gmail.com', // Replace with the recipient's email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error sending email' }); // Send JSON response
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' }); // Send JSON response
      }
    });
  });
console.log("Form receive");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
