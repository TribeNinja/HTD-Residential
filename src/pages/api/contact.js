// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default async (req, res) => {
  const { fullName, phone, email, property, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  // Define the email message details
  const mailOptions = {
    from: process.env.EMAIL_SERVER_USER,
    to: process.env.EMAIL_TO_BE_SENT_TO,
    subject: "HTD Residential website inquiry form",
    html: `<h2>Happy To Deliver Residential</h2><p>Name: ${fullName}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Property Name: ${property}</p><p>Message: ${message}</p>`,
  };

  // Send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
};
