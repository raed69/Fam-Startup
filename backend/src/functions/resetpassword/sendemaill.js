const nodemailer = require('nodemailer');

const SendEmailFunction = async (email, subject, content, htmlContent) => {
  try {
    // Create a nodemailer transporter using SMTP or other transport options
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'raed.himaya@gmail.com',
        pass: 'adiasrtbecxuvwpn',
      }
    });

    // Define email options
    let mailOptions = {
      from: 'raed.himaya@gmail.com',
      to: email,
      subject: subject,
      text: content,
      html: htmlContent // Add HTML content here
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

module.exports = SendEmailFunction;

// Example usage
SendEmailFunction(
  'recipient@example.com', 
  'Test Subject', 
  'This is a test email.', 
  '<p>This is a test email. Click <a href="https://example.com">here</a> to visit the website.</p>'
)
  .then(() => console.log('Email sent successfully'))
  .catch((error) => console.error('Failed to send email:', error));
