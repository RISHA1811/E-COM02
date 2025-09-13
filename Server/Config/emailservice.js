import http from "http";
import nodemailer from "nodemailer";

console.log('Email configuration:', {
    email: process.env.EMAIL,
    passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0
});

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
    debug: true, // Enable debug logging
    logger: true  // Log to console
});

async function sendEmail(sendTo, subject, text, html){
    try {
        console.log('Attempting to send email to:', sendTo);
        
        if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
            throw new Error('Email configuration missing. Please check EMAIL and EMAIL_PASS in .env file');
        }

        const mailOptions = {
            from: `"E-commerce Admin" <${process.env.EMAIL}>`,
            to: sendTo,
            subject,
            text,
            html,
        };

        console.log('Sending email with options:', { ...mailOptions, html: 'HTML content hidden' });
        
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };

    } catch (error) {
        console.error('Error sending email:', error);
        console.error('Error details:', error.stack);
        return { success: false, error: error.message };
    }
}

export {sendEmail} ;

  