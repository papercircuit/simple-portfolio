require("dotenv").config();
const { google } = require("googleapis");
const express = require("express");
const app = express();

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  "http://localhost:3000/oauth2/callback"
);

app.get("/oauth2/callback", async (req, res) => {
  const code = req.query.code;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log("Your refresh token is:", tokens.refresh_token);
    res.send("Refresh token has been logged. You can close this window.");
  } catch (error) {
    console.error("Error retrieving access token:", error);
    res.status(500).send("Failed to get access token");
  }
});

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/gmail.send"],
  });
  console.log("Authorize this app by visiting this URL:", authUrl);
});
