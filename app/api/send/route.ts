import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/app/components/email-template'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: NextRequest) {
      const { name, email, message } = await request.json();
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <contact@fabiotietz.com>',
      to: ['fabiotietz0@gmail.com'],
      subject: 'New message',
      react: EmailTemplate({ name, email, message }),
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}