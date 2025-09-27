// Import nodemailer
const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter (using Gmail as example)
// NOTE: For Gmail, you need to use App Passwords, not your regular password
// Enable 2-factor authentication and create an app password
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


// Email options
const mailOptions = {
    from: process.env.SENDER_EMAIL,           
    to: process.env.RECIPIENT_EMAIL,            
    subject: 'Test Email from Node.js',
    text: 'Hello! This is a test email sent using Node.js and Nodemailer.',
    html: `
        <h2>Hello from Node.js!</h2>
        <p>This is a <strong>test email</strong> sent using:</p>
        <ul>
            <li>Node.js</li>
            <li>Nodemailer package</li>
        </ul>
        <p>Time sent: ${new Date().toLocaleString()}</p>
    `
};

// Function to send email
function sendEmail() {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
            return;
        }
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
        console.log('Response:', info.response);
    });
}

// Send the email
sendEmail();
