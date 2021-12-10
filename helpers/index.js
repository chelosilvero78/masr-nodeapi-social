const nodeMailer = require("nodemailer");

const defaultEmailData = { from: "noreply@node-react.com" };

//const dotenv = require('dotenv');
//dotenv.config();

exports.sendEmail = emailData => {
  console.log("pass-->",process.env.CLIENT_EMAIL_USER,process.env.CLIENT_EMAIL_PASSWORD)
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    // auth: {
    //   user: "masterjupiter2015@gmail.com",
    //   pass: "kshzlmomlthllktq"
    // }
    auth: {
      user: process.env.CLIENT_EMAIL_USER ,
      pass: process.env.CLIENT_EMAIL_PASSWORD
    }
  });
  return transporter
    .sendMail(emailData)
    .then(info => console.log(`Message sent: ${info.response}`))
    .catch(err => console.log(`Problem sending email: ${err}`));
};
