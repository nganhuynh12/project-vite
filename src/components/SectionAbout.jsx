import React, {useRef} from 'react'
import ComponentAboutItem from "./ComponentAboutItem";
import {useTranslation} from "react-i18next";

const aboutItems = [
    {
        title: "Web Design",
        content: "95%",
        value: 95
    },

    {
        title: "Mobile Apps",
        content: "80%",
        value: 80
    },

    {
        title: "SEO Stuffs",
        content: "70%",
        value: 70
    },

    {
        title: "HTLM5 & CSS3",
        content: "90%",
        value: 90
    },

]

function SectionAbout() {
    const { t } = useTranslation();
    return (
        <div className="sectionAbout">
            <div className="sectionAbout__content1">
                <h2>{t("ABOUT LAVISH")}</h2>
                <h4>{t("DESIGNER & DEVELOPER")}</h4>
                <p>{t("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.")}</p>
                <p>{t("Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.")}</p>
            </div>

            <div className="sectionAbout__content2">
                {
                    aboutItems.map((item) => {
                        return (
                            <ComponentAboutItem
                                title={t(item.title)}
                                content={t(item.content)}
                                value={item.value}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SectionAbout