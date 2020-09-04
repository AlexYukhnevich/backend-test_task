import { createTransport } from 'nodemailer';

interface SendMail {
  readonly sender: string;
  readonly password: string;
  readonly port: string;
  readonly host: string;
}

export const createLocalTransport = (config: SendMail) => {
  const { sender, password, port, host } = config;
  try {
    const transporter = createTransport({
      host: host,
      port: Number(port),
      secure: false,
      auth: {
        user: sender,
        pass: password,
      },
    })
    return transporter;
  } catch ({ message }) {
    console.log( { message });
  }
}

