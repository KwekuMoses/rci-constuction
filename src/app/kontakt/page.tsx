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
            setIsEmailSent(true); // Set the flag to true on successful email send
        } catch (error) {
            console.error('Error sending email:', error);
            setIsEmailSent(false); // Reset the flag in case of an error
        }
    };


    return (
        <div className="ContactPage">
            <Title title="Kontakt" />
            <form className="Form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="Form__Title">Kontakta oss</h2>
                <p className="Form__Description">Via formuläret kan du kontakta oss angående nya projekt, ekonomi och garantifrågor.</p>
                <input className="Form__Input" {...register("firstName")} placeholder="Ditt namn" required defaultValue="kweku" />
                <input className="Form__Input" {...register("email")} placeholder="Email" required defaultValue="kweku.moses@hotmail.com" />
                <input className="Form__Input" {...register("subject")} placeholder="Ämne" required defaultValue="testing" />
                <textarea className="TextArea" {...register("message")} placeholder="Meddelande" defaultValue="message" />
                {/* <p>{data}</p> */}
                {isEmailSent && <p className="Form__Success">Ditt meddelande är skickat!</p>}

                <input type="submit" className="Form__Button" value="Skicka meddelande" />
            </form>
        </div>
    );
};

export default Page;
