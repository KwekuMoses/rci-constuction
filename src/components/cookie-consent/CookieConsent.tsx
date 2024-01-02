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
                    Denna webbplats använder cookies för att förbättra användarupplevelsen.
                    <br />Genom att använda vår webbplats godkänner du alla cookies i enlighet med vår Cookiepolicy.
                </span>
                <button className="Cookiebanner__Button" onClick={() => acceptCookie()}>
                    Acceptera
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;