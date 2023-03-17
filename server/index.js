const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET
);

const getAccessToken = async () => {
  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });
  const { token } = await oauth2Client.getAccessToken();
  return token;
};

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER, // your email address where you want to receive emails
    subject: `New message from ${name}`,
    text: message,
  };

  const accessToken = await getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken,
    },
  });

 app.post("/send-email", async (req, res) => {
   try {
     const info = await transporter.sendMail(mailOptions);
     console.log("Email sent:", info.response);
     res.status(200).send("Email sent successfully");
   } catch (error) {
     console.error("Error sending email:", error);
     res.status(500).send({ error: error.message, stack: error.stack });
   }
 });

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
