import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });

  }

      const { name, email, message } = await req.json();


  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <contact@fabiotietz.com>',
      to: ['fabiotietz0@gmail.com'],
      subject: 'New message',
      react: EmailTemplate({ name, email, message }),
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}