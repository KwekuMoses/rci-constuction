import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    message: string;
    subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    message,
    subject,
}) => (
    <div>
        <h1>Subject, {subject}!</h1>
        <p>name: {firstName}</p>
        <p>message: {message}</p>
    </div>
);
