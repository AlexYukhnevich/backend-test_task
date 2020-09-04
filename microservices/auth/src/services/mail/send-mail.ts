import { createEmailNotification } from './create-email-notification';
import { createLocalTransport } from './create-transport';
import { mailConfig } from '../../config';

const { senderMail, senderPassword, smtpPort, smtpHost } = mailConfig;

export const sendMail = async (mailData: any) => {
  try {
    
    const { email: targetMail } = mailData;
    const transporter = createLocalTransport({
      sender: senderMail, 
      password: senderPassword, 
      port: smtpPort, 
      host: smtpHost,
    });
    const mail = createEmailNotification(senderMail, targetMail, mailData);
    await transporter.sendMail(mail);

  } catch (err) {
    console.error(err.message);
  }
}