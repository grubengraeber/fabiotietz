import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>You received a new message from, {name}!</h1>
    <p>Message: {message}</p>
    <hr />
    <p>Make sure to respond under, {email}</p>

    <br></br>
    <p>Have an awesome day! 😎</p>
  </div>
);

export default EmailTemplate;