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
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
    <div className="bg-blue-600 p-4">
      <h1 className="text-white text-2xl font-bold">New Message from {name}!</h1>
    </div>
    <div className="p-6">
      <p className="text-gray-700 text-lg mb-4">
        <span className="font-semibold">Message:</span> {message}
      </p>
      <hr className="my-4" />
      <p className="text-gray-500 mb-4">
        <span className="font-semibold">Respond to:</span> <a href={`mailto:${email}`} className="text-blue-500">{email}</a>
      </p>
      <div className="text-center">
        <a href={`mailto:${email}`} className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-700">
          Reply to {name}
        </a>
      </div>
    </div>
    <div className="bg-gray-100 p-4 text-center">
      <p className="text-gray-700">Have an awesome day! 😎</p>
    </div>
  </div>
);

export default EmailTemplate;