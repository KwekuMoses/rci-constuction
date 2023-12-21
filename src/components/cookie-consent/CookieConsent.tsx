"use client"
import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import "./CookieConsent.scss";

const CookieConsent = () => {
    const [showConsent, setShowConsent] = React.useState(true);

    React.useEffect(() => {
        setShowConsent(hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
    };

    if (showConsent) {
        return null;
    }

    return (
        <div className="Cookiebanner">
            <div className="Cookiebanner__Content">
                <span className="Cookiebanner__Text">
                    This website uses cookies to improve user experience.
                    <br />By using our website you consent to all cookies in accordance with our Cookie Policy.
                </span>
                <button className="Cookiebanner__Button" onClick={() => acceptCookie()}>
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;