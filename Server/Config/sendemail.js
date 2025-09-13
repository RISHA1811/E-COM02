import {sendEmail} from "./emailservice.js";

const sendEmailFun = async (sendTo, subject, text, html) => {
    try {
        console.log('sendEmailFun called with:', { sendTo, subject });
        const result = await sendEmail(sendTo, subject, text, html);
        console.log('Email sending result:', result);
        
        if (result.success) {
            return true;
        } else {
            console.error('Email sending failed:', result.error);
            return false;
        }
    } catch (error) {
        console.error('Error in sendEmailFun:', error);
        return false;
    }
}

export default sendEmailFun;
