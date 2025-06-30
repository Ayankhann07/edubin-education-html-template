const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to handle form data
app.post("/send-enquiry", (req, res) => {
  const {
    Name,
    Contact,
    Last_Qualification,
    Board,
    Date_of_Birth,
    Course,
    Last_College_University,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ayankh6543@gmail.com", // sender's email
      pass: "fqzjcvxcjufmhvvs", // 🔒 use Gmail App Password, not your login password
    },
  });

  const mailOptions = {
    from: "ayankhan6543@gmail.com",
    to: "ayankhan7955@gmail.com",
    subject: "New Admission Enquiry",
    text: `
Name: ${Name}
Contact: ${Contact}
Last Qualification Exam: ${Last_Qualification}
Board: ${Board}
Date of Birth: ${Date_of_Birth}
Course: ${Course}
Last College/University: ${Last_College_University}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Email error:", error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Enquiry submitted successfully!");
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
