import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    message: string;
    subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    message,
    subject,
}) => (
    <div>
        <h1>Subject, {subject}</h1>
        <p>name: {name}</p>
        <p>message: {message}</p>
    </div>
);
