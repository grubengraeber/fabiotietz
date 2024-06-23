import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../../app/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const buffers: Buffer[] = [];
      for await (const chunk of req.body) {
        buffers.push(chunk);
      }
      const data = Buffer.concat(buffers).toString();
      const body = JSON.parse(data);

      const { name, email, message } = body;


  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <contact@fabiotietz.com>',
      to: ['fabiotietz0@gmail.com'],
      subject: 'New message',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}