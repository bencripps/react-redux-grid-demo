/*
* @Author: ben_cripps
* @Date:   2015-01-10 18:21:13
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-11-19 20:45:54
*/

export class Mailer {
    constructor(nodemailer) {
        this.smtpTransport = nodemailer.createTransport('SMTP', {
            service: 'Gmail',
            auth: {
                user: 'heartgov@gmail.com',
                pass: process.env.mailPassword
            }
        });
    }
    getEmail(emailData) {
        const mailOptions = {
            contentType: 'text/html',
            from: 'bencripps1@gmail.com',
            to: 'ben@benjamincripps.com',
            subject: 'benjamincripps.com - email',
            html: [
                'Email from:',
                emailData.emailAddress,
                'Content:',
                emailData.content,
                'Name:',
                emailData.name
            ].join('\n')
        };

        return mailOptions;
    }
    sendMail(emailData) {
        this.smtpTransport.sendMail(this.getEmail(emailData), (error, response) => {
            console.log(error, response);
        });
    }
}
