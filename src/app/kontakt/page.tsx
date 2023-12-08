"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Title from '@/components/Title/Title';
import './page.scss';

const Page = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);

    const onSubmit = async (formData: any) => {
        try {
            const response = await fetch('/api/contact', {
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
            </form>
        </div>
    );
};

export default Page;
