const VerificationEmail = ( username, otp) => {
    return `<!DocTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name ="viewport" content="width=device-width, inital-scale=1.0">
    <title>Email Verification </title>
    <style>
    body {
    font-family: Arial, sans-serif;
    margin:0;
    padding:0;
    background-color:#f4f4f4;
    color:#333;
    }
    .container {
    max-width:600px;
    margin:20px auto;
    background: #fff;
    padding:20px;
    border-radius:8px ;
    margin-top:20px
    }
    </style>
    </head>
    <body>
    <div class="container">
    <div class="header">
    <h1>Verify Your Email Address</h1>
    <h2>Hello ${username}</h2>
    </div>
    <div class="content">
    <p>Thank you for registering .Please use the Otp below to verify your email address:</p>
    <div class="otp">${otp}</div>
    <p>If you didn't create your account , you can safely ignore this email.</p>
    </div>
    <div class="footer">
    <p>&copy ; 2024 Classy Shop mart .All rights reserved. </p>
    </div>
    </div>
    </body>
    </html>
    `;
};
export default VerificationEmail;
