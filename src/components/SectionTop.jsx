import React from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeText} from "../features/counter/sectionTopDataSlice";

function SectionTop(props) {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const {name, email, message} = props
    const title = useSelector((state) => state.sectionTopData.title1) //goi lay gia tri da luu trong store reducer
    const dispatch = useDispatch() //ham de thay doi
    return (
        <div className="sectionTop">
            <div className="sectionTop__translate">
                <button className="sectionTop__vi" onClick={() => {
                    i18n.changeLanguage("vi")
                }}>VN</button>
                <button className="sectionTop__en" onClick={() => {
                    i18n.changeLanguage("en")
                }}>EN</button>
            </div>
            <div className="sectionTop__content">
                {/*<h3>{t("Simple and Elegant")}</h3>*/}
                <h3>{title}</h3>
                <button className="sectionTop__buttonTop" onClick={() => dispatch(changeText('abc'))}>Lavish</button>
                <h2 className="sectionTop__text">UI & UX SPECIALIST</h2>
                <p>{t("Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.")}</p>
                <p>{name} -- {email} -- {message}</p>
                    <button className="sectionTop__buttonBottom" onClick={() => {
                        navigate("/about");
                    }}>{t("Get Started")}</button>

            </div>
        </div>
    )
}

export default SectionTop
