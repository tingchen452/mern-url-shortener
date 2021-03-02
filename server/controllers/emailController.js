const mailer = require("nodemailer");

sendMail = (req, res) => {
  try {
    const { email, name, message } = req.body;
    const password = process.env.PASSWORD;
    const transporter = mailer.createTransport({
      service: "Gmail",
      auth: {
        user: "tingchen2222@gmail.com",
        pass: password,
      },
    });
    const mailOptions = {
      to: "tingchen2222@gmail.com",
      subject: name + ":" + email,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error.message);
      } else {
        // console.log("email sent" + info.response);
        // res.json("Email successfully sent. " + info.response);
      }
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = sendMail;
