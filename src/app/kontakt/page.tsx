"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Link from 'next/link';

import Title from '@/components/title/Title';
import './page.scss';

const Page = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);

    const onSubmit = async (formData: any) => {
        try {
            const response = await fetch('/resend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setData(JSON.stringify(responseData));
            setIsEmailSent(true);
        } catch (error) {
            console.error('Error sending email:', error);
            setIsEmailSent(false);
        }
    };


    return (
        <div className="ContactPage">
            <Title title="Kontakt" />
            <form className="Form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="Form__Title">Kontakta oss</h2>
                <p className="Form__Description">Via formuläret kan du kontakta oss angående nya projekt, ekonomi och garantifrågor.</p>
                <input className="Form__Input" {...register("name")} placeholder="Ditt namn" required />
                <input className="Form__Input" {...register("email")} placeholder="Email" required />
                <input className="Form__Input" {...register("subject")} placeholder="Ämne" required />
                <textarea className="TextArea" {...register("message")} placeholder="Meddelande" />
                {/* <p>{data}</p> */}
                {isEmailSent && <p className="Form__Success">Ditt meddelande är skickat!</p>}
                <input type="submit" className="Form__Button" value="Skicka meddelande" />
                <p className="Form__Policy">
                    När du skickar meddelande eller e-post lämnar du samtycke till att vi hanterar dina personuppgifter du lämnar.
                    <Link href="/integritetspolicy"> Här kan du läsa mer om hur vi hanterar dina personliga uppgifter.</Link>
                </p>

            </form>
        </div>
    );
};

export default Page;
