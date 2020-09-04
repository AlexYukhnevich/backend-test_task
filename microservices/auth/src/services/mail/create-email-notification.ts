import { createMessageEnvelope } from './create-message-envelope';

export const createEmailNotification = (from: string, to: string, mailData: any) => {
  const { url, path } = mailData;
  const subject = 'Account Activation Link';
  const messageHtml = `
    <h2>Please click to confirm your email</h2>
    <p>Here is a link: <a href="${path}">${url}</a></p>
  `;
  const mail =  {
    subject,
    html: messageHtml
  };

  return createMessageEnvelope(from, to, mail);
}