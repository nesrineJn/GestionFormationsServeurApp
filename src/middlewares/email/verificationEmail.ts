
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'quiznesquiz@gmail.com',
    pass: 'unbgerasqpbsnync',
  },
});

export const sendVerificationEmail = async (userEmail, code) => {
  const mailOptions = {
    from: '"PeerPark" quiznesquiz@gmail.com',
    to: userEmail,
    subject: 'Vérifiez votre compte',
    html: `<h2>Votre code de vérification est:</h2>
           <h3>${code}</h3>
    `,
  };

  await transporter.sendMail(mailOptions);
};
