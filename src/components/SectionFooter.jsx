import React, {useRef} from 'react'
import {FaFacebookSquare, FaInstagram, FaTwitter} from "react-icons/fa";
import {useTranslation} from "react-i18next";

function SectionFooter() {
    const { t} = useTranslation();


    return (
        <div className="sectionFooter">
            <p>{t("Copyright 2018 Lavish Personal Profile . Designed by templatemo")}</p>
            <div className="sectionFooter__icon">
                <a><FaFacebookSquare></FaFacebookSquare></a>
                <a> <FaTwitter></FaTwitter></a>
                <a><FaInstagram></FaInstagram></a>
            </div>
        </div>
    )
}

export default SectionFooter