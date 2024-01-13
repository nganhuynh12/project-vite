import React, {useRef, useState} from 'react'
import {FaMapMarker, FaPhoneAlt} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {changeContent} from "../features/counter/sectionContactDataSlice";
import {useNavigate} from "react-router-dom";


function SectionContact(props) {
    const { t} = useTranslation();
    const {name, setName, email, setEmail, message, setMessage} = props
    const dispatch = useDispatch()
    const navigate = useNavigate();

    function handleSendClick (){
        dispatch(changeContent({ fieldName: 'yourName', value: name }));
        dispatch(changeContent({ fieldName: 'yourEmail', value: email }));
        dispatch(changeContent({ fieldName: 'yourMessage', value: message }));
        navigate("/about");
}

    return (
        <div className="sectionContact">
            <div className="sectionContact__content1">
                <h2>{t("CONTACT ME")}</h2>
                <div className="sectionContact__item">
                    <div className="sectionContact__icon"><FaPhoneAlt></FaPhoneAlt></div>
                    <p>090-080-0760</p>
                </div>
                <div className="sectionContact__item">
                    <div className="sectionContact__icon"><MdOutlineEmail></MdOutlineEmail></div>
                    <p> info@company.com</p>
                </div>
                <div className="sectionContact__item">
                    <div className="sectionContact__icon"><FaMapMarker></FaMapMarker></div>
                    <p>{t("120 Old Walking Street")}</p>
                </div>
            </div>
            <div className="sectionContact__content2">
                <input className="sectionContact__name" placeholder={t("Your Name")} onChange={(event) => {
                    setName(event.target.value)
                }}/>
                <input className="sectionContact__email" placeholder={t("Your Email")} onChange={(event) => {

                    setEmail(event.target.value)
                }}/>
                <textarea className="sectionContact__message" placeholder={t("Your Message")} onChange={(event) => {
                    setMessage(event.target.value)
                }}/>
                <button className="sectionContact__send" onClick={handleSendClick}>SEND ME</button>
                <div>{name} -- {email} -- {message}</div>
            </div>
        </div>
    )
}

export default SectionContact